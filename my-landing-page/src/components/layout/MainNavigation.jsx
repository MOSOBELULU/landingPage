import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'



export default function MainNavigation() {
  return (
    <div>
      <header className={classes.header}>
        <div >
          <img src="/images/Cuppa coffee.png" className={classes.logo} />
        <div className={classes.headerContent}>
          <h1>Brewing Joy, One Cup at a Time</h1>
          <button className={classes.btn}>Discover more</button>
        </div>
        </div>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/menu'>Menu</Link>
                </li>
                <li>
                    <Link to='/shop'>Shop</Link>
                </li>
                <li>
                    <Link to='/gallery'>Gallery</Link>
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