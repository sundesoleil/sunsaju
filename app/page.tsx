import Link from 'next/link'
import MainContent from '@/container/MainContent'

const Home: React.FC = () => {
  return (
    <div>
      <MainContent />
      <h1>
        <button>
          <Link href={'/saju'}>사주보러가기</Link>
        </button>
      </h1>
    </div>
  )
}

export default Home
