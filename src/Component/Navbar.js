import React, {useEffect} from 'react';
import { BsTelephone} from "react-icons/bs";
import { useUserState } from '../context/loginContext';


const Navbar = () => {
  
  const { isAuthenticated } = useUserState();

  useEffect(() => {
    const first = document.getElementById("nav-top");
    const second = document.getElementById("nav-bottom");
    
    const onScroll = (event) => {
      // pageYOffset or scrollY
      //const scrolled = document.documentElement.scrollTop;
      if (window.pageYOffset > 600) {
        first.classList.add("new-nav-top");
        second.classList.remove("new-nav-bottom");
      } else {
        first.classList.remove("new-nav-top");
        second.classList.add("new-nav-bottom");
      }

     
    };

   
 
    window.addEventListener("scroll", onScroll);
  }, []);

   /**
   * Scroll functionality
   * 
   * 
   */
    const goToTop = (e) => {
          window.scrollTo({
              top: 0,
              behavior: 'smooth',
          });
        };
    
    const redirectToHomeLane = (e) => {
      const target = e.target;
      window.dataLayer.push({
        'event': 'redirectToHomeLane',
        'redirect_link':`${target?.href}`
      });
    }

  return (
    <div className="navbar-wrapper">
    <div id="nav-top" >
    <nav className="new-navbar">
      <div>
        <a href='/'>
        <img className="new-nav-logo" src="./images/logo_new.png" alt="logo" />
        </a>
      </div>
      <div className="new-nav-part-2">
        <div className="new-toll-free" onClick={() => {window?.dataLayer?.push({'input-phone':'18003098789','event': 'Toll-Free'}); window.location = "tel:18003098789"}}>
          <div className="tele-icon"><BsTelephone/></div>
          <a className="new-p-red" style={{display: 'block'}} href="tel:18003098789">18003098789</a>
        </div>
        <div className="arrow-part">
          <p className="new-p under-line"><a className="new-p under-line" href="https://www.homelane.com/" onClick={redirectToHomeLane} target="_blank" rel="noreferrer" >Make the most of your interiors here   <img  src="./images/arrow_forward.svg" alt="arrow" style={{marginLeft:'5px'}} /> </a> </p>
        
      
        </div>
      </div>
    </nav>
    </div>

    <div id="nav-bottom" className="new-nav-bottom">
    <nav className="new-navbar">
      <div>
        <img className="new-nav-logo" src="./images/logo_new.png" alt="logo" />
      </div>
          {
            !isAuthenticated &&
            <div className="new-nav-part-2">
              <button className="nav-red-btn" onClick={e => goToTop(e)}>
                <h3 className="red-btn-text">Book Free Home Visit</h3>
              </button>

            </div>
          }
    </nav>
    </div>
    </div>
  )
}

export default Navbar