import { Link } from 'react-router-dom';
import logo from '/src/assets/logo.svg';
import './HeaderComponent.css';

function HeaderComponent() {
    return (
        <nav>
            <div className="left-nav">
                <img src={logo} alt="Logo" />
                <h3 style={{ margin: "5px" }}>GeekFoods</h3>
            </div>
            <div className="right-left">
                <ul>
                    <li><Link to="/">Home</Link></li>  
                    <li><Link to="/quote">Quote</Link></li>  
                    <li><a href="#">Restaurants</a></li>
                    <li><a href="#">Food</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="btn">
                <button className="btn">Get started</button>
                <img src="/src/assets/asset3.svg" alt="" className='ham' />
            </div>
        </nav>
    );
}

export default HeaderComponent;
