import { useUniversities } from "../../hooks/useUniversities"
import { DropList } from "../DropList/DropList"
import Message from "../Message/Message"
import classes from "./DropContainer.module.css"

interface DropContainerProps {
  filterBy?: string
  isOpen: boolean
  position?: "bottom" | "top"
  onSelect: (value?: string) => void
}

export function DropContainer({
  filterBy = "",
  isOpen,
  position = "bottom",
  onSelect,
}: DropContainerProps) {
  const { status, error, data } = useUniversities(filterBy)
  // error
  if (status === "error") {
    return <Message type={"error"}>{JSON.stringify(error)}</Message>
  }

  // data is ok
  if (status === "success" && data) {
    return (
      <div
        className={`${classes.dropContainer} ${
          isOpen ? classes[position] : classes.close
        }`}
      >
        <DropList data={data} onSelect={onSelect} />
      </div>
    )
  }

  // loading
  return <div className={classes.loading}>......</div>
}
