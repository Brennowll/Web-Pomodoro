import { useState } from "react"
import "../styles/main.css"
import MainNav from "./main_components/MainNav"
import MainTimer from "./main_components/MainTimer"
import MainButton from "./main_components/MainButton"

interface Props {
  setNavButtonActived: (name: string) => void
  navButtonActived: string
  settingPomodoroMinutes: number
  settingShortBreakMinutes: number
  settingLongBreakMinutes: number
}

const Main = (props: Props) => {
  const [pomodoroMinutes, setPomodoroMinutes] = useState(25)
  const [pomodoroRunning, setPomodoroRunning] = useState(false)

  return (
    <main className="main-container">
      <div className="counter">
        <div className="main-nav-container">
          <MainNav
            setPomodoroMinutes={setPomodoroMinutes}
            setPomodoroRunning={setPomodoroRunning}
            setNavButtonActived={props.setNavButtonActived}
            navButtonActived={props.navButtonActived}
            settingPomodoroMinutes={props.settingPomodoroMinutes}
            settingShortBreakMinutes={props.settingShortBreakMinutes}
            settingLongBreakMinutes={props.settingLongBreakMinutes}
          />
        </div>
        <MainTimer
          pomodoroRunning={pomodoroRunning}
          setPomodoroRunning={setPomodoroRunning}
          pomodoroMinutes={pomodoroMinutes}
          settingPomodoroMinutes={props.settingPomodoroMinutes}
          settingShortBreakMinutes={props.settingShortBreakMinutes}
          settingLongBreakMinutes={props.settingLongBreakMinutes}
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
