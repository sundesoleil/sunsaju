'use client'

import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Member } from '@/interface/member'
import UserNameInput from './UserNameInput'
import UserGenderInput from './UserGenderInput'
import UserBirthdayInput from './UserBirthdayInput'
import SubmitButton from '@/components/button/SubmitButton'
import SajuResult from '../saju/SajuResult'

const UserInfoForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Member>()

  const [currentStep, setCurrentStep] = useState(1)
  const [memberData, setMemberData] = useState<Member>({} as Member)

  const handleFormSubmit: SubmitHandler<Member> = (data) => {
    if (currentStep < 3) {
      setMemberData((prevData) => ({ ...prevData, ...data }))
      setCurrentStep((prevStep) => prevStep + 1)
    } else {
      setMemberData((prevData) => ({ ...prevData, ...data }))
      setCurrentStep(4)
    }
  }

  return (
    <>
      {currentStep === 4 ? (
        <SajuResult member={memberData} />
      ) : (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          {currentStep === 1 && (
            <UserNameInput register={register} errors={errors} />
          )}
          {currentStep === 2 && (
            <UserGenderInput register={register} errors={errors} />
          )}
          {currentStep === 3 && (
            <UserBirthdayInput register={register} errors={errors} />
          )}
          <SubmitButton
            title={currentStep > 2 ? '나의 타고난 성격 보기' : '다음으로'}
          />
        </form>
      )}
    </>
  )
}

export default UserInfoForm
