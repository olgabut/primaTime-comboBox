import { useUniversities } from "../../hooks/useUniversities"
import { DropList } from "../DropList/DropList"

interface DropContainerProps {
  filterBy?: string
  onSelect: (value?: string) => void
}

export function DropContainer({ filterBy = "", onSelect }: DropContainerProps) {
  const { status, error, data } = useUniversities(filterBy)
  // error
  if (status === "error") {
    return <div>{JSON.stringify(error)}</div>
  }

  // data is ok
  if (status === "success" && data) {
    return (
      <div className="container">
        <DropList data={data} onSelect={onSelect} />
      </div>
    )
  }

  // loading
  return <div>Loading...</div>
}
