import styles from '@/styles/Intro.module.scss'

const Intro: React.FC = () => {
  return (
    <section className={styles.introSection}>
      <div className={styles.introContent}>
        <h1>탐험해 보세요</h1>
        <p>우주의 비밀과 사주팔자로 여러분의 운명을 엿보세요.</p>
      </div>
      <div className={styles.imageContainer}></div>
    </section>
  )
}

export default Intro
