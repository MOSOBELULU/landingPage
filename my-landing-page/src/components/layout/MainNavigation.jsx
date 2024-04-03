import { Link } from "react-router-dom"
import classes from './MainNavigation.module.css'



export default function MainNavigation() {
  return (
    <div>
      <header className={classes.header}>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>Menu</Link>
                </li>
                <li>
                    <Link to='/projects'>Shop</Link>
                </li>
                <li>
                    <Link to='/projects'>Gallery</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
      </header>
    </div>
  )
}
