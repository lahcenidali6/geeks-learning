import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // required CSS
import { Carousel } from 'react-responsive-carousel';
import './App.css';

function App() {
  return (
   <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <Carousel
        showArrows={true}
        showThumbs={true}    
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showStatus={false}
        thumbWidth={80}    
        dynamicHeight={false}
      >
        <div>
          <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg"  />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" />
          <p className="legend">Macao</p>
        </div>
        <div>
          <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" alt="Slide 3" />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt="Slide 3" />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
