import DOMPurify from 'isomorphic-dompurify'
import parse from 'html-react-parser'
import MainContainer from '@/components/MainContainer'
import {
  fetchAllEditorialBoardData,
  fetchEditorialBoard,
  getEditorialBoard,
} from '@/lib/data'
import { PageHeading } from '@/components/Headings'

export const metadata = {
  title: 'Editorial Board',
  description:
    'This page contain information about the editorial board of BIJED. The board consist of academicians who are have made significant contributions to their fields',
}

async function EditorialBoard() {
  const editorialTeam = await fetchEditorialBoard('final')
  const styledEditorialTeam = editorialTeam?.map((i) =>
    i.content
      .replace(/<h3>/g, "<h3 className='mb-1 text-base md:text-xl font-saira>")
      .replace(/<p>/g, "<p className='text-left mb-[5px]'>")
  )

  return (
    <MainContainer>
      <PageHeading>Editorial Team</PageHeading>
      <div className='justify-center w-full'>
        <div className='mx-auto text-justify lg:w-fit'>
          {parse(
            DOMPurify.sanitize(styledEditorialTeam, {
              ADD_ATTR: ['className'],
            })
          )}
        </div>
      </div>
    </MainContainer>
  )
}

export default EditorialBoard
