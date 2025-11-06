// import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import './footer.css'

export const Footer = () => {
  return (
    <div className=" foot">
      <div className="first">
        <p className="foota1">
             © Copyright Finsweet 2022
        </p>

        <p className="foota">
             070 6065 1513
        </p>
        <p className="foota">
             tekobo junction, idi-aba abeokuta
        </p>
        <p className="foota">
            afolabi@example.com
        </p>

      </div>
       <div className="second">
        <h3 className='seconda1'>Quicklinks</h3>

        <p>About us</p>

        <p>Sermons</p>

        <p>Events</p>

        <p>Blog</p>
       </div>
        <div className="third">
          <h3>Connect</h3>
          <p>
            <span>
              <Facebook
              
              />
            </span>
            <span>
              <Instagram/>
            </span>
            <span>
              <Linkedin/>
            </span>
            <span>
              <Youtube/>
            </span>
          </p>
        </div>
         <div className="fourth">
          <h1>Subscribe to get Latest
             Updates and News
          </h1>

          <p>Be the first recieve news of our 
            special offers and promotions
          </p>

          <input type="text" placeholder='Your email@gmail.com' className='txt' />
          
          

           <button>
            Subscribe
          </button>
          
         </div>
    </div>
  );
};
