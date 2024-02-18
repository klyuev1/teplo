import { BASE_URL } from "./constants";

export const downloadRooms = (projectId: string) => {
  return fetch(`${BASE_URL}/projects/${projectId}/rooms/download`, {
    method: 'GET',
    headers: {
      "Accept": "text/csv",
      "Content-Type": "text/csv; charset=utf-8",
    },
    credentials: "include"
  });
};