import { CheckRes } from "./utils"

// export const BASE_URL = "https://api.klyuev-movies.nomoredomainsrocks.ru"
export const BASE_URL = "http://localhost:3001"

export const getProjects = () => {
  return fetch(`${BASE_URL}/projects`, {
      method: 'GET',
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
      },
      credentials: "include"
  })
  .then(CheckRes)
}