import DOMPurify from 'isomorphic-dompurify'
import parse from 'html-react-parser'

import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import { fetchAllEditorialBoardData, fetchEditorialBoard } from '@/lib/data'
import {
  DeleteButton,
  EditButton,
  LinkButton,
  PublishButton,
  RejectPublishButton,
  SendForAuthorizationButton,
} from '@/components/Dashboard/Buttons'
import ResourceFilter from '@/components/Dashboard/ResourceFilter'
import { auth } from '../../../../../../auth'
import {
  discardEditorialBoardDraft,
  publishEditorialBoard,
  rejectRequestToPublishEditorialBoard,
  submitEditorialBoardForPublishing,
} from '@/lib/actions/editorialBoard'

async function EditorialBoard({ searchParams }) {
  const mode = searchParams?.mode ? searchParams.mode : 'final'
  console.log('mode-------------', mode)
  const data = await Promise.all([
    fetchEditorialBoard(mode),
    fetchAllEditorialBoardData(),
  ])

  console.log('data=======', data)
  const [[editorialBoardData], editorialBoardArray] = data
  // const fetchedEditorialBoardData = await fetchEditorialBoard(mode)
  // const [editorialBoardData] = fetchedEditorialBoardData

  const editorialBoardDataWithStyles = editorialBoardData?.content.replace(
    /<h3>/g,
    "<h3 className='text-base font-saira md:text-xl'>"
  )
  const session = await auth()
  const businessManagerPrivilege =
    editorialBoardData?.status === 'draft' &&
    session?.user.role === 'business manager'
  const managingEditorPrivilege =
    editorialBoardData?.status === 'review' &&
    session?.user.role === 'managing editor'
  console.log('searchParams----------', businessManagerPrivilege)
  console.log('xxxxxx-', editorialBoardData)

  if (!editorialBoardData?._id) {
    return (
      <DashboardContainer>
        <DashboardWrapper>
          <div className='flex items-center justify-between pb-3 border-b-2 border-200'>
            <ResourceFilter mode={mode} />
          </div>
          <section className='flex flex-col'>
            {/* <h3 className='text-2xl font-medium '>Pending Jobs</h3> */}
            <div className='flex items-center justify-center flex-1 my-24'>
              <p className='text-2xl font-medium text-gray-400'>
                {session?.user?.role === 'managing editor'
                  ? 'Oops! No pending draft editorial board for authorization'
                  : 'Oops! No pending draft editorial board '}
              </p>
            </div>
          </section>
        </DashboardWrapper>
      </DashboardContainer>
    )
  }
  return (
    <DashboardContainer>
      <DashboardWrapper>
        <div className='flex items-center justify-between pb-3 border-b-2 border-200'>
          <ResourceFilter mode={mode} />
          {(businessManagerPrivilege ||
            (session?.user?.role === 'business manager' &&
              editorialBoardData?.status === 'published' &&
              editorialBoardArray.length === 1)) && (
            <EditButton
              href={`/dashboard/editorial-board/update?mode=${mode}`}
              label='Edit Editorial Board'
            />
          )}
        </div>

        <section className='pb-6 text-justify'>
          <div className='mb-5'>
            <span className='inline-block px-2 text-base font-medium bg-gray-300 rounded-3xl'>{`status: ${
              editorialBoardData?.status === 'published' ? 'published' : 'Draft'
            }`}</span>
          </div>

          {parse(
            DOMPurify.sanitize(editorialBoardDataWithStyles, {
              ADD_ATTR: ['className'],
            })
          )}
        </section>
        {businessManagerPrivilege && (
          <div className='flex justify-center gap-6 pt-8 pb-6 border-t-2 border-gray-200'>
            <RejectPublishButton
              resource='editorial-board'
              resourceRef={editorialBoardData?.ref}
              label={{ main: 'Discard Draft', alt: 'Removing Draft...' }}
              action={discardEditorialBoardDraft}
              notificationMessage={{
                success: 'Discard successfully',
                error: 'Something went wrong',
              }}
            />
            <SendForAuthorizationButton
              redirectUrl={`/dashboard/editorial-board?mode=${mode}`}
              resource='editorial-board'
              resourceRef={editorialBoardData?.ref}
              slug={mode}
              action={submitEditorialBoardForPublishing}
              label={{
                main: 'Submit for Authorization',
                alt: 'submitting Editorial Board...',
              }}
              notificationMessage={{
                success: 'Editorial successfully submitted for authorization',
                error: 'Something went wrong',
              }}
            />
          </div>
        )}
        {managingEditorPrivilege && (
          <div className='flex justify-center gap-6 pt-8 pb-6 border-t-2 border-gray-200'>
            <RejectPublishButton
              resource='editorial-board'
              resourceRef={editorialBoardData?.ref}
              label={{ main: 'Reject Publish Request', alt: 'Processing' }}
              action={rejectRequestToPublishEditorialBoard}
              notificationMessage={{
                success: 'Publish request rejected successfully',
                error: 'Something went wrong',
              }}
            />
            <PublishButton
              data={JSON.stringify(editorialBoardData)}
              resource='editorial-board'
              resourceRef={editorialBoardData?.ref}
              slug={editorialBoardData?.slug}
              user={session.user}
              action={publishEditorialBoard}
              notificationMessage={{
                success: 'Editorial board published',
                error: 'Error publishing Editorial board',
              }}
              label={{
                main: 'Publish Editorial board',
                alt: 'Publishing editorial board',
              }}
            />
          </div>
        )}
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default EditorialBoard
