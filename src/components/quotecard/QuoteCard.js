import React from "react"
import "./QuoteCard.css"

function QuoteCard(props) {
  return (
    <figure className={props.style}>
      <img src={props.url} alt={props.character} />
      <figcaption>
        <blockquote>{props.quote}</blockquote>
        <cite>{props.character}</cite>
      </figcaption>
    </figure>
  )
}

export default QuoteCard
