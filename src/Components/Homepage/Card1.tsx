import React from 'react';
import './Card1.css';

const cards = [
  {
    date: "rsbooster",
    title: "lorem ipsum",
    author: "Shivayogi Lorem",
    tags: ["beem", "tem", "kim"],
    avatar: "/assets/img/faceimg.png",
  },
  {
    date: "rsbooster",
    title: "lorem ipsum",
    author: "Shivayogi Lorem",
    tags: ["beem", "tem", "kim"],
    avatar: "/assets/img/faceimg.png",
  },
  {
    date: "rsbooster",
    title: "lorem ipsum",
    author: "Shivayogi Lorem",
    tags: ["beem", "tem", "kim"],
    avatar: "/assets/img/faceimg.png",
  },
  {
    date: "rsbooster",
    title: "lorem ipsum",
    author: "Shivayogi Lorem",
    tags: ["beem", "tem", "kim"],
    avatar: "/assets/img/faceimg.png",
  },
  {
    date: "rsbooster",
    title: "lorem ipsum",
    author: "Shivayogi Lorem",
    tags: ["beem", "tem", "kim"],
    avatar: "/assets/img/faceimg.png",
  },
  {
    date: "rsbooster",
    title: "lorem ipsum",
    author: "Shivayogi Lorem",
    tags: ["beem", "tem", "kim"],
    avatar: "/assets/img/faceimg.png",
  },
];

const CardList: React.FC = () => {
  return (
    <section className="card-list font-serif">
      {cards.map((card, index) => (
        <article className="card" key={index}>
          <header className="card-header">
            <p>{card.date}</p>
            <h2>{card.title}</h2>
          </header>

          <div className="card-author">
            <a className="author-avatar" href="#">
              <img src={card.avatar} alt="Author Avatar" />
            </a>
            <svg className="half-circle" viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div className="author-name">
              <div className="author-name-prefix">Author</div>
              {card.author}
            </div>
          </div>

          <div className="tags">
            {card.tags.map((tag, tagIndex) => (
              <a href="#" key={tagIndex}>{tag}</a>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};

export default CardList;
