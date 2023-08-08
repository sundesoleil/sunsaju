import { Member } from '@/interface/member'
import { UseFormRegister, FieldErrors } from 'react-hook-form'

interface UserBirthdayInputProps {
  register: UseFormRegister<Member>
  errors: FieldErrors<Member>
}
const UserBirthdayInput = ({ register, errors }: UserBirthdayInputProps) => (
  <>
    <div>
      <label>태어난 연도</label>
      <input {...register('year', { required: true })} />
      {errors.year && <span>This field is required</span>}
    </div>
    <div>
      <label>태어난 달</label>
      <input {...register('month', { required: true })} />
      {errors.month && <span>This field is required</span>}
    </div>
    <div>
      <label>태어난 일</label>
      <input {...register('day', { required: true })} />
      {errors.day && <span>This field is required</span>}
    </div>
    <div>
      <label>양/음력</label>
      <select {...register('calendarType', { required: true })}>
        <option value="SOLAR">양력</option>
        <option value="LUNAR">음력 평달</option>
        <option value="LUNAR_LEAP_MONTH">음력 윤달</option>
      </select>
      {errors.gender && <span>This field is required</span>}
    </div>
  </>
)

export default UserBirthdayInput
