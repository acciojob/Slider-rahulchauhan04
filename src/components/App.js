import React from 'react';
import "../styles/App.css";
import { useState } from 'react';
import { useEffect } from 'react';



const reviews = [
     {
       id: 1,
       image:
         'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
       name: 'maria ferguson',
       title: 'office manager',
       quote:
         'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
     },
     {
       id: 2,
       image:
         'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
       name: 'john doe',
       title: 'regular guy',
       quote:
         'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
     },
     {
       id: 3,
       image:
         'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
       name: 'peter smith',
       title: 'product designer',
       quote:
         'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
     },
     {
       id: 4,
       image:
         'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
       name: 'susan andersen',
       title: 'the boss',
       quote:
         'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
     },
   ];

function App() {
     const [index, setIndex] = useState(0);

     const prevReview = () => {
          setIndex((prevIndex) => (prevIndex + 1) % reviews.length)        
     }

     const nextReview = () => {
          setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
     }

     useEffect(() => {
          const slider = setInterval(() => {
               nextReview();
          }, 3000)

          return () => clearInterval(slider);
     }, [index])

     const {name, image, title, quote} = reviews[index];


     return (
          <div className= "App" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
               <div id="review-heading">
                    <h1>Reviews</h1>
                    <div id="review-container">
                         <img src={image} alt={name} id={`person-${index}-image`} style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%' }} />
                         <h2 id={`person-${index}`}>{name}</h2>
                         <h4>{title}</h4>
                         <p>{quote}</p>
                    </div>
                    <button className="prev" onClick={prevReview}>Prev</button>
                    <button className="next" onClick={nextReview}>Next</button>
               </div>
          </div>
     )
}

export default App;



