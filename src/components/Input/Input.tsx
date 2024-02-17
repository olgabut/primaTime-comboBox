import {
  FieldError,
  RegisterOptions,
  UseFormRegisterReturn,
} from "react-hook-form"
import useInput from "../../hooks/useInput"
import Message from "../Message/Message"
import classes from "./Input.module.css"

type InputProps = {
  type: "text"
  name: string
  label: string
  disabled?: boolean
  register?: (name: string, options?: RegisterOptions) => UseFormRegisterReturn
  error?: FieldError | { message?: string }
  value?: string
  validationSchema?: RegisterOptions

  placeholder?: string
  size?: number
  maxlength?: number
  pattern?: string
  required?: boolean
  autofocus?: boolean
}

const Input = ({
  type = "text",
  name,
  label = "",
  placeholder = "",
  disabled = false,
  register,
  error,
  value,
  validationSchema,
  ...props
}: InputProps) => {
  const input = useInput(value)

  const universalRegister =
    register ||
    function (name: string): {} {
      return { name, ...input }
    }

  return (
    <div className={classes.container}>
      <label className={classes.label}>
        {label}
        <input
          type={type}
          className={`${classes.input} ${error && classes.error}`}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
          {...universalRegister(name, validationSchema)}
        />
      </label>
      {error && (
        <Message type={"error"}>
          {error.message || "The field is required"}
        </Message>
      )}
    </div>
  )
}

export default Input
