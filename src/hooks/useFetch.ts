import axios from 'axios'
import { useQuery } from 'react-query'

function useFetch<T>(url: string, queryKey: string, options?: {}) {
  let fetch: () => Promise<T>

  fetch = () => axios.get<T>(url).then(response => response.data)
  const query = useQuery(queryKey, fetch, { ...options, refetchOnWindowFocus: false })

  return { ...query }
}

export default useFetch
