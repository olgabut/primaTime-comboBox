import axios from "axios";
import { IUniversitie } from "../models";


export function getUniversities() {
  return axios
    .get<IUniversitie[]>(
      "http://universities.hipolabs.com/search?country=Czech+Republic",
      { params: { _sort: "name" } }
    )
    .then(res => res.data)
}