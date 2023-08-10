const RandomSection: React.FC = () => {
  const contents = [
    { title: '오늘의 운세', content: '오늘의 운세에 대한 내용...' },
    { title: '오늘의 애정운', content: '오늘의 애정운에 대한 내용...' },
    { title: '오늘의 금전운', content: '오늘의 금전운에 대한 내용...' },
  ]
  return (
    <section>
      <div>
        {contents.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RandomSection
