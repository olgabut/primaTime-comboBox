interface ItemProps {
  item: string
}
export function Item({ item }: ItemProps) {
  return <div>{item}</div>
}
