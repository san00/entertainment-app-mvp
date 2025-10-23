export type SearchResultProps = {
  Search: MovieProps[]
}

export type MovieProps = {
  Title?: string
  Year?: string
  Type?: string
  Poster?: string
  imdbID?: string
}

export type IconProps = {
  width: number
  height: number
  fill?: string
  className?: string
}
