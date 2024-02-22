'use client'

export default function Input({
  type,
  placeholder,
  name,
  formData,
  setFormData,
  value,
  ...props
}) {
  const onChangeHandler = (e) => {
    const { value, name } = e.target
    setFormData({ ...formData, [name]: value })
  }
  return (
    <div>
      <input
        type={`${type}`}
        placeholder={`${placeholder}`}
        {...props}
        name={name}
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  )
}
