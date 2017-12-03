import React, {Component} from 'react';
//===================================================================
// CUSTOM COMPONENTS
import FeatureSlider from './featureSlider';
import City from './City';
import QuickBreakfastLunchDinner from './QuickBreakfastLunchDinner';
import Footerr from './footer';
//======================================================================
//========================== HOME COMPONENT START=======================

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
                <div>
                    <FeatureSlider/>
                    <City/>
                    <QuickBreakfastLunchDinner />
                    <Footerr />
                </div>
        );
    }
}
// =========================HOME COMPONENT END=============================

export default Home;