import { IListData } from "../../models"
import { Item } from "./Item"

interface ListProps {
  data: IListData[]
}

export function List({ data }: ListProps) {
  return (
    <div className="list">
      {data.map((item) => (
        <Item key={item.id} item={item.name} />
      ))}
    </div>
  )
}
