import { useEffect, useState } from "react"
import axios from "axios"

type ListProps = {
  url: string
  filterBy?: string
}

const List = ({ url, filterBy = "prague" }: ListProps) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      axios
        .get(url)
        .then((res) => setData(res.data))
        .catch((err) => setError(err.message))
      setLoading(false)
    }

    fetchData()
  }, [url])

  return (
    <div>
      <h2>List</h2>
      {!loading && (
        <>
          <h2>loaded</h2>
          <ul>
            {data
              .filter((item) =>
                (item as any).name
                  .toLowerCase()
                  .includes(filterBy?.toLocaleLowerCase())
              )
              .map((item, i) => (
                <li key={i}>{(item as any).name}</li>
              ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default List
