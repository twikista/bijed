import Link from 'next/link'

function MobileSubMenu({ subMenuItems, showSubMenu, setShowSubMenu }) {
  const closeSubMenu = () => {
    showSubMenu && setShowSubMenu(false)
  }
  return (
    <ul className='flex flex-col text-base font-semibold text-white bg-primary'>
      {subMenuItems.map((menuItem) => (
        <li
          key={menuItem.name}
          className={`py-2 px-3 min-w-[45px]  hover:text-secondary ${
            showSubMenu ? 'block' : 'hidden'
          }`}
          onClick={closeSubMenu}
        >
          <Link
            href={menuItem.url}
            className='inline-block w-full capitalize px-7'
          >
            {menuItem.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default MobileSubMenu
