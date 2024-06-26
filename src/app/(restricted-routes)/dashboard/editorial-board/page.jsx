import DOMPurify from 'isomorphic-dompurify'
import parse from 'html-react-parser'
import { formatDate } from '@/lib/util'

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
import { auth } from '../../../../../auth'
import {
  publishEditorialBoard,
  rejectRequestToPublishEditorialBoard,
  submitEditorialBoardForPublishing,
} from '@/lib/actions/editorialBoard'

async function EditorialBoard({ searchParams }) {
  const mode = searchParams?.mode
  console.log('mode-------------', mode)
  const data = await Promise.all([
    fetchEditorialBoard(mode),
    fetchAllEditorialBoardData,
  ])
  // const fetchedEditorialBoardData = await fetchEditorialBoard(mode)
  // const [editorialBoardData] = fetchedEditorialBoardData
  console.log('data=======', data)

  const editorialBoardDataWithStyles = editorialBoardData?.content.replace(
    /<h3>/g,
    "<h3 className='font-saira text-[20px]'>"
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
          <div>
            <ResourceFilter m={mode} />
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
        <div>
          <ResourceFilter m={mode} />
        </div>
        {(businessManagerPrivilege ||
          (session?.user?.role === 'business manager' &&
            editorialBoardData?.status === 'published' &&
            editorialBoardArray.length === 1)) && (
          <div className='flex justify-end gap-6 mt-8 mb-3'>
            {/* <LinkButton
              style='rounded-[8px] flex bg-[#008dcb] hover:bg-blue-600'
              href={`/dashboard/editorial-board/update?mode=${mode}`}
              text='edit'
            /> */}
            {/* <DeleteButton
            variant='primary'
            id={String(announcement?._id)}
            action={deleteAnnouncement}
          /> */}
            <EditButton
              href={`/dashboard/editorial-board/update?mode=${mode}`}
              label='Edit Editorial Board'
            />
          </div>
        )}

        <section className='text-justify'>
          {parse(
            DOMPurify.sanitize(editorialBoardDataWithStyles, {
              ADD_ATTR: ['className'],
            })
          )}
        </section>
        {businessManagerPrivilege && (
          <div className='flex justify-center gap-6 pt-4 pb-6'>
            <SendForAuthorizationButton
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
          <div className='flex justify-center gap-6 mt-8 mb-5 items'>
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
          </div>
        )}
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default EditorialBoard
