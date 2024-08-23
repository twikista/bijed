import clsx from 'clsx'
import Spinner from './Spinner'

function SubmitButton({
  overideStyles,
  textColor,
  mainText,
  altText,
  formSubmitState,
  disabled = false,
}) {
  return (
    <button
      type='submit'
      disabled={disabled}
      className={clsx(
        `w-full flex flex-1 bg-[#901090] hover:bg-lightPrimary items-center text-cente rounded-md py-3 cursor-pointer justify-center ${overideStyles} transition-colors`,
        { ['bg-[#dedede] hover:bg-[#d9d9d9] cursor-default']: disabled }
      )}
    >
      {formSubmitState ? (
        <Spinner text={altText} textColor={textColor} />
      ) : (
        <span className={`text-${textColor}`}>{mainText}</span>
      )}
    </button>
  )
}

export default SubmitButton
