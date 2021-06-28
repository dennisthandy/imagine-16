export const getToken = (): string | null => {
  let token = null
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token')
  }
  return token
}
