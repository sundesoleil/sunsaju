import Intro from '../components/section/Intro'
import SajuSection from '@/components/section/Saju'
import RandomSection from '@/components/section/Random'
import AdBanner from '@/components/banner/Ad'

const MainContent: React.FC = () => {
  return (
    <>
      <Intro />
      <AdBanner />
      <SajuSection />
      <RandomSection />
    </>
  )
}

export default MainContent
