interface Response {
  info: Info
  results: Location[]
}

interface Location {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: string
}

interface Info {
  count: number
  pages: number
  next: string
  prev?: any
}

export default Response
