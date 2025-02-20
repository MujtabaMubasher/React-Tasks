import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import "./App.css";
import Card from "./components/cards/Cards";
const App = () => {
  const cardsData = [
    {
      title: "SEO Optimization",
      description: "We provide top-notch services for all your needs.",
      image: "https://www.techstore.pk/wp-content/uploads/2022/08/isometric-it-people-concept_1284-23188-600x600.webp",
      price:700
    },
    {
      title: "Software Development",
      description: "Bringing innovation to your business.",
      image: "https://www.corporatevision-news.com/wp-content/uploads/2022/04/Software-Development.jpg",
      price:700
    },
    {
      title: "AI Development",
      description: "We are here to support you 24/7.",
      image: "https://osiztechnologiesnew.s3.amazonaws.com/ai-development-company.webp",
      price:700
    },
    {
      title: "Game Development",
      description: "We are here to support you 24/7.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMG0LW5uW3swTY2OURaHV0NbnG61zfOLsevKcbkMIabZ-_bTvWwGXuL4Oj6wEwgxFzijU&usqp=CAU",
      price:700
    }
  ];

  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center">
      <div className="bg-black w-[100%] h-[100vh] rounded-lg ">
         <Navbar/>
         <Hero/>
         <div className="flex gap-10 mt-8">
         {
            cardsData.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} image={card.image} price = {card.price} /> 
            ))
         }
         </div>
         <Footer/>
      </div>
    </div>
  )
};

export default App;
