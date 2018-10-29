import React, { Component } from 'react';

class ShopItem extends Component {
  render() {
    //If on sale, assign pricing spans for css
    let salePrice = this.props.salePrice;
    let pricing = <span className="basePrice">${this.props.basePrice}</span>;
    if (salePrice != "") {
      pricing = <div><span className="baseSale">${this.props.basePrice}</span>
      <span className="salePrice">${this.props.salePrice}</span></div>
    }

    //Assign rating image based on rating
    let ratingImg;
    let altRating = "Item rating";
    let rating = this.props.rating;
    if (rating == 5) {
      ratingImg = "../images/rating5.png";
      altRating = "5 star rating";
    }
    else if (rating >= 4.5) {
      ratingImg = "../images/rating45.png";
      altRating = "4.5 star rating";
    }
    else if (rating >= 4.0) {
      ratingImg = "../images/rating4.png";
      altRating = "4 star rating";
    }
    else if (rating >= 3.5) {
      ratingImg = "../images/rating35.png";
      altRating = "3.5 star rating";
    }
    else if (rating >= 3.0) {
      ratingImg = "../images/rating3.png";
      altRating = "3 star rating";
    }
    else if (rating >= 2.5) {
      ratingImg = "../images/rating25.png";
      altRating = "2.5 star rating";
    }
    else if (rating >= 2.0) {
      ratingImg = "../images/rating2.png";
      altRating = "2 star rating";
    }
    else if (rating >= 1.5) {
      ratingImg = "../images/rating15.png";
      altRating = "1.5 star rating";
    }
    else if (rating >= 1.0) {
      ratingImg = "../images/rating1.png";
      altRating = "1 star rating";
    }
    else if (rating >= 0.5) {
      ratingImg = "../images/rating05.png";
      altRating = "0.5 star rating";
    }
    else {
      ratingImg = "../images/rating0.png";
      altRating = "Less than 0.5 star rating";
    }
    let displayBadge = "";
    if (this.props.badge != "") {
      displayBadge = <h3 className="badge">{this.props.badge}</h3>;
    }
    return (
      <div className="ShopItem">
        {displayBadge}
        <h3 className="itemName">{this.props.name}</h3>
        <div className="productImgContainer">
        <img src="../images/tvimg.png" alt="Television" />
        </div>
        <div className="pricing">
        {pricing}
        </div>
        <div className="ratings">
        <img src={ratingImg} alt={altRating} /> <span className="textRating">{rating}</span>
        </div>
        <div className="buyNow">
        <h3 className="buyButton" onClick={() => this.props.addItem(this.props.name, this.props.index)}>Add to Cart</h3>
        </div>
      </div>
    );
  }
}

export default ShopItem;
