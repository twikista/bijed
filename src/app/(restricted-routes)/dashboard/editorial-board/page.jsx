import DOMPurify from 'isomorphic-dompurify'
import parse from 'html-react-parser'
import { formatDate } from '@/lib/util'

import DashboardContainer from '@/components/Dashboard/DashboardContainer'
import DashboardWrapper from '@/components/Dashboard/DashboardWrapper'
import React from 'react'
import { getEditorialBoard } from '@/lib/data'
import { DeleteButton, EditButton } from '@/components/Dashboard/Buttons'

async function EditorialBoard() {
  const editorialBoard = await getEditorialBoard()
  const x = editorialBoard[0]?.content.replace(
    /<h3>/g,
    "<h3 className='font-saira text-[20px]'>"
  )
  console.log('x-', `${x}`)
  return (
    <DashboardContainer>
      <DashboardWrapper>
        <div className='flex justify-end gap-6 mt-8 mb-3'>
          <EditButton href={`/dashboard/editorial-board/update`} label='edit' />
          {/* <DeleteButton
            variant='primary'
            id={String(announcement?._id)}
            action={deleteAnnouncement}
          /> */}
        </div>

        <section className='text-justify '>
          {parse(
            DOMPurify.sanitize(x, {
              ADD_ATTR: ['className'],
            })
          )}
        </section>
      </DashboardWrapper>
    </DashboardContainer>
  )
}

export default EditorialBoard
