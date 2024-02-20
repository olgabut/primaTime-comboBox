import classes from "./CleanButton.module.css"

interface CleanButtonProps {
  onClean: () => void
}

export function CleanButton({ onClean }: CleanButtonProps) {
  return <div className={classes.cleanButton} onClick={onClean}></div>
}
