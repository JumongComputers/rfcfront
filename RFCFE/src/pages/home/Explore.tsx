// import React from 'react'
import { Share2, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './explore.css'

interface CardiData {
  id: number;
  title: string;
  line: string;
  line1: string;
  line3: string;
  downloadUrl: string;
  shareUrl: string;
  imgUrl: string;
}

const cards: CardiData[] = [
  { id: 1, title: 'LEADERS of Tomorrow', line: 'Sofia Martinez', line1: '(Seriously) “Jesus really wants you to prosper”', 
    
    line3: "Praesent tincidunt odio sit amet arcu pellentesque, vitae efficitur nunc iaculis. Mauris vitae varius risus.",
    downloadUrl: '/files/leaders-of-tomorrow.pdf',
    shareUrl: '/share/leaders-of-tomorrow-1',
    imgUrl: './images/Image.png'

  },
  { id: 2, title: 'LEADERS of Tomorrow', line: 'Sofia Martinez', line1: '(Seriously) “Jesus really wants you to prosper”', 
    
    line3: "Praesent tincidunt odio sit amet arcu pellentesque, vitae efficitur nunc iaculis. Mauris vitae varius risus.",
    downloadUrl: '/files/resource-2.pdf',
    shareUrl: '/share/leaders-of-tomorrow-2',
    imgUrl: './images/Image.png'
  },
  { id: 3, title: 'LEADERS of Tomorrow', line: 'Sofia Martinez', line1: '(Seriously) “Jesus really wants you to prosper”', 
    
    line3: "Praesent tincidunt odio sit amet arcu pellentesque, vitae efficitur nunc iaculis. Mauris vitae varius risus.",
    downloadUrl: '/files/another-resource.pdf',
    shareUrl: '/share/another-resource-3',
    imgUrl: './images/Image.png'
  },
   { id: 3, title: 'LEADERS of Tomorrow', line: 'Sofia Martinez', line1: '(Seriously) “Jesus really wants you to prosper”', 
    
    line3: "Praesent tincidunt odio sit amet arcu pellentesque, vitae efficitur nunc iaculis. Mauris vitae varius risus.",
    downloadUrl: '/files/another-resource.pdf',
    shareUrl: '/share/another-resource-3',
    imgUrl: './images/Image.png'
  },
   { id: 3, title: 'LEADERS of Tomorrow', line: 'Sofia Martinez', line1: '(Seriously) “Jesus really wants you to prosper”', 
    
    line3: "Praesent tincidunt odio sit amet arcu pellentesque, vitae efficitur nunc iaculis. Mauris vitae varius risus.",
    downloadUrl: '/files/another-resource.pdf',
    shareUrl: '/share/another-resource-3',
    imgUrl: './images/Image.png'
  },
   { id: 3, title: 'LEADERS of Tomorrow', line: 'Sofia Martinez', line1: '(Seriously) “Jesus really wants you to prosper”', 
    
    line3: "Praesent tincidunt odio sit amet arcu pellentesque, vitae efficitur nunc iaculis. Mauris vitae varius risus.",
    downloadUrl: '/files/another-resource.pdf',
    shareUrl: '/share/another-resource-3',
    imgUrl: './images/Image.png'
  },
];


const Explore = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="exp">
        <div className="mainy">
          <div className="eplore">
            <h1>
            Explore
        </h1>

        <hr/>
          </div>

          <div className="expcont">
                <div className="menus">
            <div className="event">Events</div>
            <div className="library">library</div>
            <div className="live">Livestreams</div>
          </div>

          
           <div className="contia">
            <p className="a">
              Recommended Books
            </p>

            <p className="b">
              GO TO E-LIBRARY
            </p>
           </div>
          <div className="cardil">
               {cards.map((card) => (
          <div key={card.id} className="cardo">
            <div className="a">
              <img src="./images/Image.png" alt="Expected image" />
            </div>
            <div className="b">
              <h1 className="headya">
              {card.title}
            </h1>

            <div className="pack">
            
            <p className='line0'>{card.line}</p>
            <p className="line1">{card.line1}</p>
            <p className="line2">{card.line3}</p>
            
            </div>
            
            <div className="lower">  
              <a href={card.downloadUrl} download className="btn1-link">
                <button className="btn1" >
                  Download
                  <Download size={'20px'} />
                </button>
              </a>
              <button className="share-btn" onClick={() => navigate(card.shareUrl)}>
                <Share2 size={'20px'} />
              </button>
            </div>
            </div>
            
          </div>
        ))}
          </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Explore
