'use client'

import useFetchSaju from '@/hooks/useFetchSaju'
import { Member } from '@/interface/member'

interface SajuResultProps {
  member: Member
}

const SajuResult: React.FC<SajuResultProps> = ({ member }) => {
  const { isLoading, data } = useFetchSaju(member)

  return (
    <div>
      <h1>Saju Page</h1>
      {isLoading ? <div>로딩중</div> : <p>{data?.feature.ggMonth}</p>}
    </div>
  )
}

export default SajuResult
