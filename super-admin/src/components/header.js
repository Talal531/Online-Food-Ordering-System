import React from 'react';
import { Header, Segment, Icon } from 'semantic-ui-react';

const HeaderBar = () => {
  return (
    <Segment clearing inverted>
        <Header as='h2' color='green' floated='left' style={{fontFamily: 'Monoton'}}>
          FoodMasty
        </Header>
        <Header floated='right'>
          <Icon name="sign out" />
        </Header>
      </Segment>
  )
}

export default HeaderBar;
