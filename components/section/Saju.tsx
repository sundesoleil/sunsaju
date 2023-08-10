import Link from 'next/link'

const SajuSection: React.FC = () => {
  return (
    <section>
      <div>
        <Link href="/saju">
          <h3>타고난 성격</h3>
          <p>자신의 타고난 성격을 알아보세요.</p>
        </Link>
      </div>
      <div>
        <Link href="#">
          <h3>만세력 확인하기</h3>
          <p>만세력을 확인해보세요.</p>
        </Link>
      </div>
    </section>
  )
}

export default SajuSection
