import React from 'react';
import { Outlet } from 'react-router-dom';

function Today() {
  return (
    <>
      <h2>오늘의운세</h2>
      <Outlet></Outlet>
      <div>여기는 이미지 영역</div>
      <div>여기는 버튼 영역</div>
    </>
  );
}

export default Today;
