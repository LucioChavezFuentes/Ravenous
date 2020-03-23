import React from 'react';
import './Business.css';



class Business extends React.Component {
    
    render() {
      //let businessLatitude = this.props.business.latitudeCoordinates
      //let businessLongitude = this.props.business.longitudeCoordinates
      
      let businessSplittedName;
      let businessSplittedAddress;
      let businessMapLocation;
      
      if(this.props.business.name === null){
         businessSplittedName = ''
      } else {
         businessSplittedName = this.props.business.name.split(" ").join("+");
      }
      
      if(this.props.business.address === null){
        businessSplittedAddress = ''
      } else{
        businessSplittedAddress = this.props.business.address.split(" ").join("+")
      }
      
      if(businessSplittedName && businessSplittedAddress ) {
        businessMapLocation = `https://www.google.com/maps/search/?api=1&query=${businessSplittedName}+${businessSplittedAddress}`
      } else {
        businessMapLocation = '';
      }
      
      
       
       return (
        <div className="Business">
        <div className="image-container">
          <a href={businessMapLocation} target='_blank' rel="noopener noreferrer" >
          <img src={this.props.business.img} alt={this.props.business.name}/>
          </a>
        </div>
        <h2><a href={businessMapLocation} target='_blank' rel="noopener noreferrer" >{this.props.business.name}</a> </h2>
        <div className="Business-information">
          <div className="Business-address">
            <p> {this.props.business.address} </p>
            <p> {this.props.business.city}  </p>
            <p>{this.props.business.state + this.props.business.zipCode}  </p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category}  </h3>
            <h3 className="rating">{this.props.business.rating} </h3>
            <p> {this.props.business.reviewCount} </p>
          </div>
        </div>
      </div>
       ) 
    }
};

export default Business;