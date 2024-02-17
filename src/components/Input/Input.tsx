import {
  FieldErrors,
  RegisterOptions,
  UseFormRegisterReturn,
} from "react-hook-form"
import useInput from "../../hooks/useInput"
import useError from "../../hooks/useError"
import Message from "../Message/Message"
import classes from "./Input.module.css"

type InputProps = {
  type: "text"
  name: string
  label: string
  placeholder?: string
  disabled?: boolean
  register?: (name: string, options?: RegisterOptions) => UseFormRegisterReturn
  errors?: FieldErrors
  required?: boolean
  defaultValue?: string
  validationSchema?: RegisterOptions
}

const Input = ({
  type = "text",
  name,
  label = "",
  placeholder = "",
  disabled = false,
  register,
  errors,
  required,
  defaultValue,
  validationSchema,
}: InputProps) => {
  const input = useInput(defaultValue)
  const error = errors && errors[name] ? errors[name] : useError()

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
          {...universalRegister(name, validationSchema)}
        />
      </label>
      {error && (
        <Message type={"error"}>{(error.message as string) || "Error"}</Message>
      )}
    </div>
  )
}

// export default forwardRef(Input) todo
export default Input
