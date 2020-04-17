import React from 'react'
import Card from './components/card/card.component'
import './app.sass'
import { connect } from 'react-redux'

function App(props) {
  return (
    <div className="container">
      <div className="row">
        {
          props.products.map((item, k) =>
            <div className="col" key={k}>
              <Card
                image={item.image}
                title={item.title}
                subTitle={item.subTitle}
                price={item.price}
                promo={item.promoText}
                item={item}
              />
            </div>
          )
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.products.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer
