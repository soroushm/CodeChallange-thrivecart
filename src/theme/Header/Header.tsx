import Logo from '../../assets/logo.svg'
import './header.css'

export function Header() {
  return (
    <header id="header">
      <a className="logo-wrapper" href="/public">
        <img src={Logo} className="logo" alt="Acme Widget Co" />
        <h1 className="brand-name">Acme Widget Co</h1>
      </a>
    </header>
  )
}
