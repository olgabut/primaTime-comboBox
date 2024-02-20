import { FormEvent, forwardRef, useEffect, useState } from "react"
import { ChangeHandler, FieldError } from "react-hook-form"
import { CleanButton } from "../CleanButton/CleanButton"
import { DropContainer } from "../DropContainer/DropContainer"
import { Input } from "../Input/Input"

interface ComboBoxProps {
  type?: "text"
  name: string
  label?: string
  disabled?: boolean

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
    const [isOpen, setIsOpen] = useState(false)
    const [selection, setSelection] = useState("")

    useEffect(() => {
      if (selection) {
        props.setValue(selection)
      }
    }, [selection])

    useEffect(() => {
      if (!isOpen && selection) {
        props.setValue(selection)
      }
    }, [isOpen, selection, filterBy])

    const inputChangeHandler = (event: FormEvent<HTMLInputElement>): void => {
      setFilterBy((event.target as HTMLInputElement).value || "")
      onChange(event)
    }

    const inputFocusHandler = (): void => {
      setIsOpen(true)
    }

    const inputBlurHandler = (event: FormEvent<HTMLInputElement>): void => {
      //todo
      setTimeout(() => {
        setIsOpen(false)
        onBlur(event)
      }, 500)
      //
    }

    const selectHandler = (value = ""): void => {
      setSelection(value)
      setIsOpen(false)
    }

    return (
      <>
        <div>
          <Input
            {...props}
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
            ref={ref}
            type="text"
            onFocus={inputFocusHandler}
          />
          {selection && (
            <CleanButton
              onClean={() => {
                props.setValue("")
                setSelection("")
              }}
            />
          )}
        </div>
        <DropContainer
          filterBy={filterBy}
          isOpen={isOpen}
          onSelect={selectHandler}
        />
      </>
    )
  }
)
