'use client'

import { useForm } from 'react-hook-form'
import { Member } from '@/interface/member'
import SubmitButton from '@/components/button/SubmitButton'

const UserInfoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Member>()

  const handleClick = () => {
    console.log('# go result page')
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label>이름</label>
        <input {...register('name', { required: true })} />
        {errors.name && <span>This field is required</span>}
      </div>
      <div>
        <label>성별</label>
        <select {...register('gender', { required: true })}>
          <option value="">성별을 선택하세요</option>
          <option value="FEMALE">여성</option>
          <option value="MALE">남성</option>
        </select>
        {errors.gender && <span>This field is required</span>}
      </div>
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
      <SubmitButton title="나의 타고난 성격 보기" onClick={handleClick} />
    </form>
  )
}

export default UserInfoForm
