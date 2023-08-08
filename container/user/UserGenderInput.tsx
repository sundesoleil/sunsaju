import { Member } from '@/interface/member'
import { UseFormRegister, FieldErrors } from 'react-hook-form'

interface UserGenderInputProps {
  register: UseFormRegister<Member>
  errors: FieldErrors<Member>
}
const UserNameInput = ({ register, errors }: UserGenderInputProps) => (
  <div>
    <label>성별</label>
    <select {...register('gender', { required: true })}>
      <option value="">성별을 선택하세요</option>
      <option value="FEMALE">여성</option>
      <option value="MALE">남성</option>
    </select>
    {errors.gender && <span>This field is required</span>}
  </div>
)

export default UserNameInput
