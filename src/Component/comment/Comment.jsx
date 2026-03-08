import { IoPerson } from "react-icons/io5";

import "./comment.css";
import { useState, useEffect, useRef } from "react";

export default function Comment() {
  const cards = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus laudantium dolorum ipsum assumenda",
      text: "Prabhakar",
      img: <IoPerson />
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus laudantium dolorum ipsum assumenda",
      text: "Sabir",
      img: <IoPerson />
    },
    {
      id: 3,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus laudantium dolorum ipsum assumenda",
      text: "Sachin",
      img: <IoPerson />
    },
    {
      id: 4,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus laudantium dolorum ipsum assumenda",
      text: "Dilshad",
      img: <IoPerson />
    },
    {
      id: 5,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus laudantium dolorum ipsum assumenda",
      text: "Prabhakar",
      img: <IoPerson />
    },
    {
      id: 6,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus laudantium dolorum ipsum assumenda",
      text: "Dilshad",
      img: <IoPerson />
    },
    {
      id: 7,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus laudantium dolorum ipsum assumenda",
      text: "Prabhakar",
      img: <IoPerson />
    },
    {
      id: 8,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus laudantium dolorum ipsum assumenda",
      text: "Sabir",
      img: <IoPerson />
    },
    {
      id: 9,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus laudantium dolorum ipsum assumenda",
      text: "Sabir",
      img: <IoPerson />
    }
  ];

  const VISIBLE_COUNT = 3;
  const GAP = 20;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const timeoutRef = useRef(null);

  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(360);
  const [, setGroupWidth] = useState(
    cardWidth * VISIBLE_COUNT + GAP * (VISIBLE_COUNT - 1)
  );

  useEffect(() => {
    const measure = () => {
      if (cardRef.current) {
        const w = Math.round(cardRef.current.getBoundingClientRect().width);
        setCardWidth(w);
        setGroupWidth(w * VISIBLE_COUNT + GAP * (VISIBLE_COUNT - 1));
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // الانتقال التلقائي بطاقة بطاقة
  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) =>
          prev < cards.length - VISIBLE_COUNT ? prev + 1 : 0
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [autoPlay, cards.length]);

  // الضغط على نقطة: الانتقال لبطاقة محددة وإيقاف التشغيل 60 ثانية
  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setAutoPlay(false);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setAutoPlay(true), 5000);
  };

  // عدد النقاط = عدد البطاقات
  const totalDots = cards.length - 2;

  return (
    <div className="Box">
      <div className="continer continerComment">
        <div className="slider-container">
          <h2 className="Title-slider-container">Comments</h2>
          <div
            className="slider-wrapper"
            style={{
              transform: `translateX(-${currentIndex * (cardWidth + GAP)}px)`
            }}
          >
            {cards.map((card, idx) => (
              <div
                key={card.id}
                className="card"
                ref={idx === 0 ? cardRef : null}
              >
                <h2 className="imgCard">{card.img}</h2>
                <h3 className="titleCard">{card.title}</h3>
                <p className="textCard">{card.text}</p>
              </div>
            ))}
          </div>

          <div className="dots">
            {Array.from({ length: totalDots }).map((_, i) => (
              <span
                key={i}
                className={`dot ${currentIndex === i ? "active" : ""}`}
                onClick={() => handleDotClick(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
