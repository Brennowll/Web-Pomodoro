import { useState } from "react"

interface Props {
  setPomodoroRunning: (boolean: boolean) => void
  setPomodoroMinutes: (minutes: number) => void
  setNavButtonActived: (name: string) => void
  navButtonActived: string
  settingPomodoroMinutes: number
  settingShortBreakMinutes: number
  settingLongBreakMinutes: number
}

const MainNav = (props: Props) => {
  const navButtonStyle = (name: string) => {
    if (name === props.navButtonActived) {
      return "main-nav-button-pomodoro main-nav-buttons main-nav-button-active"
    } else {
      return "main-nav-button-pomodoro main-nav-buttons"
    }
  }

  const handleNavClick = (minutes: number, buttonName: string) => {
    props.setPomodoroRunning(false)
    props.setPomodoroMinutes(minutes)
    props.setNavButtonActived(buttonName)
  }

  return (
    <nav className="main-nav">
      <button
        className={navButtonStyle("Pomodoro")}
        onClick={() => {
          handleNavClick(props.settingPomodoroMinutes, "Pomodoro")
        }}
      >
        Pomodoro
      </button>
      <button
        className={navButtonStyle("Short Break")}
        onClick={() => {
          handleNavClick(props.settingShortBreakMinutes, "Short Break")
        }}
      >
        Short Break
      </button>
      <button
        className={navButtonStyle("Long Break")}
        onClick={() => {
          handleNavClick(props.settingLongBreakMinutes, "Long Break")
        }}
      >
        Long Break
      </button>
    </nav>
  )
}

export default MainNav
