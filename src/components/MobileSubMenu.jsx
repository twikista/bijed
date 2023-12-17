import Link from 'next/link'

function MobileSubMenu({
  subMenuItems,
  showSubMenu,
  setShowSubMenu,
  closeMenu,
}) {
  const closeSubMenu = () => {
    showSubMenu && setShowSubMenu(false)
  }
  return (
    <ul
      className={`flex flex-col text-base font-semibold text-white bg-[#c84182] ${
        showSubMenu ? 'block' : 'hidden'
      }`}
    >
      {subMenuItems.map((menuItem) => (
        <li
          key={menuItem.name}
          className={`py-1 px-3 min-w-[45px] text-secondary [&:not(:last-child)]:border-b border-b-[#e4c97a]/[0.25] border-solid `}
          // onClick={closeMenu}
        >
          <Link
            href={menuItem.url}
            className='inline-block w-full capitalize px-7'
            onClick={closeMenu}
          >
            {menuItem.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default MobileSubMenu
