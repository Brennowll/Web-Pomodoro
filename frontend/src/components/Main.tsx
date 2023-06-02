import "../styles/main.css"

const Main = () => {
  return (
    <main className="main-container">
      <div className="counter">
        <div className="main-nav-container">
          <nav className="main-nav">
            <button className="main-nav-button-pomodoro main-nav-buttons">
              Pomodoro
            </button>
            <button className="main-nav-button-short main-nav-buttons">
              Short Break
            </button>
            <button className="main-nav-button-long main-nav-buttons">
              Long Break
            </button>
          </nav>
        </div>
        <div className="main-counter">25:00</div>
        <button className="main-button-start">START</button>
      </div>
    </main>
  )
}

export default Main
