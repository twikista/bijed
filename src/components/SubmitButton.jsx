import clsx from 'clsx'
import Spinner from './Spinner'

function SubmitButton({
  bgColor,
  hoverBgColor,
  textColor,
  mainText,
  altText,
  formSubmitState,
}) {
  return (
    <button
      type='submit'
      className={clsx(
        `bg-[#${bgColor}] w-full flex flex-1 items-center text-cente rounded-md py-3 cursor-pointer hover:bg-[#${hoverBgColor}] justify-center`
      )}
    >
      {formSubmitState ? (
        <Spinner text={altText} />
      ) : (
        <span className={`text-${textColor}`}>{mainText}</span>
      )}
    </button>
  )
}

export default SubmitButton
