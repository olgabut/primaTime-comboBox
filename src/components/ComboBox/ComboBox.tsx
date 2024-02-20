import { FormEvent, forwardRef, useEffect, useState } from "react"
import { ChangeHandler, FieldError } from "react-hook-form"
import { CleanButton } from "../CleanButton/CleanButton"
import { DropContainer } from "../DropContainer/DropContainer"
import { Input } from "../Input/Input"
import classes from "./ComboBox.module.css"

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
    const [dropPosition, setDropPosition] = useState<"bottom" | "top">("bottom")

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
      if (onChange) {
        onChange(event)
      }
    }

    const inputFocusHandler = (event: FormEvent<HTMLInputElement>): void => {
      const inputPosition = (event.target as Element).getBoundingClientRect()
      if (window.innerHeight - inputPosition.bottom < 160)
        setDropPosition("top")
      else setDropPosition("bottom")
      setIsOpen(true)
    }

    const inputBlurHandler = (event: FormEvent<HTMLInputElement>): void => {
      //todo
      setTimeout(() => {
        setIsOpen(false)
        if (onBlur) {
          onBlur(event)
        }
      }, 500)
      //
    }

    const selectHandler = (value = ""): void => {
      setSelection(value)
      setIsOpen(false)
    }

    return (
      <>
        <div className={classes.inputContiner}>
          <Input
            {...props}
            onChange={inputChangeHandler as ChangeHandler}
            onBlur={inputBlurHandler as ChangeHandler}
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
          <DropContainer
            filterBy={filterBy}
            isOpen={isOpen}
            position={dropPosition}
            onSelect={selectHandler}
          />
        </div>
      </>
    )
  }
)
