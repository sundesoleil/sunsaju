import { Member } from '@/interface/member'
import api from '@/utils/api'

export const getSaju = async (member: Member) => {
  return await api
    .get('/api/v1/personality/feature', {
      params: {
        name: member.name,
        gender: member.gender,
        year: member.year,
        month: member.month,
        day: member.day,
        calendarType: member.calendarType,
      },
    })
    .then((res) => {
      console.log('# [fetch saju data]', res)
      return res.data
    })
    .catch((error) => {
      console.log('# error', error)
    })
}
