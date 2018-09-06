import React, { Component } from 'react'
import PropTypes from 'prop-types'

const styles = {
  mainContainer: {
    backgroundColor:'red'
  }}
const GamesContainer = (props) => {
  return <div style={styles.mainContainer}> 
    {props.children}
  </div>
}

GamesContainer.propTypes = {
  children: PropTypes.array
}

export default GamesContainer