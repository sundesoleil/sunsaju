import { useQuery } from '@tanstack/react-query'
import { Saju } from '@/interface/saju'
import { getSaju } from '@/api/saju'
import { Member } from '@/interface/member'

const useFetchSaju = (member: Member) => {
  return useQuery<Saju, Error>({
    queryKey: ['saju', member],
    queryFn: () => getSaju(member),
  })
}

export default useFetchSaju
