import React from 'react';
import { Divider, Card, Image } from 'semantic-ui-react';

const Dashboard = () => {
  return (
    <div>
    <h1>Dashboard</h1>
    <Divider inverted section/>

    <Card.Group itemsPerRow="4">
      <Card color="red" raised>
        <Card.Content>
           <Image floated='right' size='mini' src='https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg' />
          <Card.Header>Restaurants</Card.Header>
        </Card.Content>
        <Card.Content description='Amy is a violinist with 2 years experience in the wedding industry. She enjoys the outdoors and currently resides in upstate New York.'/>
        <Card.Content extra >10 restaurants </Card.Content>
      </Card>

      <Card color="brown" raised>
        <Card.Content>
           <Image floated='right' size='mini' src='https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg' />
          <Card.Header>Restaurants</Card.Header>
        </Card.Content>
        <Card.Content description='Amy is a violinist with 2 years experience in the wedding industry. She enjoys the outdoors and currently resides in upstate New York.'/>
        <Card.Content extra >10 restaurants </Card.Content>
      </Card>

      <Card color="red" raised>
        <Card.Content>
           <Image floated='right' size='mini' src='https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg' />
          <Card.Header>Restaurants</Card.Header>
        </Card.Content>
        <Card.Content description='Amy is a violinist with 2 years experience in the wedding industry. She enjoys the outdoors and currently resides in upstate New York.'/>
        <Card.Content extra >10 restaurants </Card.Content>
      </Card>

      <Card color="red" raised>
        <Card.Content>
           <Image floated='right' size='mini' src='https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg' />
          <Card.Header>Restaurants</Card.Header>
        </Card.Content>
        <Card.Content description='Amy is a violinist with 2 years experience in the wedding industry. She enjoys the outdoors and currently resides in upstate New York.'/>
        <Card.Content extra >10 restaurants </Card.Content>
      </Card>

      <Card color="red" raised>
        <Card.Content>
           <Image floated='right' size='mini' src='https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg' />
          <Card.Header>Restaurants</Card.Header>
        </Card.Content>
        <Card.Content description='Amy is a violinist with 2 years experience in the wedding industry. She enjoys the outdoors and currently resides in upstate New York.'/>
        <Card.Content extra >10 restaurants </Card.Content>
      </Card>

      <Card color="red" raised>
        <Card.Content>
           <Image floated='right' size='mini' src='https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg' />
          <Card.Header>Restaurants</Card.Header>
        </Card.Content>
        <Card.Content description='Amy is a violinist with 2 years experience in the wedding industry. She enjoys the outdoors and currently resides in upstate New York.'/>
        <Card.Content extra >10 restaurants </Card.Content>
      </Card>
    </Card.Group>
    </div>
  )
}

export default Dashboard;
