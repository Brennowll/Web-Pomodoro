import { useState } from "react"

interface Props {
  setPomodoroRunning: (boolean: boolean) => void
  setPomodoroMinutes: (minutes: number) => void
}

const MainNav = (props: Props) => {
  const [navButtonActived, setNavButtonActived] = useState("Pomodoro")

  const navButtonStyle = (name: string) => {
    if (name === navButtonActived) {
      return "main-nav-button-pomodoro main-nav-buttons main-nav-button-active"
    } else {
      return "main-nav-button-pomodoro main-nav-buttons"
    }
  }

  const handleNavClick = (minutes: number, buttonName: string) => {
    props.setPomodoroRunning(false)
    props.setPomodoroMinutes(minutes)
    setNavButtonActived(buttonName)
  }

  return (
    <nav className="main-nav">
      <button
        className={navButtonStyle("Pomodoro")}
        onClick={() => {
          handleNavClick(25, "Pomodoro")
        }}
      >
        Pomodoro
      </button>
      <button
        className={navButtonStyle("Short Break")}
        onClick={() => {
          handleNavClick(5, "Short Break")
        }}
      >
        Short Break
      </button>
      <button
        className={navButtonStyle("Long Break")}
        onClick={() => {
          handleNavClick(10, "Long Break")
        }}
      >
        Long Break
      </button>
    </nav>
  )
}

export default MainNav
