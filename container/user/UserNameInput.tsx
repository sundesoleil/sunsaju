import { Member } from '@/interface/member'
import { UseFormRegister, FieldErrors } from 'react-hook-form'

interface UserNameInputProps {
  register: UseFormRegister<Member>
  errors: FieldErrors<Member>
}
const UserNameInput = ({ register, errors }: UserNameInputProps) => (
  <div>
    <label>이름</label>
    <input {...register('name', { required: true })} />
    {errors.name && <span>This field is required</span>}
  </div>
)

export default UserNameInput
