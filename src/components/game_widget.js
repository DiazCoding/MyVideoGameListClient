import React, { Component } from 'react'
import PropTypes from 'prop-types'

function GameWidget({cover: { table: { url }}, name, summary, storyline}) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={url} />
      <h3>{summary}</h3>
      <h4>{storyline}</h4>
    </div>
  )
}

GameWidget.propTypes = {
  cover: PropTypes.object,
  name: PropTypes.string,
  summary: PropTypes.string,
  storyline: PropTypes.string
}


export default GameWidget