import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import imageLoader from '../imageLoader'
import styles from '../styles/Home.module.css'
import { Character, GetCharacterResults } from '../types'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useDebounce from '../hooks/useDebounce'

export interface Notice {
  forename:      string;
  date_of_birth: string;
  entity_id:     string;
  nationalities: string[];
  name:          string;
  _links:        Links;
}

export interface Links {
  self:      Images;
  images:    Images;
  thumbnail: Images;
}

export interface Images {
  href: string;
}

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

  const [notices, setNotices] = useState<Notice[]>()
  const [search, setSearch] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)


  const debouncedSearch = useDebounce(search, 500)
  

  // function handleSetSearch(e) {
  //   setSearch(e.target.value)
  // }

  // when 'search' changes, run this useEffect hook
  useEffect(() => {

    async function fetchData() {
      setLoading(true)

      setNotices([])

      // const data = await fetch(`https://ws-public.interpol.int/notices/v1/red?forename=${search}&resultPerPage=200`)
      //                    .then(res => res.json())

      const data = await fetch(`https://ws-public.interpol.int/notices/v1/red?forename=${debouncedSearch}&resultPerPage=200`)
                         .then(res => res.json())

      setNotices(data._embedded.notices)
      setLoading(false)
    }
    
    if (debouncedSearch) fetchData()

  // }, [search])
  }, [debouncedSearch])

  return (
    <div className={styles.container}>
      <Head>
        <title></title>
      </Head>

      <main className={styles.main}>
        <input type="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
        {/* 
        The "?" means that the value is not always returning something.
        For example, it means which one case cannot have an image. 
        */}

        {loading && <p>Loading...</p>}

        {notices?.map((notice) => {
          return <div key={notice.entity_id} className={styles.notice}>

          {notice._links?.thumbnail?.href && (
            <Image
              loader={imageLoader}
              unoptimized
              src={notice._links.thumbnail.href} 
              width="100" 
              height="100" 
              alt={notice.name}
            />
          ) }

            <div className={styles.notice_body}>
              <p>{notice.forename} {notice.name}</p>
              <p>{notice.date_of_birth}</p>
            </div>
          </div>
        })}
      </main>

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
