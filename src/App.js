import './App.css';
import major from "./images/image-web-3-desktop.jpg";
import majorMobile from "./images/image-web-3-mobile.jpg";
import bsi1 from "./images/image-retro-pcs.jpg";
import bsi2 from "./images/image-top-laptops.jpg";
import bsi3 from "./images/image-gaming-growth.jpg";
import {RiMenuFill} from 'react-icons/ri';
import {RiCloseLine} from 'react-icons/ri';
import { useState } from 'react';
import HambugerMenu from './components/HambugerMenu';

function App() {

const [clicked, setClicked] = useState(false);

const showHambugerMenu = <RiMenuFill 
                          className='hambuger-icon' 
                          size={'50px'}
                          onClick={()=>{setClicked(!clicked)}}
                          />

const closeMenu = <RiCloseLine
                  className='hambuger-icon' 
                  size={'50px'}
                  onClick={()=>{setClicked(!clicked)}}
                  />

  return (
    <div className="App">
      <nav className='navBar'>
        <h2 className='siteLogo'>W.</h2>
          <ul className='navLinkContainer'>
            <li className='navLinks'>Home</li>
            <li className='navLinks'>New</li>
            <li className='navLinks'>Popular</li>
            <li className='navLinks'>Trending</li>
            <li className='navLinks' id='categories'>Categories</li>
          </ul>
          {clicked?closeMenu:showHambugerMenu}
      </nav>
          {clicked&&<HambugerMenu/>}
      <div className='imageAndNewSectionContainer'>
        <div className='firstImageContainer'>
          <img className='firstImage' src={major} alt='colorful leggo-like'/>
          <img className='firstImage-mobile' src={majorMobile} alt='colorful leggo-like'/>
          <div className='containerBelowImage'>
            <h1 className='theBrightFutureText'>The Bright Future of Web 3.0?</h1>
            <div className='readMoreContainer'>
              <p className='readMoreText'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                But is it really fulfilling it's promise?
              </p>
              <button className='readMoreBtn'>READ MORE</button>
            </div>
          </div>
        </div>
        <div className='NewContainer'>
          <h2 className='NewMargin newTitle'>New</h2>
          <h4 className='NewMargin newSubTitle'>Hydrogen VS Electric Cars</h4>
          <p className='NewMargin newParagraphs'>Will hydrogen-fueled cars ever catch up to EVs?</p>
          <hr className='NewMargin horizontalLn'/>
          <h4 className='NewMargin newSubTitle'>The Downside of AI Artistry</h4>
          <p className='NewMargin newParagraphs'>What are the possible adverse effeacts of on-demand AI image generation?</p>
          <hr className='NewMargin horizontalLn'/>
          <h4 className='NewMargin newSubTitle'>Is VC Funding Drying up?</h4>
          <p className='NewMargin newParagraphs'>Private funding by VC firms is down 50% YOY.
            We take a look at what that means.
          </p>
        </div>
      </div>
      <div className='bottomSection'>
        <div className='bottomSectionContainers'>
          <img className='BSCimage' src={bsi1} alt='retro-pcs'/>
          <div>
            <h2 className='numbers'>01</h2>
            <h4 className='bottomTitles'>Reviving Retro PCs</h4>
            <p className='bottomParagraphs'>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className='bottomSectionContainers midContainer'>
          <img className='BSCimage' src={bsi2} alt='Top-laptops'/>
          <div>
            <h2 className='numbers'>02</h2>
            <h4 className='bottomTitles'>Top 10 Laptops of 2022</h4>
            <p className='bottomParagraphs'>Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className='bottomSectionContainers'>
          <img className='BSCimage' src={bsi3} alt='Gaming growth'/>
          <div>
            <h2 className='numbers'>03</h2>
            <h4 className='bottomTitles'>The Growth of Gaming</h4>
            <p className='bottomParagraphs'>How the pandemic has sparked fresh opportunities</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
