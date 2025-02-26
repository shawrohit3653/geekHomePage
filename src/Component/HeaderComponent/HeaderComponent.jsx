import { Link } from 'react-router-dom';
import logo from '/src/assets/logo.svg';
import menuIcon from '/src/assets/asset 3.svg';
import './HeaderComponent.css';

function HeaderComponent() {
    return (
        <nav>
            <div className="left-nav">
                <img src={logo} alt="Logo" />
                <h3 style={{ margin: "5px" }}>GeekFoods</h3>
            </div>
            <div className="right-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>  
                    <li><Link to="/quote">Quote</Link></li>  
                    <li><Link to="/restaurants">Restaurants</Link></li>
                    <li><Link to="/food">Food</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="btn-container">
                <button className="btn-primary">Get started</button>
                <img src={menuIcon} alt="Menu" className='ham' />
            </div>
        </nav>
    );
}

export default HeaderComponent;
