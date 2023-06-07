interface Props {
  setColorMenuIsOpen: (colorMenuIsOpen: boolean) => void
  setPomodoroColor: (pomodoroColor: string) => void
  setShortBreakColor: (shortBreakColor: string) => void
  setLongBreakColor: (longBreakColor: string) => void
  colorMenuSelected: string
}

const ColorMenu = (props: Props) => {
  const setColorForBackground = (color: string) => {
    if (props.colorMenuSelected === "Pomodoro") {
      props.setPomodoroColor(color)
    } else if (props.colorMenuSelected === "Short Break") {
      props.setShortBreakColor(color)
    } else if (props.colorMenuSelected === "Long Break") {
      props.setLongBreakColor(color)
    }
    props.setColorMenuIsOpen(false)
  }

  return (
    <div className="color-menu-background">
      <div className="color-menu-container">
        <button
          className="color-menu-buttons background-red"
          onClick={() => {
            setColorForBackground("red")
          }}
        ></button>
        <button
          className="color-menu-buttons background-aqua"
          onClick={() => {
            setColorForBackground("aqua")
          }}
        ></button>
        <button
          className="color-menu-buttons background-blue"
          onClick={() => {
            setColorForBackground("blue")
          }}
        ></button>
        <button
          className="color-menu-buttons background-yellow"
          onClick={() => {
            setColorForBackground("yellow")
          }}
        ></button>
        <button
          className="color-menu-buttons background-purple"
          onClick={() => {
            setColorForBackground("purple")
          }}
        ></button>
        <button
          className="color-menu-buttons background-pink"
          onClick={() => {
            setColorForBackground("pink")
          }}
        ></button>
        <button
          className="color-menu-buttons background-green"
          onClick={() => {
            setColorForBackground("green")
          }}
        ></button>
        <button
          className="color-menu-buttons background-black"
          onClick={() => {
            setColorForBackground("black")
          }}
        ></button>
      </div>
    </div>
  )
}

export default ColorMenu
