import { useState, useEffect } from "react"

interface Props {
  pomodoroRunning: boolean
  pomodoroMinutes: number
}

const MainTimer = (props: Props) => {
  const [timePomodoro, setTimePomodoro] = useState(props.pomodoroMinutes * 60)

  useEffect(() => {
    let interval: NodeJS.Timer

    if (props.pomodoroRunning && timePomodoro > 0) {
      interval = setInterval(() => {
        setTimePomodoro((prevTime) => prevTime - 1)
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [props.pomodoroMinutes, props.pomodoroRunning, timePomodoro])

  useEffect(() => {
    setTimePomodoro(props.pomodoroMinutes * 60)
  }, [props.pomodoroMinutes])

  const formatTime = (timePomodoro: number) => {
    const minutes = Math.floor(timePomodoro / 60)
    const seconds = timePomodoro % 60
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`
  }

  return <div className="main-timer">{formatTime(timePomodoro)}</div>
}

export default MainTimer
