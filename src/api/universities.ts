import axios from "axios";
import { IUniversitie } from "../models";


export function getUniversities({queryKey}: {queryKey: string[]}) {
  const [_key, filterBy] = queryKey;
  const nameParameter = filterBy ? `&name=${filterBy.replace(/ /g, '+')}` : ''
  return axios
    .get<IUniversitie[]>(
      `http://universities.hipolabs.com/search?country=Czech+Republic${nameParameter}`,
      { params: { _sort: "name" } }
    )
    .then(res => res.data)
}