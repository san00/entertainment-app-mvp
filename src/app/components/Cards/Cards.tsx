import { SearchResultProps } from '@/app/types/types'
import Card from '../Card/Card'

const Cards = ({ Search }: SearchResultProps) => {
  return Search?.map((movie, idx: number) => {
    return <Card key={idx} {...movie}></Card>
  })
}

export default Cards
