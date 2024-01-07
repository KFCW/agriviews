import './style.css'
import { TiMessages } from "react-icons/ti";
import { useState } from 'react';




interface FeedData {
  name: string
  date : number,
  image : string,
  message: string,
}

const DataFeedsFormat:FeedData[] = [
  {
    name: "John Doe",
    date: 1640976000, // Example date (UNIX timestamp)
    image: "https://example.com/john-doe.jpg",
    message: "Hello, this is a sample message!",
  },
  {
    name: "Jane Smith",
    date: 1641062400, // Example date (UNIX timestamp)
    image: "https://example.com/jane-smith.jpg",
    message: "A great day spent outdoors!",
  },
  {
    name: "Alice Johnson",
    date: 1641148800, // Example date (UNIX timestamp)
    image: "https://example.com/alice-johnson.jpg",
    message: "Enjoying the sunset by the beach.",
  },
  {
    name: "Bob Anderson",
    date: 1641235200, // Example date (UNIX timestamp)
    image: "https://example.com/bob-anderson.jpg",
    message: "Exploring new places and making memories.",
  },
  {
    name: "Eva Williams",
    date: 1641321600, // Example date (UNIX timestamp)
    image: "https://example.com/eva-williams.jpg",
    message: "Good times with good friends!",
  },
  {
    name: "David Brown",
    date: 1641408000, // Example date (UNIX timestamp)
    image: "https://example.com/david-brown.jpg",
    message: "Chasing dreams and achieving goals.",
  },
  {
    name: "Sophie Taylor",
    date: 1641494400, // Example date (UNIX timestamp)
    image: "https://example.com/sophie-taylor.jpg",
    message: "Nature walks and tranquility.",
  },
  {
    name: "Alex Carter",
    date: 1641580800, // Example date (UNIX timestamp)
    image: "https://example.com/alex-carter.jpg",
    message: "Culinary adventures in the city.",
  },
  {
    name: "Grace Evans",
    date: 1641667200, // Example date (UNIX timestamp)
    image: "https://example.com/grace-evans.jpg",
    message: "Celebrating life's little victories.",
  },
  {
    name: "Michael White",
    date: 1641753600, // Example date (UNIX timestamp)
    image: "https://example.com/michael-white.jpg",
    message: "Weekend vibes and relaxation.",
  },
]

const DashFeedback = () => {

  const [showAll, setShowAll] = useState<boolean>(false);
  const initialItemsToShow = 3;
  const itemsToShow = showAll ? DataFeedsFormat.length : initialItemsToShow;

  return (
    <div className="container__feeds">
      <div className="head__feed">
        <p className="feed__title">Feedbacks</p>
        <div className="num_f">
        <TiMessages />
          <span>20</span>
        </div>
      </div>
        <section className="body__feed">
        {
          DataFeedsFormat.slice(0, itemsToShow).map( (item, index ) => (
            <ul className="feedbackslist">
              <li key={index}>
                <div className="list__feeds">
                  <img src={item.image} alt="l'image du client" />
                  <div className="info__client">
                    <h4>{item.name}</h4>
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                    <p>{item.message}</p>
                  </div>
                </div>
              </li>
            </ul>
          ) ) 
        }
        </section>
        <button className='feedbtn__backs' type='button' onClick={() => setShowAll(!showAll)}>
          {showAll ? "Réduire" : "Voir plus de feedbacks"}
        </button>
        <div className="chart-container">
      </div>
    </div>
  )
}

export default DashFeedback
