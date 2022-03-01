import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import imageLoader from '../imageLoader'
import styles from '../styles/Home.module.css'
import { Character, GetCharacterResults } from '../types'
import Link from 'next/link'

const defaultEndpoint: string = 'https://rickandmortyapi.com/api/character'

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(defaultEndpoint)
  const { results }: GetCharacterResults = await res.json()

  return {
    props: {
      characters: results
    }
  }
}

const Home: NextPage<{characters: Character[]}> = ({ characters }: any) => {
  // console.log('characters', characters)
  return (
    <div className={styles.container}>
      <Head>
        <title></title>
      </Head>
      {characters.map((character: any) => {
        return <div key={character.id}>
        <Link href={`/characters/${character.id}`}>
          <a>
            <h3>{character.name}</h3>
          </a>
        </Link>
        <Image 
        loader={imageLoader}
        unoptimized
        src={character.image}
        alt={character.name}
        width="200"
        height="200"
        />
        </div>
      })}
    </div>
  )
}

export default Home
