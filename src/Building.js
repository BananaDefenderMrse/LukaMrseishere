import './App.css';
import { Link } from 'react-router-dom';
import medival from './medival.png';
import classic from './classic.png';
import modern from './modern.png';
import mountain from './mountain.png';
import detalji from './detalji.png';
import zidovi from './zidovi.png';
import krov from './krovovi.png';
import layout from './layout.png';
function Building() {
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
                <div class="bam">
                    <div className='left'>
                        <h1>In this class you will learn:</h1></div>
                    <div className='right'>
                        <h2>How to plan out your build, detailing, texturing and more</h2></div>
                </div>
                <div className="light-grayish_build">
                    <h2>How to plan your builds</h2>
                    <p>First plan out your building style, then on the ground put a build sketch where are the wall gonna be,
                         then build main points of the walls and build them at diffrent levels so the roof looks better(plan roofs first then wall), then
                          start with the roofing then the walls (filling them out) and then build detail for example trapdoors
                         ,windows, bushes around the building and so on, lastly texturing to make the build more alive
                          instead of for example the roof only being out of oak wood replace it for some diffrent one like spruce,
                           it will make the build feel more alive
                    </p>
                </div>
                <div className="light-grayish_build2">
                    <h2>Instructions displayed in pictures</h2>
                    <div class='images'>
                        <img src={layout} class="building"></img>
                        <img src={krov} class="building"></img>
                        <img src={zidovi} class="building2"></img>
                        <img src={detalji} class="building"></img>
                    </div>
                </div>
            </div>
            <div class="crna_crta"><h2>Building styles</h2></div>
            <div class="background-image2">
                <div class="swords2"><img src={classic} class="slika_b"></img><p>Classic</p></div>
                <div class="swords"><img src={medival} class="slika_b"></img><p> Medival</p></div>
                <div class="swords2"><img src={modern} class="slika_b"></img><p> Modern</p></div>
                <div class="swords"><img src={mountain} class="slika_b"></img><p> Mountainside</p></div>
            </div>
            <div class="crna_crta2"><p> To build with us</p><Link to="/Login" class="link3"> sign up right now!</Link></div>
        </div>
    );
};

export default Building;