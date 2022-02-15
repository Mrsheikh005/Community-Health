import StarRating from 'react-native-star-rating';
import React, { Component } from 'react';
class RatingStars extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  render() {
    return (
      <StarRating
        starSize={18}
        maxStars={5}
        starStyle={{paddingHorizontal:3}}
        fullStarColor={'gold'}
        rating={this.state.starCount}
        selectedStar={(rating) =>this.onStarRatingPress(rating)}
       
      />
    );
  }
}

export default RatingStars;