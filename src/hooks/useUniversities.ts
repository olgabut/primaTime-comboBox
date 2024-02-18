import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"
import { getUniversities } from "../api/universities"
import { IListData } from "../models"



export default function useUniversities(filterBy = "") {
  filterBy = filterBy.trim().toLowerCase()
  const {
    status,
    error,
    data: universities,
  } = useQuery({
    queryKey: ["universities", filterBy],
    queryFn: getUniversities,
    refetchOnWindowFocus: false,
    // placeholderData: () => { data from cache
    //   return queryClient
    //     .getQueryData('blogPosts')
    //     ?.find((d) => d.id === blogPostId);
    // },
  })

  const dataForList = useMemo(() => {
    if (universities) {
      return universities.map((item): IListData => (
        {
          id: item.name,
          name: item.name
        }
      ))
    }
    return undefined
  }, [universities])



  return {
    status,
    error,
    data: dataForList
  }
}