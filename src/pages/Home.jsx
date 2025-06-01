import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EmailForm from "../components/EmailForm";
import MovieRow from "../components/MovieRow";
import Footer from "../components/Footer";
import ReasonsToJoin from "../components/ReasonToJoin";
import Question from "../components/Question";

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
    
      <MovieRow title="Trending Now" />

      <ReasonsToJoin/>
      <Question/>
        <EmailForm />
      <Footer />
    </div>
  );
};

export default Home 