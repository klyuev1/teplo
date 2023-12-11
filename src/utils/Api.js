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

export const postProject = ({
  name, tOutside, tInside, rWall, rWindow, beta, kHousehold
}) => {
  return fetch(`${BASE_URL}/projects`, {
      method: 'POST',
      headers: {
          "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({
        name, tOutside, tInside, rWall, rWindow, beta, kHousehold
      }),  
  })
  .then(CheckRes)
}

export const deleteProject = (projectId) => {
  return fetch(`${BASE_URL}/projects/${projectId}`, {
      method: 'DELETE',
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
      },
      credentials: "include"
  })
  .then(CheckRes)
}