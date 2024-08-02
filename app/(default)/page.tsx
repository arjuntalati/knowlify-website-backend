export const metadata = {
  title: 'Home - Knowlify',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import MeetTheTeam from '@/components/meettheteam'

export default function Home() {
  return (
    <>
      <Hero />
      <Zigzag />
      <MeetTheTeam />
      <Newsletter />
    </>
  )
}
