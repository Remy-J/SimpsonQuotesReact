import React from "react"
import Navbar from "./components/navbar/Navbar"
import QuoteCard from "./components/quotecard/QuoteCard"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteCard
        style="Right"
        character="Neslon Muntz"
        quote="Shoplifting is a victimless crime, like punching someone in the dark."
        url="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
      />
      <QuoteCard
        style="Left"
        character="Abe Simpson"
        quote="Why are you pleople avoiding me? Does my withered face remind you of the grim specter of death?"
        url="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FAbrahamSimpson.png?1497567511593"
      />
      <QuoteCard
        style="Right"
        character="Homer Simpson"
        quote="I hope I didn t brain my damage"
        url="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
      />
    </div>
  )
}

export default App
