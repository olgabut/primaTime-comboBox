import { useState, FormEvent } from "react";

export default function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  return {
    value,
    onChange: (event: FormEvent<HTMLInputElement>):void => {
      setValue((<HTMLInputElement>event.target).value)
    }
  }
}