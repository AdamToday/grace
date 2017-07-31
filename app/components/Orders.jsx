import React, {Component} from 'react'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'

import Accordion from 'react-bootstrap/lib/Accordion'
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import Thumbnail from 'react-bootstrap/lib/Thumbnail'
import Media from 'react-bootstrap/lib/Media'
import Image from 'react-bootstrap/lib/Image'


class Orders extends Component{
  constructor(props){
    super(props);
  }

  render(props){
    return(
      <div className="container">
        <h1>Shopping Cart</h1>
        <hr></hr>
        <div className="col-xs-10">
          {this.props.cart.map(product => {
            return (
              <Accordion>
                <Panel header={product.title} eventKey="2">
                  <Media>
                    <Media.Left>
                      <img width={256} height={256} src={product.imageUrl} alt="Image"/>
                    </Media.Left>
                    <Media.Body>
                      <Media.Heading></Media.Heading>
                        <h3>{product.title}</h3><h4>{product.price}</h4><h5>{product.stock}</h5>
                      <Button bsStyle="warning">Remove From Cart</Button>&nbsp;
                      <NavLink to={``}><Button bsStyle="link">View Details</Button>&nbsp;</NavLink>
                    </Media.Body>
                  </Media>
                </Panel>
              </Accordion>
            )
          })}
        </div>
        <div>
          <Button bsStyle="primary">Check Out</Button>&nbsp;
        </div>
      </div>
    )
  }
}

//CONTAINER

const mapState = (state) => {
  console.log(state)
return {
  cart: state.cart
  }
}

export default connect(mapState, null)(Orders)
