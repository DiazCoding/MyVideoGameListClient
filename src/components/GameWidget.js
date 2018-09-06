import React, { Component } from 'react'
import PropTypes from 'prop-types'

function GameWidget(props) {
  return (
    <div>
      this says something
      <h1>{props.name}</h1>
      <img src = {`${props.cover.table.url}`} />
      <p>{props.summary}</p>
    </div>
  )
}

GameWidget.propTypes = {
  cover: PropTypes.object,
  name: PropTypes.string,
  summary: PropTypes.string,
  storyline: PropTypes.string,
}

export default GameWidget