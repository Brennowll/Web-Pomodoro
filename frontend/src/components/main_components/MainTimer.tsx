import { useState, useEffect } from "react"

interface Props {
  pomodoroRunning: boolean
  setPomodoroRunning: (running: boolean) => void
  pomodoroMinutes: number
  settingPomodoroMinutes: number
  settingShortBreakMinutes: number
  settingLongBreakMinutes: number
}

const MainTimer = (props: Props) => {
  const [timePomodoro, setTimePomodoro] = useState(props.pomodoroMinutes * 60)
  const [initialTimePomodoro, setInitialTimePomodoro] = useState(
    props.pomodoroMinutes * 60
  )

  useEffect(() => {
    if (
      timePomodoro === props.settingPomodoroMinutes ||
      timePomodoro === props.settingShortBreakMinutes * 60 ||
      timePomodoro === props.settingLongBreakMinutes * 60
    ) {
      setInitialTimePomodoro(timePomodoro)
    }
  }, [props.pomodoroRunning])

  useEffect(() => {
    let interval: NodeJS.Timer

    if (props.pomodoroRunning && timePomodoro > 0) {
      interval = setInterval(() => {
        setTimePomodoro((prevTime) => {
          const newTime = prevTime - 1
          return newTime
        })
      }, 1000)
    } else if (props.pomodoroRunning && timePomodoro === 0) {
      setTimePomodoro(initialTimePomodoro)
      props.setPomodoroRunning(false)
    }

    return () => {
      clearInterval(interval)
    }
  }, [props.pomodoroRunning, timePomodoro])

  useEffect(() => {
    setTimePomodoro(props.pomodoroMinutes * 60)
  }, [props.pomodoroMinutes])

  useEffect(() => {
    setTimePomodoro(props.settingShortBreakMinutes * 60)
  }, [props.settingShortBreakMinutes])

  useEffect(() => {
    setTimePomodoro(props.settingLongBreakMinutes * 60)
  }, [props.settingLongBreakMinutes])

  useEffect(() => {
    setTimePomodoro(props.settingPomodoroMinutes * 60)
  }, [props.settingPomodoroMinutes])

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
