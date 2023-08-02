import styles from '@/styles/Button.module.scss'

interface ButtonProps {
  title: string
}

function SubmitButton({ title }: ButtonProps) {
  return <button className={styles.button__submit}>{title}</button>
}

export default SubmitButton
