import { IUniversitie } from "../../models"

interface UniversitieListProps {
  universities: IUniversitie[]
}

export function UniversitieList({ universities }: UniversitieListProps) {
  return (
    <ul>
      {universities.map((universitie) => (
        <li key={universitie.name}>{universitie.name}</li>
      ))}
    </ul>
  )
}
