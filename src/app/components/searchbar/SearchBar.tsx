import { FormEvent, useId } from 'react'

type SearchBarProps = {
  placeholder: string
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  query: string
  onChange: (query: string) => void
}

const SearchBar = ({
  placeholder,
  handleSubmit,
  query,
  onChange
}: SearchBarProps) => {
  const searchInputId = useId()

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="flex">
        <label htmlFor={searchInputId}>
          <input
            type="search"
            id="site-search"
            name="q"
            placeholder={placeholder}
            value={query}
            onChange={(e) => onChange(e.target.value)}
          />
        </label>
      </div>
    </form>
  )
}

export default SearchBar
