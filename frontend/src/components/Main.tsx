import { useState } from "react"
import "../styles/main.css"
import MainNav from "./main_components/MainNav"
import MainTimer from "./main_components/MainTimer"
import MainButton from "./main_components/MainButton"

const Main = () => {
  const [pomodoroMinutes, setPomodoroMinutes] = useState(25)
  const [pomodoroRunning, setPomodoroRunning] = useState(false)

  return (
    <main className="main-container">
      <div className="counter">
        <div className="main-nav-container">
          <MainNav
            setPomodoroMinutes={setPomodoroMinutes}
            setPomodoroRunning={setPomodoroRunning}
          />
        </div>
        <MainTimer
          pomodoroRunning={pomodoroRunning}
          pomodoroMinutes={pomodoroMinutes}
        />
        <MainButton
          pomodoroRunning={pomodoroRunning}
          setPomodoroRunning={setPomodoroRunning}
        />
      </div>
    </main>
  )
}

export default Main
