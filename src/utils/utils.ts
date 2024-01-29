export const CheckRes = (res: Response) => {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(res.status)
}
