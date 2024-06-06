import Link from 'next/link'

function SubMenu({ subMenuItems, showSubMenu, setShowSubMenu }) {
  const closeSubMenu = () => {
    showSubMenu && setShowSubMenu(false)
  }
  return (
    <ul className='absolute flex flex-col text-sm font-semibold text-white bg-primary top-[28px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-2px_rgba(0,0,0,0.05)]'>
      {subMenuItems.map((menuItem) => (
        <li
          key={menuItem.name}
          className={` py-2 px-3 min-w-[45px] hover:text-secondary [&:not(:last-child)]:border-b-[1px] border-secondary ${
            showSubMenu ? 'block' : 'hidden'
          }`}
          onClick={closeSubMenu}
        >
          <Link
            href={`/${menuItem.url}`}
            className='capitalize hover:translate-x-1.5 transition-all ease-linear duration-400 inline-block'
          >
            {menuItem.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SubMenu
