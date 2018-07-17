import React, { Fragment } from 'react'

export default ({writer: {name, description, image}}) =>
  <Fragment>
    <img src={image} alt={name} style={{maxWidth:300}}/>
    <h1>{name}</h1>
    <p>{description}</p>
  </Fragment>