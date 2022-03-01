import { GetServerSideProps } from 'next'
import Image from 'next/image' 
import imageLoader from '../../imageLoader'
import { useRouter } from 'next/router'
import { Character } from "../../types"
import Layout from '../../components/Layout'

function CharacterPage({ character }: {
  character: Character
}) {

  const router = useRouter()

  console.log('router.query.id', router.query.id)

  return <div>
    <h1>{character.name}</h1>
    <Image 
      loader={imageLoader}
      unoptimized
      src={character.image}
      alt={character.name}
      width="200"
      height="200"
    />
  </div>
}

CharacterPage.getLayout = function getLayout(page: typeof CharacterPage) {
  return <Layout>{page}</Layout>
}

// export async function getStaticPaths() {
//   const res = await fetch("https://rickandmortyapi.com/api/character")
//   const { results }: GetCharacterResults = await res.json()

//   return {
//     paths: results.map((character: any) => {
//       return {
//         params: {
//           id: String(character.id)
//         }
//       }
//     }),
//     fallback: false
//   }
// } 

export const getServerSideProps: GetServerSideProps = async (context) => {

  const res = await fetch(`https://rickandmortyapi.com/api/character/${context.query.id}`)
  const character = await res.json()

  return {
    props: {
      character
    }
  }
}

export default CharacterPage