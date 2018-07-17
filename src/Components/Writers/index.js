import React, { Fragment } from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import Writer from './Writer/index'
import { NotFound } from '../Errors'

export default ({ match: { url }, writers }) => (
  <Fragment>
    <ul>
      {
        writers.map(({ id, name }) => (
          <li key={id}>
            <Link to={`${url}/${id}`}>
              { name }
            </Link>
          </li>
        ))
      }
    </ul>

    <Route path={`${url}/:idWriter`} render={
      props => {
        const writer = writers.find(v => v.id === props.match.params.idWriter)
        if (!writer) {
          return <NotFound />
        }
        return <Writer {...props } writer={writer}/>
      }
    }/>
  </Fragment>
)