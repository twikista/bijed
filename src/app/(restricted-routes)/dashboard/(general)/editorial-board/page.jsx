import DOMPurify from 'isomorphic-dompurify'
import parse from 'html-react-parser'

import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import { fetchAllEditorialBoardData, fetchEditorialBoard } from '@/lib/data'
import {
  EditButton,
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
  const data = await Promise.all([
    fetchEditorialBoard(mode),
    fetchAllEditorialBoardData(),
  ])

  const [[editorialBoardData], editorialBoardArray] = data

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

  if (!editorialBoardData?._id) {
    return (
      <DashboardContainer>
        <DashboardWrapper>
          <div className='flex items-center justify-between pb-3 border-b-2 border-200'>
            <ResourceFilter mode={mode} />
          </div>
          <section className='flex flex-col'>
            <div className='flex items-center justify-center flex-1 my-24'>
              <p className='text-2xl font-medium text-center text-gray-400'>
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
          <div className='flex flex-col justify-center gap-2 pt-3 pb-6 border-t-2 border-gray-200 md:pt-8'>
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
            {(businessManagerPrivilege ||
              (session?.user?.role === 'business manager' &&
                editorialBoardData?.status === 'published' &&
                editorialBoardArray.length === 1)) && (
              <EditButton
                href={`/dashboard/editorial-board/update?mode=${mode}`}
                label='Edit Board'
              />
            )}
          </div>
        )}
        {managingEditorPrivilege && (
          <div className='flex flex-col justify-center gap-2 pt-3 pb-6 border-t-2 border-gray-200 md:pt-8'>
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
