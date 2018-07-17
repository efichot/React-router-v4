import React, { Component, Fragment } from 'react'
import { BrowserRouter, Link , Route, Switch } from 'react-router-dom'
import Writers from './Writers/index'
import { NotFound } from './Errors'

export default class extends Component {
  state = {
    writers: [],
  }

  async componentDidMount() {
    const writers = await (await fetch('http://localhost:3004/writers?_embed=texts')).json()
    this.setState({ writers })
  }

  render() {
    const { writers } = this.state

    return (
      <BrowserRouter>
        <Fragment>
          <ul>
            <li>
              <Link to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/writers'>
                Writers
              </Link>
            </li>
          </ul>

          <Switch>
            <Route exact path='/' render={() => <div>Home</div>}/>
            <Route path='/writers' render={
              props => <Writers {...props} writers={writers}/>
            }/>
            <Route render={() => <NotFound />}/>
          </Switch>
        </Fragment>
      </BrowserRouter>
    )
  }
}
