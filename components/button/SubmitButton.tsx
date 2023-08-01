import styles from '@/styles/Button.module.scss'

interface ButtonProps {
  title: string
  onClick: () => void
}

function SubmitButton({ title, onClick }: ButtonProps) {
  return (
    <button className={styles.button__submit} onClick={onClick}>
      {title}
    </button>
  )
}

export default SubmitButton
