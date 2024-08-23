import clsx from 'clsx'
import Spinner from './Spinner'

function SubmitButton({
  overideStyles,
  textColor,
  mainText,
  altText,
  formSubmitState,
}) {
  return (
    <button
      type='submit'
      className={clsx(
        `w-full flex flex-1 bg-primary hover:bg-lightPrimary items-center text-cente rounded-md py-3 cursor-pointer justify-center ${overideStyles} transition-colors`
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
