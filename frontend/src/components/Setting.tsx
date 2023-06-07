import { useState, ChangeEvent } from "react"

import ColorMenu from "./setting_components/ColorMenu"
import "../styles/setting.css"

interface Props {
  setIsSettingOpen: (isSettingOpen: boolean) => void
  setPomodoroColor: (pomodoroColor: string) => void
  setShortBreakColor: (shortBreakColor: string) => void
  setLongBreakColor: (longBreakColor: string) => void
  pomodoroColor: string
  shortBreakColor: string
  longBreakColor: string
  setSettingPomodoroMinutes: (settingPomodoroMinutes: number) => void
  setSettingShortBreakMinutes: (settingShortBreakMinutes: number) => void
  setSettingLongBreakMinutes: (settingLongBreakMinutes: number) => void
  settingPomodoroMinutes: number
  settingShortBreakMinutes: number
  settingLongBreakMinutes: number
}

const Setting = (props: Props) => {
  const [colorMenuIsOpen, setColorMenuIsOpen] = useState(false)
  const [colorMenuSelected, setColorMenuSelected] = useState("")

  const [settingPomodoroInputValue, setSettingPomodoroInputValue] = useState(
    props.settingPomodoroMinutes
  )
  const [settingShortBreakInputValue, setSettingShortBreakInputValue] =
    useState(props.settingShortBreakMinutes)
  const [settingLongBreakInputValue, setSettingLongBreakInputValue] = useState(
    props.settingLongBreakMinutes
  )

  const handleSettingPomodoroInputValue = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setSettingPomodoroInputValue(parseInt(e.target.value))
  }

  const handleSettingShortBreakInputValue = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setSettingShortBreakInputValue(parseInt(e.target.value))
  }

  const handleSettingLongBreakInputValue = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setSettingLongBreakInputValue(parseInt(e.target.value))
  }

  return (
    <div className="setting-background">
      {colorMenuIsOpen && (
        <ColorMenu
          setColorMenuIsOpen={setColorMenuIsOpen}
          setPomodoroColor={props.setPomodoroColor}
          setShortBreakColor={props.setShortBreakColor}
          setLongBreakColor={props.setLongBreakColor}
          colorMenuSelected={colorMenuSelected}
        />
      )}
      <div className="setting-container">
        <div className="setting-time-container">
          <h2 className="setting-titles">Time (minutes)</h2>
          <div className="setting-time-all-inputs-container">
            <div className="setting-time-input-container">
              <h3 className="setting-time-input-label">Pomodoro</h3>
              <input
                type="text"
                className="setting-time-inputs"
                value={
                  settingPomodoroInputValue ? settingPomodoroInputValue : 0
                }
                onChange={handleSettingPomodoroInputValue}
              />
            </div>
            <div className="setting-time-input-container">
              <h3 className="setting-time-input-label">Short Break</h3>
              <input
                type="text"
                className="setting-time-inputs"
                value={
                  settingShortBreakInputValue ? settingShortBreakInputValue : 0
                }
                onChange={handleSettingShortBreakInputValue}
              />
            </div>
            <div className="setting-time-input-container">
              <h3 className="setting-time-input-label">Long Break</h3>
              <input
                type="text"
                className="setting-time-inputs"
                value={
                  settingLongBreakInputValue ? settingLongBreakInputValue : 0
                }
                onChange={handleSettingLongBreakInputValue}
              />
            </div>
          </div>
        </div>
        <div className="setting-theme-container">
          <h2 className="setting-titles">Color Themes</h2>
          <div className="setting-theme-colors-container">
            <button
              className={
                "setting-theme-button background-" + props.pomodoroColor
              }
              onClick={() => {
                setColorMenuSelected("Pomodoro")
                setColorMenuIsOpen(true)
              }}
            ></button>
            <button
              className={
                "setting-theme-button background-" + props.shortBreakColor
              }
              onClick={() => {
                setColorMenuSelected("Short Break")
                setColorMenuIsOpen(true)
              }}
            ></button>
            <button
              className={
                "setting-theme-button background-" + props.longBreakColor
              }
              onClick={() => {
                setColorMenuSelected("Long Break")
                setColorMenuIsOpen(true)
              }}
            ></button>
          </div>
        </div>
        <div className="setting-ok-button-container">
          <button
            className="setting-ok-button"
            onClick={() => {
              props.setSettingPomodoroMinutes(settingPomodoroInputValue)
              props.setSettingShortBreakMinutes(settingShortBreakInputValue)
              props.setSettingLongBreakMinutes(settingLongBreakInputValue)
              props.setIsSettingOpen(false)
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}

export default Setting
