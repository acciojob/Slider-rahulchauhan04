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
          <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1 id="review-heading" style={{ marginBottom: '20px', color: '#007bff' }}>Reviews</h1>
            <div id="review-container" style={{ width: '300px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', backgroundColor: '#fff', textAlign: 'center' }}>
              <div className="review">
                <img src={image} alt={name} id={`person-${index}-image`} style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%', marginBottom: '15px' }} />
                <h2 id={`person-${index}`} style={{ marginBottom: '10px' }}>{name}</h2>
                <h4 style={{ marginBottom: '15px', fontWeight: 'bold', color: '#333' }}>{title}</h4>
                <p style={{ fontStyle: 'italic', color: '#555' }}>{quote}</p>
              </div>
              <div className="buttons" style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                <button className="prev" onClick={prevReview} style={{ padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer', backgroundColor: '#007bff', color: '#fff' }}>Previous</button>
                <button className="next" onClick={nextReview} style={{ padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer', backgroundColor: '#007bff', color: '#fff' }}>Next</button>
              </div>
            </div>
          </div>
        );
}

export default App;



