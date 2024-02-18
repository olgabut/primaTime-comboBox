import useUniversities from "../../hooks/useUniversities"
import { Container } from "../Container/Container"

interface UniversitiesProps {
  filterBy?: string
}
export function Universities({ filterBy = "" }: UniversitiesProps) {
  return <Container {...useUniversities(filterBy)} />
}
