import { useEffect } from 'react'
import { debounce } from 'lodash';
import Head from 'next/head'
import Welcome from '../components/Home/Welcome'
import Explore from '../components/Home/Explore'
import About from '../components/Home/About'

export default function Home({ subjects, places }) {
  let hue = Math.floor(Math.random() * 359)

  const updateRainbow = (setHue) => {
    if (!setHue) while (true) {
      let newHue = Math.floor(Math.random() * 359)
      if (Math.abs(newHue - hue) > 60) {
        hue = newHue
        break
      }
    } else hue = setHue
    document.documentElement.style.setProperty('--color-rainbow', `hsl(${hue}deg, 40%, 40%)`)
  }

  let exploreContainer, exploreContent

  const setExploreElements = (container, content) => {
    exploreContainer = container
    exploreContent = content
  }

  const toggleAbout = () => {
    let removeEventListener = () => {
      window.removeEventListener('scroll', debounceScroll)
    }
    let debounceScroll = _.debounce(() => {
      if (exploreContainer.offsetTop + exploreContent.offsetTop == Math.round(window.pageYOffset) || Math.round(window.pageYOffset) < exploreContainer.offsetTop) {
        exploreContainer.style.setProperty('max-height', 'none')
        removeEventListener()
      }
    }, 20)
    if (exploreContainer.offsetTop + exploreContent.offsetTop == Math.round(window.pageYOffset) || Math.round(window.pageYOffset) < exploreContainer.offsetTop) {
      exploreContainer.style.setProperty('max-height', exploreContent.offsetTop + exploreContent.offsetHeight + 'px')
      window.scrollTo(0, exploreContainer.offsetTop + exploreContent.offsetTop + exploreContent.offsetHeight)
      window.addEventListener('scroll', debounceScroll)
    }
    else {
      window.scrollTo(0, exploreContainer.offsetTop + exploreContent.offsetTop)
    }
  }

  const setPageHeight = () => {
    document.documentElement.style.setProperty('--innerHeight', window.innerHeight + 'px')
  }

  useEffect(() => {
    updateRainbow(hue)
    let rainbowInterval = setInterval(updateRainbow, 4000)
    return () => { clearInterval(rainbowInterval) }
  }, [])

  useEffect(() => {
    setPageHeight()
    window.addEventListener('resize', setPageHeight)
    return () => { window.removeEventListener('resize', setPageHeight) }
  }, [])

  return (
    <>
      <Head>
      <title>RouteStory | Italy</title>
      <meta name="description" content="Learn more about the most iconical sights of Italy" />
      </Head>
      <Welcome toggleAbout={toggleAbout} />
      <Explore subjects={subjects} places={places} setExploreElements={setExploreElements} toggleAbout={toggleAbout} />
      <About toggleAbout={toggleAbout} />
    </>
  )
}

export async function getServerSideProps(context) {
  try {
    return { props: {
      places: [], //await (await fetch(`http://${context.req.headers.host}/api/places`)).json()
      subjects: [], //await (await fetch(`http://${context.req.headers.host}/api/subjects`)).json()
    } }
  } catch (error) {
    console.log(error.message)
    return false
  }
}