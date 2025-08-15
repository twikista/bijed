import DOMPurify from 'isomorphic-dompurify';
import parse from 'html-react-parser';
import MainContainer from '@/components/MainContainer';
import {
  fetchAllEditorialBoardData,
  fetchEditorialBoard,
  getEditorialBoard,
} from '@/lib/data';
import { PageHeading } from '@/components/Headings';
import { H2, H3 } from '@/components/new/headings';
import { editorialBoard } from '@/static/editorialBoard';

export const metadata = {
  title: 'Editorial Board',
  description:
    'This page contain information about the editorial board of BIJED. The board consist of academicians who are have made significant contributions to their fields',
};

const Editor = (editor) => {
  return (
    <div>
      <H3 className='font-semibold'>{editor.name}</H3>
      {editor.department && (
        <span className='block'>{`Department of ${editor.department}, ${editor.faculty}`}</span>
      )}
      {/* <span className='block'>{editor.faculty}</span> */}
      <span className='block'>{editor.institution}</span>
    </div>
  );
};

function EditorialBoard() {
  // const editorialTeam = await fetchEditorialBoard('final')
  // const styledEditorialTeam = editorialTeam?.map((i) =>
  //   i.content
  //     .replace(/<h3>/g, "<h3 className='mb-1 text-base md:text-xl font-saira>")
  //     .replace(/<p>/g, "<p className='text-left mb-[5px]'>")
  // )

  return (
    <MainContainer>
      <PageHeading>Editorial Team</PageHeading>
      <div className='flex justify-center w-full'>
        {/* <div className='mx-auto text-justify lg:w-fit'>
          {parse(
            DOMPurify.sanitize(styledEditorialTeam, {
              ADD_ATTR: ['className'],
            })
          )}
        </div> */}

        <div className='flex flex-col max-w-3xl gap-8 text-black'>
          {Object.keys(editorialBoard).map((category) => (
            <div key={category} className='flex flex-col gap-0.5'>
              <H2 className='text-base font-semibold uppercase md:text-lg'>
                {category}
              </H2>
              {Array.isArray(editorialBoard[category]) ? (
                <ul className='flex flex-col gap-2'>
                  {editorialBoard[category].map((editor) => (
                    <li key={editor.name}>
                      <Editor {...editor} />
                    </li>
                  ))}
                </ul>
              ) : (
                <Editor {...editorialBoard[category]} />
              )}
            </div>
          ))}
        </div>
      </div>
    </MainContainer>
  );
}

export default EditorialBoard;
