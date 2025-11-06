// import React from 'react'
import './card.css'

interface CardData {
  id: number;
  title: string;
  line: string;
  line1: string;
  line2: string;
  buttonText: string;
}

const cards: CardData[] = [
  { id: 1, title: 'Jesus Wants You To Prosper!', line: 'Is It True Jesus Wants Me To Prosper? “YES”', line1: '(Seriously) “Jesus really wants you to prosper”', line2: 'Right ...', buttonText: 'December 13, 2023' },
  { id: 2, title: 'Jesus Wants You To Prosper!', line: 'Is It True Jesus Wants Me To Prosper? “YES”', line1: '(Seriously) “Jesus really wants you to prosper”', line2: 'Right ...', buttonText: 'December 13, 2023' },
  { id: 3, title: 'Jesus Wants You To Prosper!', line: 'Is It True Jesus Wants Me To Prosper? “YES”', line1: '(Seriously) “Jesus really wants you to prosper”', line2: 'Right ...', buttonText: 'December 13, 2023' },
];

const Card = () => {
  return (
    <div>
      <p className="ft">
        READ OUR BLOG
      </p>

      <h1 className="heady">
        SHARE, INSPIRE, INNOVATE
      </h1>

      <div className="conty">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <h1 className="heady">
              {card.title}
            </h1>

            <div className="text">
            <p className='line'>{card.line}</p>
            <p className="line1">{card.line1}</p>
            <p className="line2">{card.line2}</p>
            </div>
            
            <button >
              {card.buttonText}
            </button>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Card
