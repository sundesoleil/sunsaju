import { Member } from '@/interface/member'
import axios from '.'

export const getSaju = async (member: Member) => {
  console.log('# member params: ', member)
  const { data } = await axios.get('/api/v1/personality/feature', {
    params: {
      name: decodeURIComponent(member.name),
      gender: member.gender,
      year: member.year,
      month: member.month,
      day: member.day,
      calendarType: member.calendarType,
    },
  })
  return data
}
