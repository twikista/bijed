import DOMPurify from 'isomorphic-dompurify'
import parse from 'html-react-parser'
import MainContainer from '@/components/MainContainer'
import { fetchAllEditorialBoardData, getEditorialBoard } from '@/lib/data'
import { PageHeading } from '@/components/Headings'

export const metadata = {
  title: 'Editorial Board',
  description:
    'This page contain information about the editorial board of BIJED. The board consist of academicians who are have made significant contributions to their fields',
}

async function EditorialBoard() {
  const editorialTeam = await fetchAllEditorialBoardData()
  const styledEditorialTeam = editorialTeam[0]?.content.replace(
    /<h3>/g,
    "<h3 className='font-saira text-[20px] mb-1'>"
  )
  return (
    <MainContainer>
      <PageHeading>Editorial Team</PageHeading>
      <div className='justify-center w-full'>
        <div className='mx-auto text-justify xl:w-fit'>
          {parse(
            DOMPurify.sanitize(styledEditorialTeam, {
              ADD_ATTR: ['className'],
            })
          )}
          {/* <li className=''>
          <h3 className='text-lg font-semibold md:text-xl font-saira'>
            Editor-in-Chief
          </h3>
          <p>Prof. I.O. Osawmonyi&nbsp;- University of Benin, Benin city</p>
        </li>
        <li>
          <h3 className='text-lg font-semibold md:text-xl font-saira'>
            Managing Editor
          </h3>
          <p>Dr. O.S. Obeki&nbsp;- University of Benin, Benin city</p>
        </li>
        <li>
          <h3 className='text-lg font-semibold md:text-xl font-saira'>
            Associate Editors
          </h3>
          <ul className='space-y-2'>
            <li>
              <p>Prof. Mike I. Obadan&nbsp;- University of Benin, Benin city</p>
            </li>
            <li>
              <p>Prof. O.J. Ilaboya&nbsp;- University of Benin, Benin city</p>
            </li>
            <li>
              <p>
                Prof. M. Morris&nbsp;- University of Florida, Gainesville, USA
              </p>
            </li>
            <li>
              <p>
                Prof. M. S. Sagagi&nbsp;- Bayero University, Kano (BUK), Nigeria
              </p>
            </li>
            <li>
              <p>
                Prof. F. O.I. Izedonmi&nbsp;- University of Benin, Benin city
              </p>
            </li>
            <li>
              <p>Prof. B.A. Agbonifoh&nbsp;- University of Benin, Benin city</p>
            </li>
            <li>
              <p>Prof. A. Okoye&nbsp;- University of Benin, Benin city</p>
            </li>
            <li>
              <p>
                Prof. Mrs., P. Isenmila&nbsp;- University of Benin, Benin city
              </p>
            </li>
            <li>
              <p>Prof. A.S. Omoye&nbsp;- University of Benin, Benin city</p>
            </li>
            <li>
              <p>
                Prof. A. E. Uwubamwen&nbsp;- University of Benin, Benin city
              </p>
            </li>
            <li>
              <p>Prof. E.I. Dabor&nbsp;- University of Benin, Benin city</p>
            </li>
            <li>
              <p>
                Prof. F. E. U. Osagiede &nbsp;- University of Benin, Benin city
              </p>
            </li>
            <li>
              <p>Dr. A.E. Tafamel&nbsp;- University of Benin, Benin city</p>
            </li>
            <li>
              <p>Dr. P.E. Oseyomon&nbsp;- University of Benin, Benin city</p>
            </li>
            <li>
              <p>Dr. O.V. Iguisi&nbsp;- University of Benin, Benin city</p>
            </li>
            <li>
              <p>
                Dr. A.O. Oriazowanlan&nbsp;- University of Benin, Benin city
              </p>
            </li>
            <li>
              <p>Dr. V.A. Idehen&nbsp;- University of Benin, Benin city</p>
            </li>
            <li>
              <p>
                Dr. Mrs. A.C. Orakwue&nbsp;- University of Benin, Benin city
              </p>
            </li>
          </ul>
        </li>
        <li>
          <h3 className='text-lg font-semibold md:text-xl font-saira'>
            Business Manager
          </h3>
          <p>Mr. O. Okunbo</p>
        </li>
        <li>
          <h3 className='text-lg font-semibold md:text-xl font-saira'>
            Secretary
          </h3>
          <p>Mr. M.F. Kahian</p>
        </li> */}
        </div>
      </div>
    </MainContainer>
  )
}

export default EditorialBoard
