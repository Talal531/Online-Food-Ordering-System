import React, {Component} from 'react';
//===================================================================
// CUSTOM COMPONENTS
import FeatureSlider from './featureSlider';
import City from './City';
import QuickBreakfastLunchDinner from './QuickBreakfastLunchDinner';
import Footerr from './footer';

//======================================================================
const City_URL = "http://localhost:3001/home";
//========================== HOME COMPONENT START=======================

class Home extends Component {
    constructor(props) {
        super(props);
          this.state = {
            city: [],
            keywords: ''
    }
    }

    componentDidMount() {
    fetch(City_URL, {method: 'GET'})
      .then(response => response.json())
      .then(json => {
        this.setState({city: json.city})
      })
  }

    render() {
        // console.log(this.props)
        return (
                <div>
                    <FeatureSlider/>
                    <City allCity={this.state.city}/>
                    <QuickBreakfastLunchDinner />
                    <Footerr />
                </div>
        );
    }
}
// =========================HOME COMPONENT END=============================

export default Home;