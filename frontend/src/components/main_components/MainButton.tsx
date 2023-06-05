import { useState, useEffect } from "react"

interface Props {
  pomodoroRunning: boolean
  setPomodoroRunning: (change: boolean) => void
}

const MainButton = (props: Props) => {
  const [mainButtonPomodoroText, setMainButtonPomodoroText] = useState("START")

  const changePomodoroRunning = () => {
    if (props.pomodoroRunning) {
      props.setPomodoroRunning(false)
    } else {
      props.setPomodoroRunning(true)
    }
  }

  const changeStyleIfRunning = () => {
    if (props.pomodoroRunning) {
      return "main-button-start main-button-actived"
    } else {
      return "main-button-start"
    }
  }

  useEffect(() => {
    if (props.pomodoroRunning) {
      setMainButtonPomodoroText("PAUSE")
    } else {
      setMainButtonPomodoroText("START")
    }
  }, [props.pomodoroRunning])

  return (
    <button className={changeStyleIfRunning()} onClick={changePomodoroRunning}>
      {mainButtonPomodoroText}
    </button>
  )
}

export default MainButton
