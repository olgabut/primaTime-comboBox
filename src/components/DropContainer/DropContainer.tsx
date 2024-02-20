import { useUniversities } from "../../hooks/useUniversities"
import { DropList } from "../DropList/DropList"
import classes from "./DropContainer.module.css"

interface DropContainerProps {
  filterBy?: string
  isOpen: boolean
  onSelect: (value?: string) => void
}

export function DropContainer({
  filterBy = "",
  isOpen,
  onSelect,
}: DropContainerProps) {
  const { status, error, data } = useUniversities(filterBy)
  // error
  if (status === "error") {
    return <div>{JSON.stringify(error)}</div>
  }

  // data is ok
  if (status === "success" && data) {
    return (
      <div
        className={`${classes.dropContainer} ${
          isOpen ? classes.open : classes.close
        }`}
      >
        <DropList data={data} onSelect={onSelect} />
      </div>
    )
  }

  // loading
  return <div className={classes.loading}>Loading...</div>
}
