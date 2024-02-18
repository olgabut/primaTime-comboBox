import { useQuery } from "@tanstack/react-query"
import { getUniversities } from "../../api/universities"
import { UniversitieList } from "./UniversitieList"

interface UniversitiesProps {
  filterBy?: string
}
export function Universities({ filterBy = "" }: UniversitiesProps) {
  const {
    status,
    error,
    data: universities,
  } = useQuery({
    queryKey: ["universities"],
    queryFn: getUniversities,
  })

  if (status === "pending") return <div>Loading...</div>
  if (status === "error") return <div>{JSON.stringify(error)}</div>

  return (
    <>
      <h1>Universitie List</h1>
      <UniversitieList universities={universities} />
    </>
  )
}
