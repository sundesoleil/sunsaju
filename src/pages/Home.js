import { React } from 'react';
import { NavLink } from 'react-router-dom';
import TodayFortune from '../components/TodayFortune';
import MainButton from '../components/MainButton';
import moon from '../assets/images/moon.png';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div style={{ padding: '30px' }}></div>
      <span className="text-secondary">나는 어떤 운명을 갖고 태어났을까?</span>
      <h2 className="text-primary" style={{ marginTop: '5px', whiteSpace: 'nowrap' }}>
        순신령이 알려주는 당신의 운명
      </h2>
      <img src={moon} alt="main_image" width="50%" height="50%" />
      <NavLink to="/fate" style={{ textDecoration: 'none' }}>
        <MainButton>타고난 사주 보러 가기</MainButton>
      </NavLink>
      <div style={{ padding: '30px 0' }}></div>
      <span className="text-secondary">랜덤으로 보는 오늘의 운세</span>
      <h3 className="text-primary" style={{ marginTop: '5px' }}>
        운명의 주사위 던지기
      </h3>
      <TodayFortune />
    </motion.div>
  );
}

export default Home;
