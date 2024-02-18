import { IListData } from "../../models"
import { List } from "../List/List"

interface ContainerProps {
  status: "error" | "success" | "pending"
  error?: Error | null
  data?: IListData[]
}

export function Container({
  status = "pending",
  error = null,
  data,
}: ContainerProps) {
  // error
  if (status === "error") {
    return <div>{JSON.stringify(error)}</div>
  }

  // data is ok
  if (status === "success" && data) {
    return (
      <div className="container">
        <List data={data} />
      </div>
    )
  }

  // loading
  return <div>Loading...</div>
}
