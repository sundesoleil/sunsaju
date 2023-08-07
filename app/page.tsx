import Link from 'next/link'

const Home: React.FC = () => {
  return (
    <div>
      <h1>
        <button>
          <Link href={'/saju'}>사주보러가기</Link>
        </button>
      </h1>
    </div>
  )
}

export default Home
