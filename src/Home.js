import './App.css';
import { Link } from 'react-router-dom';
import pvp from './pvp_square.png';
import rod from './fishing_squre.png';
import ender from './ender_squre.png';
import build from './building_square.jpg';
function Home() {
    return (
        <div className='glavni'>
            <div className='background-image'>
                <nav class="navbar">
                    <span class="navbar-brand">Pages</span>
                    <span class="linkovi"><Link to="/" class="link">Home</Link></span>
                    <span class="linkovi"><Link to="/Pvp" class="link">PvP</Link></span>
                    <span class="linkovi"><Link to="/Rod" class="link">Rod pvp</Link></span>
                    <span class="linkovi"><Link to="/Building" class="link">Building</Link></span>
                    <span class="linkovi"><Link to="/Login" class="link">Sign up to our private classes</Link></span>
                </nav>
                <div class="pro">
                    <h1>How to minecraft</h1>
                    <br></br>
                    <br></br>
                    <h2>Spot where you become a minecraft pro</h2>
                </div>
                <div className="light-grayish">
                    <h2>What is our site for?</h2>
                    <p>This website is for learning diffrent minecraft skills to make you overall a better player in diffrent categories and situations</p>
                </div>
                <div className="light-grayish_2">
                    <h2>What are the diffrent skills we are teaching</h2>
                    <p>We are currently teaching 1.8.9 sword and rod pvp, how to build better and get better and planning our your builds and
                        speedrunning. We are planning to add more categories in the future such as 1.9 pvp with sword, shields and axes :)
                    </p>
                </div>
            </div>
            <div class="crna_crta"><h2>Classes</h2></div>
            <div class="background-image2">
                <div class="swords2"><img src={pvp} class="slika"></img><p>Class for</p><Link to="/Pvp" class="link2">Sword pvp</Link></div>
                <div class="swords"><img src={rod} class="slika"></img><p> Class for</p><Link to="/Rod" class="link2">Rod pvp</Link></div>
                <div class="swords2"><img src={ender} class="slika"></img><p> Class for, coming soon???</p></div>
                <div class="swords"><img src={build} class="slika"></img><p> Class for</p><Link to="/Building" class="link2">Building</Link></div>
            </div>
            <div class="crna_crta2"><p> Class for a private 1 on 1 lesson,</p><Link to="/Login" class="link3"> sign up now!</Link></div>
        </div>
    );
};

export default Home;