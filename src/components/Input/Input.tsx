import { FormEvent, forwardRef, LegacyRef } from "react"
import { ChangeHandler, FieldError } from "react-hook-form"
import Message from "../Message/Message"
import classes from "./Input.module.css"

interface InputProps {
  type?: "text"
  name: string
  label?: string
  disabled?: boolean

  value?: string

  onChange: ChangeHandler
  onBlur: ChangeHandler
  onFocus?: (event: FormEvent<HTMLInputElement>) => void
  setValue?: (value: string) => void

  error?: FieldError | { message?: string }

  placeholder?: string
  size?: number
  min?: string | number
  max?: string | number
  maxlength?: number
  minlength?: number
  pattern?: string
  required?: boolean
  autofocus?: boolean
}

export const Input = forwardRef(
  ({ label, error, setValue, ...props }: InputProps, ref) => {
    return (
      <div className={classes.container}>
        <label className={classes.label}>
          {label}
          <input
            className={`${classes.input} ${error && classes.error}`}
            autoComplete="off"
            {...props}
            ref={ref as unknown as LegacyRef<HTMLInputElement>}
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
)
