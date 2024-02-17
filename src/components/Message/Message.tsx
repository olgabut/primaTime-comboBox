import { ReactNode } from "react"
import classes from "./Message.module.css"

type MessageProps = {
  children: ReactNode
  type: "info" | "warning" | "error"
}
const Message = ({ type, children }: MessageProps) => {
  return <div className={`${classes.message} ${classes[type]}`}>{children}</div>
}

export default Message
