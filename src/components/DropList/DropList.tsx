import { MouseEvent } from "react"
import { IListData } from "../../models"
import classes from "./DropList.module.css"

interface DropListProps {
  data: IListData[]
  onSelect: (value?: string) => void
}

export function DropList({ data, onSelect }: DropListProps) {
  return (
    <div className={classes.dropdown}>
      {data.map((item) => (
        <div
          key={item.id}
          className={classes.dropdownItem}
          onClick={(event: MouseEvent<HTMLElement>) =>
            onSelect((event.target as HTMLElement).innerText)
          }
        >
          {item.name}
        </div>
      ))}
    </div>
  )
}
