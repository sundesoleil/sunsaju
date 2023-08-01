'use client'

import useFetchSaju from '@/hooks/useFetchSaju'
import { Member } from '@/interface/member'

const SajuResult = (member: Member) => {
  const { data, isLoading } = useFetchSaju(member)

  return (
    <div>
      <h1>Saju Page</h1>
      {isLoading && <div>Loading...</div>}
      {data && <div>{data.feature.ggMonth}</div>}
    </div>
  )
}

export default SajuResult
