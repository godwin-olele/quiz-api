import { useState } from "react"
import { IconContext } from "react-icons"
import { HiEye } from "react-icons/hi"
import { HiEyeOff } from "react-icons/hi"

import Skeleton from "@mui/material/Skeleton"

export const TextField = ({
  type,
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
  className = "mb-[1.2rem] mt-[0.5rem]",
  ...others
}) => (
  <div className={className}>
    <label htmlFor={name} className='text-[#454545]'>
      {label}
    </label>
    <input
      id={name}
      type={type}
      className='w-full py-[13px] px-[20px] rounded-[6px]'
      name={name}
      autoComplete='true'
      placeholder={placeholder ?? ""}
      value={value}
      onChange={onChange}
      {...others}
    />
    {error && <small className='text-xs text-red-600'>{error}</small>}
  </div>
)

export const ObscurableTextField = ({
  label,
  name,
  value,
  onChange,
  error,
}) => {
  const [hidden, setHidden] = useState(true)

  return (
    <div className='mb-[1.2rem] mt-[0.5rem] transition'>
      <label htmlFor={name} className='text-[#454545]'>
        {label}
      </label>
      <div className='flex justify-center items-center '>
        <input
          id={name}
          type={`${!hidden ? "text" : "password"}`}
          className='w-full py-[13px] px-[20px] rounded-l-[6px]'
          name={name}
          autoComplete='false'
          placeholder='********'
          value={value}
          onChange={onChange}
        />
        <div
          className='w-[50px] h-[52px] rounded-r-[6px] border-[1px] cursor-pointer flex justify-center items-center border-l-[0px]'
          onClick={() => setHidden(!hidden)}
        >
          {hidden ? (
            <IconContext.Provider
              value={{ color: "#454545", className: "see-password" }}
            >
              <HiEyeOff />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider
              value={{ color: "#454545", className: "see-password" }}
            >
              <HiEye />
            </IconContext.Provider>
          )}
        </div>
      </div>
      {error && <small className='text-xs text-red-600'>{error}</small>}
    </div>
  )
}

export const DropdownInput = ({
  label,
  name,
  value,
  onChange,
  error,
  options = ["something", 2, 3],
  defaultOption,
  className = "",
}) => (
  <div className={className}>
    <label htmlFor={name} className='text-[#454545]'>
      {label}
    </label>
    <select id={name} name={name} value={value} onChange={onChange}>
      <option>{defaultOption}</option>
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>

    {error && <small className='text-xs text-red-600'>{error}</small>}
  </div>
)

export const CustomLoaderDropdownInput = ({
  label,
  name,
  value,
  onChange,
  error,
  isLoading = true,
  options = [{ id: 0, name: "test1", slug: "test1" }],
  defaultOption,
  className = "",
}) => (
  <div className={className}>
    <label htmlFor={name} className='text-[#454545]'>
      {label}
    </label>

    {isLoading ? (
      <Skeleton height={70} animation='wave' />
    ) : (
      <select id={name} name={name} onChange={onChange}>
        <option>{defaultOption}</option>

        {options.map((option, index) => (
          <option key={index}>{option.name}</option>
        ))}
      </select>
    )}

    {error && <small className='text-xs text-red-600'>{error}</small>}
  </div>
)
//

export const TextAreaField = ({
  label,
  name,
  value,
  onChange,
  error,
  className = "mt-[1.5rem]  mb-[1.2rem]",
  ...others
}) => (
  <div className={className}>
    <label htmlFor={name} className='text-[#454545]'>
      {label}
    </label>
    <textarea
      value={value}
      id={name}
      name={name}
      onChange={onChange}
      {...others}
    />

    {error && <small className='text-xs text-red-600'>{error}</small>}
  </div>
)
// "Some text..."
