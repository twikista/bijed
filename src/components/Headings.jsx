export function PageHeading({
  children,
  font = 'font-saira',
  align = 'text-center',
  mb = 'pb-5',
}) {
  return (
    <h2
      className={`text-xl font-semibold ${align} ${font} capitalize  md:${mb} md:text-3xl`}
    >
      {children}
    </h2>
  )
}

export function SectionHeading({ children, font = 'font-saira' }) {
  return (
    <h3 className={`text-base font-semibold md:text-xl ${font}`}>{children}</h3>
  )
}

export function Paragraph({ children, first }) {
  if (first) {
    return <p className='inline p-0 m-0'>{children}</p>
  }

  return <p>{children}</p>
}
