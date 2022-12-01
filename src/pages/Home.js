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
      <span className="text-secondary">순신령이 알려주는 당신의 타고난 운명</span>
      <h1 className="text-primary" style={{ marginTop: '5px' }}>
        BORN TO BE BOSS
      </h1>
      <img src={moon} alt="main_image" width="50%" height="50%" />
      <NavLink to="/fate">
        <MainButton>타고난 사주 보러 가기</MainButton>
      </NavLink>
      <div style={{ padding: '30px 0' }}></div>
      <span className="text-secondary">HOW LUCKY TODAY I AM?</span>
      <h3 className="text-primary" style={{ marginTop: '5px' }}>
        운명의 주사위 던지기
      </h3>
      <TodayFortune />
    </motion.div>
  );
}

export default Home;
