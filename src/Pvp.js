import './App.css';
import { Link } from 'react-router-dom';
import tap from './w_tapping.png';
export default function Pvp() {
    return (
        <div className='glavni'>
            <div className='background-image-pvp'>
                <nav class="navbar">
                    <span class="navbar-brand">How to minecraft</span>
                    <span class="linkovi"><Link to="/" class="link">Home</Link></span>
                    <span class="linkovi"><Link to="/Pvp" class="link">PvP</Link></span>
                    <span class="linkovi"><Link to="/Rod" class="link">Rod pvp</Link></span>
                    <span class="linkovi"><Link to="/Building" class="link">Building</Link></span>
                    <span class="linkovi"><Link to="/Login" class="link">Sign up to our private classes</Link></span>
                </nav>
                <div class="bam">
                    <div className='left'>
                        <h1>In this class you will learn:</h1></div>
                    <div className='right'>
                        <h2>Sprint reseting, reducing knockback and other tactics</h2></div>
                </div>
                <div className="light-grayish_pvp">
                    <h2>Why <span class="plavo">Sprint Reset</span> and why is it good in pvp</h2>
                    <p>So when you hit players in minecraft the first hit is always 3 blocks of knockback after that it's only less than 1 block,
                        but when you sprint reset you reset your sprint and you make every hit deal 3 blocks of knockback which makes it easier to combo.
                        There are lots of ways to sprint reset but the main ones and the easiest ones are <span class="plavo">w taping</span> and <span class="plavo">s taping</span>, there is also shifing but that has some flaws
                    </p>
                </div>
                <div className="light-grayish_reset">
                    <h2>How to <span class="plavo">w tap</span> and <span class="plavo">s tap</span></h2>
                    <p>So hold w to aproach the player sprinting after you hit the player quickly let go of w and press it again and hit the opponent.
                        S tapping is little bit diffrent, you always hold w and you are tapping s after every hit. If you and the opponent is are just
                        hitting eachother with no one getting the advantage (trading), spamming the w key or s key is good method to get a combo.
                    </p>
                </div>
            </div>
            <div class="siva"><img src={tap} className='eggs'></img></div>
            <div class="background-image5">
                <br></br>
                <br></br>
                <div className="light-grayish_knockback">
                    <h2>How to <span class="plavo">reduce knockback</span> </h2>
                    <p>Sprint reseting reduces knockback but some other helpful techniques are spaming a and d key and "jump reseting".Jump reseting is when you take a tick of damage if you jump right as you take damage negate knockback (this isnt the most consitant)
                    </p>
                </div>
            </div>
            <div class="crna_crta5"><p> For more secrets and techniques </p><Link to="/Login" class="link3"> sign up now </Link></div>
        </div>
    );
}