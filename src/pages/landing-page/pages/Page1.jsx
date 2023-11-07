import "./pages.scss";
import { useEffect } from "react";

//Pages
import Header from "../header/Header";
import Bar1 from '../prison/Bar 1.png';
import Bar2 from '../prison/Bar 2.png';
import Bar3 from '../prison/Bar 3.png';
import Bar4 from '../prison/Bar 4.png';
import Bar5 from '../prison/Bar 5.png';
import Bar6 from '../prison/Bar 6.png';
import Left from '../prison/Left Hand.png';
import Right from '../prison/Right Hand.png';

const Page1 = () => {

  useEffect(() => {
    const bars = document.querySelectorAll('.Prison-Bar');
    const handleScroll = () => {
        bars.forEach((bar) => {
            const scrollOffset = window.scrollY;
            const speed = 0.5; 
            const yPos = -(scrollOffset * speed);
            bar.style.transform = `translateY(${yPos}px)`;
        });
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <div className="Page1">
      <Header />
      <div className="Parallax-Container">
        <div className="Prison-Bar Bar-1">
          <img src={Bar1} alt="prison bars" />
        </div>
        <div className="Prison-Bar Bar-2">
          <img src={Bar2} className="B2" alt="prison bars" />
          <img src={Left} className="LH" alt="Left Hand" />
        </div>
        <div className="Prison-Bar Bar-3">
          <img src={Bar3} alt="prison bars" />
        </div>
        <div className="Prison-Bar Bar-4">
          <img src={Bar4} alt="prison bars" />
          <img src={Right} className="RH" alt="Right Hand" />
        </div>
        <div className="Prison-Bar Bar-5">
          <img src={Bar5} alt="prison bars" />
        </div>
        <div className="Prison-Bar Bar-6">
          <img src={Bar6} alt="prison bars" />
        </div>
      </div>
      <div className="Logo">
        <h1>
          <span className="S">S</span>urveillance <span className="B">B</span>
          ureau
        </h1>
      </div>
    </div>
  );
};

export default Page1;
