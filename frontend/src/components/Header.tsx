import "../styles/header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">
        <img src={process.env.PUBLIC_URL + "/media/icon_check.png"} alt="" />
        <h1>Pomofocus</h1>
      </div>
      <div className="header-buttons-container">
        <button className="header-button-settings header-button">
          <img
            src={process.env.PUBLIC_URL + "/media/icon_settings.png"}
            alt=""
            className="header-button-icons"
          />
          <p>Settings</p>
        </button>
        <button className="header-button-login header-button">
          <img
            className="header-button-icons"
            src={process.env.PUBLIC_URL + "/media/icon_user.png"}
            alt=""
          />
          <p>Login</p>
        </button>
      </div>
    </header>
  )
}

export default Header
