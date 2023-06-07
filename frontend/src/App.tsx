import { useState } from "react"

import Setting from "./components/Setting"
import Header from "./components/Header"
import Main from "./components/Main"

function App() {
  const [isSettingOpen, setIsSettingOpen] = useState(false)
  const [navButtonActived, setNavButtonActived] = useState("Pomodoro")

  const [pomodoroColor, setPomodoroColor] = useState("red")
  const [shortBreakColor, setShortBreakColor] = useState("aqua")
  const [longBreakColor, setLongBreakColor] = useState("blue")

  const [settingPomodoroMinutes, setSettingPomodoroMinutes] = useState(25)
  const [settingShortBreakMinutes, setSettingShortBreakMinutes] = useState(5)
  const [settingLongBreakMinutes, setSettingLongBreakMinutes] = useState(10)

  const setWebsiteBackground = () => {
    if (navButtonActived === "Pomodoro") {
      return pomodoroColor
    } else if (navButtonActived === "Short Break") {
      return shortBreakColor
    } else if (navButtonActived === "Long Break") {
      return longBreakColor
    }
  }

  return (
    <div className={"website-background background-" + setWebsiteBackground()}>
      {isSettingOpen && (
        <Setting
          setIsSettingOpen={setIsSettingOpen}
          setPomodoroColor={setPomodoroColor}
          setShortBreakColor={setShortBreakColor}
          setLongBreakColor={setLongBreakColor}
          pomodoroColor={pomodoroColor}
          shortBreakColor={shortBreakColor}
          longBreakColor={longBreakColor}
          setSettingPomodoroMinutes={setSettingPomodoroMinutes}
          setSettingShortBreakMinutes={setSettingShortBreakMinutes}
          setSettingLongBreakMinutes={setSettingLongBreakMinutes}
          settingPomodoroMinutes={settingPomodoroMinutes}
          settingShortBreakMinutes={settingShortBreakMinutes}
          settingLongBreakMinutes={settingLongBreakMinutes}
        />
      )}
      <Header setIsSettingOpen={setIsSettingOpen} />
      <Main
        setNavButtonActived={setNavButtonActived}
        navButtonActived={navButtonActived}
        settingPomodoroMinutes={settingPomodoroMinutes}
        settingShortBreakMinutes={settingShortBreakMinutes}
        settingLongBreakMinutes={settingLongBreakMinutes}
      />
    </div>
  )
}

export default App
