import { MovieProps } from '@/app/types/types'
import Image from 'next/image'

const Card = ({ Title, Year, Poster, Type }: MovieProps) => {
  return (
    <div className="flex flex-wrap">
      {Poster ? (
        <Image
          alt="movie"
          src={`${Poster}`}
          layout="responsive"
          width={2}
          height={3}
        ></Image>
      ) : null}
      <div className="flex flex-row gap-4">
        <p>{Title}</p>
        <p>{Year}</p>
      </div>
      <div className="flex">
        <p>{Type}</p>
      </div>
    </div>
  )
}
export default Card
