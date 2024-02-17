import { useEffect, useState } from "react"

type ListProps = {
  url: string
  filterBy?: string
}

const List = ({ url, filterBy = "prague" }: ListProps) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const response = await fetch(url)
      const responseData = await response.json()
      setData(responseData)
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
