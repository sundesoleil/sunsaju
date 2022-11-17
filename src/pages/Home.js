import React from "react";
import DateOfBirthInput from "../components/DateOfBirthInput";
import styled from '@emotion/styled'

const MenuTitle = styled.div`
  font-size: 24px;
  border-radius: 4px;
  padding: 32px;
  text-align: left;
  &:hover {
  }
`

const Home = () => {
    return (
      <div>
        <MenuTitle className="title">순탄한 당신의 삶을 위하여</MenuTitle>
        <DateOfBirthInput></DateOfBirthInput>
      </div>
    )
}

export default Home;