import myLogo from './assets/logos/logo.png'
import Faq from './assets/images/FAQdesk.png'
import Faq2 from './assets/images/FAQ.png'
import decor from './assets/stickers/decor.png'
import instagram from "./assets/images/instagram.png";
import linkedin from "./assets/images/linkedin.png";
import gmail from "./assets/images/gmail.png";
import linktree from "./assets/images/linktree.png";
import '../index.css'

function FAQ() {

  return (
    <div className="w-full h-full bg-black relative">
      <div className=''>
        <img className='hidden lg:block' src={Faq} alt='faq'/> 
        <img className='block lg:hidden h-8' src={Faq2} alt='faq'/>       
      </div>
      <div className='main-content'>
        <ul className="accordion">
            <li>
                <input type="radio" name="accordion" id="first"/>
                <label htmlFor="first">What is Netflix?</label>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia exercitationem non necessitatibus, esse officiis reiciendis harum, dignissimos sapiente expedita voluptate quos quisquam minima placeat ex molestias ducimus assumenda illum!</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="second"/>
                <label htmlFor="second">what is the cost for netflix subscription?</label>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia exercitationem non necessitatibus, esse officiis reiciendis harum, dignissimos sapiente expedita voluptate quos quisquam minima placeat ex molestias ducimus assumenda illum!</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="Third"/>
                <label htmlFor="Third">Where can I watch?</label>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia exercitationem non necessitatibus, esse officiis reiciendis harum, dignissimos sapiente expedita voluptate quos quisquam minima placeat ex molestias ducimus assumenda illum!</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="forth"/>
                <label htmlFor="forth">How to cancel the subscription?</label>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia exercitationem non necessitatibus, esse officiis reiciendis harum, dignissimos sapiente expedita voluptate quos quisquam minima placeat ex molestias ducimus assumenda illum!</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="fifth"/>
                <label htmlFor="fifth">What can I watch on Netflix?</label>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia exercitationem non necessitatibus, esse officiis reiciendis harum, dignissimos sapiente expedita voluptate quos quisquam minima placeat ex molestias ducimus assumenda illum!</p>
                </div>
            </li>
            <li>
                <input type="radio" name="accordion" id="sixth"/>
                <label htmlFor="sixth">is Netflix good for kids?</label>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quia exercitationem non necessitatibus, esse officiis reiciendis harum, dignissimos sapiente expedita voluptate quos quisquam minima placeat ex molestias ducimus assumenda illum!</p>
                </div>
            </li>
        </ul>
      </div>
      <img className='absolute h-14 top-220 left-1 lg:top-210 lg:left-8 lg:h-27' src={myLogo} alt='logo'/>
      <img className='absolute h-20 top-215 lg:h-25 lg:top-206 -right-1' src={decor} alt='decor'/>
      <div className="social-links absolute top-220 right-5 lg:top-210 lg:right-15 flex flex-row gap-1 items-center">
        <a
            href="https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img className='w-9 lg:w-12' src={linktree} alt="linktree" />
        </a>

        <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img className='w-9 lg:w-12' src={instagram} alt="Instagram" />
        </a>

        <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img className='w-9 lg:w-12' src={linkedin} alt="LinkedIn" />
        </a>

        <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img className='w-9 lg:w-12' src={gmail} alt="gmail" />
        </a>
    </div>
    </div>
  )
}

export default FAQ