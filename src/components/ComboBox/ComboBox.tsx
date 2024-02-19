import { FormEvent, forwardRef, useCallback, useState } from "react"
import { ChangeHandler, FieldError } from "react-hook-form"
import { DropContainer } from "../DropContainer/DropContainer"
import { Input } from "../Input/Input"

interface ComboBoxProps {
  type?: "text"
  name: string
  label?: string
  disabled?: boolean

  //value?: string

  onChange?: ChangeHandler
  onBlur?: ChangeHandler
  setValue: (value: string) => void

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

export const ComboBox = forwardRef(
  ({ onChange, onBlur, ...props }: ComboBoxProps, ref) => {
    const [filterBy, setFilterBy] = useState("")
    const [open, setOpen] = useState(true)

    const inputChangeHandler = useCallback(
      (event: FormEvent<HTMLInputElement>): void => {
        setFilterBy((event.target as HTMLInputElement).value || "")
        onChange(event)
      },
      [onChange]
    )
    const inputFocusHandler = useCallback((): void => {
      setOpen(true)
    }, [])

    const inputBlurHandler = useCallback(
      (event: FormEvent<HTMLInputElement>): void => {
        setOpen(false)
        onBlur(event)
      },
      [onBlur]
    )

    return (
      <>
        <Input
          {...props}
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
          ref={ref}
          type="text"
          onFocus={inputFocusHandler}
        />
        {open && (
          <DropContainer
            filterBy={filterBy}
            onSelect={(value = ""): void => {
              props.setValue(value)
              setOpen(false)
            }}
          />
        )}
      </>
    )
  }
)
