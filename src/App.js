import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp'
import {valueConditions} from './util/treeConditionals'
import {BrowserRouter , Route} from 'react-router-dom';



/*const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};*/

//let businesses = [business, business, business, business, business, business ];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {businesses: [], loading: false}
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term,location,sortBy){
    //console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`)
    switch(valueConditions(term,location)) {
      
      case 'termTrue_locationTrue':
      this.setState({loading: true})
      Yelp.search(term,location,sortBy).then(businesses => {
        this.setState({
          businesses : businesses,
          loading : false
        });
      })
      .catch(err => {
        this.setState({loading: false})
        console.error(err)
      })
      break;

      case 'termFalse_locationTrue':
      alert('Please provide a Type of Food')
      break;

      case 'termTrue_locationFalse':
      alert('Please provide a Location')
      break;

      case 'termFalse_locationFalse':
      alert('Please provide a Type of Food and a Location')
      break;

      default:

    }
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
  
        <SearchBar searchYelp={this.searchYelp} loading={this.state.loading} />
        <BusinessList businesses={this.state.businesses} /> 
      </div>
    );
  }
}

export default App;
