import './App.css';
import { Link } from 'react-router-dom';
function Rod() {
    return (
        <div className='glavni'>
            <div className='background-image-rod'>
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
                        <h2>Pvp-ing with the fishing rod, aiming with it and infinite rodding</h2></div>
                </div>
                <div className="light-grayish_rod">
                    <h2>Why is<span class="plavo"> rodding</span> useful in pvp</h2>
                    <p>Rodding is useful in pvp to stop the players momentum which allows us the player to get a free hit,
                        maybe even a combo with our sword skills. The skill is so useful that a player with the fishing rod
                        in leather armor can beat a player that has full diamond armor
                    </p>
                </div>
                <div className="light-grayish_rod_reset">
                    <h2>How <span class="plavo">to rod and how to aim with it</span></h2>
                    <p>You rod by holding the fishing rod right clicking to cast the rod to the player and
                        if the cast of the rod hits the enemy takes knockback then reel back in with right click again and then repeat,
                        for aiming the rod is weird cause where you cast it it goes there your movement doesen't impact the rods trajectory,
                        try to predict the opponets movement to get more consitant hits;
                    </p>
                </div>
            </div>
            <div class="crna_crta"></div>
            <div class="background-image">
                <br></br>
                <br></br>
                <div className="light-grayish_knockback">
                    <h2>How to <span class="plavo"> infinite rod</span> </h2>
                    <p>Infinite rodding is a technique for rodding that instead of reeling back you switch hotkeys.
                         This prevents the rod from loseing durability at all, one more benefit of infinite roding is
                          you can quickly rod 1-2 more times than with the regular roding style before entering close range combat
                    </p>
                </div>
                <br></br>
                <div className="light-grayish_knockback_2">
                    <h2>Extra <span class="plavo"> tips </span> </h2>
                    <p> If you rod and hit an enemy while being in the air with your sword quicker than 0.5 seconds after
                         the rod hitting you will deal double the damage this is called a rod crit. Another tip is rod strafeing,
                        for that you need to rod and then flick your head to the side and jump far while the rod is traveling to the opponent.
                    </p>
                </div>
            </div>
            <div class="crna_crta5"><p> For aiming lessons and hotkeying lessons </p><Link to="/Login" class="link3"> sign up now </Link></div>
        </div>
    );
}
export default Rod;