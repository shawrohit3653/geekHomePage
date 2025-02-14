import logo from '/src/assets/logo.svg';
import './HeaderComponent.css'
function HeaderComponent(){
    return(
        <nav>
        <div className="left-nav">
        <img src={logo} alt="Logo"/>
        <h3 style={{margin:"5px"}}>GeekFoods</h3>
        </div>
        <div className="right-left">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Quote</a></li>
            <li><a href="#">Restaurants</a></li>
            <li><a href="#">Food</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </div>
        <div className="btn">
        <button className="btn">Get started</button>
        <img src="/src/assets/asset 3.svg" alt="" className='ham'/>
        </div>
    </nav>
    )
}
export default HeaderComponent;