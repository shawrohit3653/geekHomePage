import './FooterComponent.css'
function FooterComponent(){
    return(
        <div className="footerContainer">
            <img src="/src/assets/asset 4.svg" alt="" className="img-logo"/>
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
                <img src="/src/assets/asset 5.svg" alt="logo"/>
                <img src="/src/assets/asset 6.svg" alt="" />
                <img src="/src/assets/asset 7.svg" alt="" />
                <img src="/src/assets/asset 8.svg" alt="" />
                <img src="/src/assets/asset 9.svg" alt="" />
            </div>
        </div>
    )
}
export default FooterComponent;