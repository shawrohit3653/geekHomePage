import './FooterComponent.css';
import asset4 from '../../assets/asset 4.svg';
import asset5 from '../../assets/asset 5.svg';
import asset6 from '../../assets/asset 6.svg';
import asset7 from '../../assets/asset 7.svg';
import asset8 from '../../assets/asset 8.svg';
import asset9 from '../../assets/asset 9.svg';

function FooterComponent() {
    return (
        <div className="footerContainer">
            <img src={asset4} alt="Logo" className="img-logo"/>
            <p className="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit.Beatae.</p>
            <p className='para'> eveniet quos. Hic, officiis</p>
            <ul className="list">
                <li>About</li>
                <li>Careers</li>
                <li>History</li>
                <li>Services</li>
                <li>Project</li>
                <li>Blog</li>
            </ul>
            <div className="logoList">
                <img src={asset5} alt="Logo"/>
                <img src={asset6} alt="Logo"/>
                <img src={asset7} alt="Logo"/>
                <img src={asset8} alt="Logo"/>
                <img src={asset9} alt="Logo"/>
            </div>
        </div>
    )
}

export default FooterComponent;
