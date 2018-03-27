import React from 'react';
import { Divider, Card, Image, Icon, Header, Statistic, Table, Button, Tab, Label, List, Grid} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  return (
    <div>
    <h1>Dashboard</h1>
    <Divider inverted section/>

    <Card.Group itemsPerRow="4">
      <Card color="red" raised>
      <Link to="/users">
        <Card.Content>
          <Header as='h2' icon textAlign='center'>
            <Icon name='users' circular />
            <Card.Header>Users</Card.Header>
            <Header.Subheader>
              <Statistic color='red' inverted>
                <Statistic.Value>27</Statistic.Value>
              </Statistic>
            </Header.Subheader>
          </Header>
        </Card.Content>
        <Card.Content extra ></Card.Content>
        </Link>
      </Card>


      <Card color="brown" raised>
          <Link to="/restaurants">
            <Card.Content>
              <Header as='h2' icon textAlign='center'>
                <Icon name='building outline' circular />
                <Card.Header>Restaurnats</Card.Header>
                <Header.Subheader>
                  <Statistic color='blue' inverted>
                    <Statistic.Value>227</Statistic.Value>
                  </Statistic>
                </Header.Subheader>
              </Header>
            </Card.Content>
          <Card.Content extra ></Card.Content>
        </Link>
      </Card>


      <Card color="red" raised>
      <Link to="/orders">
      <Card.Content>
        <Header as='h2' icon textAlign='center'>
          <Icon name='first order' circular />
          <Card.Header>Orders</Card.Header>
          <Header.Subheader>
            <Statistic color='red' inverted>
              <Statistic.Value>27</Statistic.Value>
            </Statistic>
          </Header.Subheader>
        </Header>
      </Card.Content>
      <Card.Content extra ></Card.Content>
      </Link>
      </Card>



      <Card color="red" raised>
      <Link to="/menu-item">
      <Card.Content>
        <Header as='h2' icon textAlign='center'>
          <Icon name='gift' circular />
          <Card.Header>Menu Item</Card.Header>
          <Header.Subheader>
            <Statistic color='red' inverted>
              <Statistic.Value>267</Statistic.Value>
            </Statistic>
          </Header.Subheader>
        </Header>
      </Card.Content>
      <Card.Content extra ></Card.Content>
      </Link>
      </Card>


      <Card color="red" raised>
      <Link to="/cuisines">
      <Card.Content>
        <Header as='h2' icon textAlign='center'>
          <Icon name='food' circular />
          <Card.Header>Cuisines</Card.Header>
          <Header.Subheader>
            <Statistic color='yellow' inverted>
              <Statistic.Value>427</Statistic.Value>
            </Statistic>
          </Header.Subheader>
        </Header>
      </Card.Content>
      <Card.Content extra ></Card.Content>
      </Link>
      </Card>


      <Card color="red" raised>
      <Link to="/drivers">
      <Card.Content>
        <Header as='h2' icon textAlign='center'>
          <Icon name='motorcycle' circular />
          <Card.Header>Drivers</Card.Header>
          <Header.Subheader>
            <Statistic color='red' inverted>
              <Statistic.Value>13</Statistic.Value>
            </Statistic>
          </Header.Subheader>
        </Header>
      </Card.Content>
      <Card.Content extra ></Card.Content>
      </Link>
      </Card>
    </Card.Group>

    <br/>
    <TabExampleContentShorthand />
    </div>
  )
}
/////////////////////////////////////////////////////////////
const panes2 = [
  {
    menuItem: 'Users',
    pane: (
        <Tab.Pane key='tab4'>
      <Table>
        <Table.Row>
          <Table.Cell>Total Users</Table.Cell>
          <Table.Cell>555</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Active Users</Table.Cell>
          <Table.Cell>555</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Inactive Users Users</Table.Cell>
          <Table.Cell>555</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>User Join this week</Table.Cell>
          <Table.Cell>555</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>User Join this month</Table.Cell>
          <Table.Cell>555</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>User Join this year</Table.Cell>
          <Table.Cell>555</Table.Cell>
        </Table.Row>
      </Table>
        </Tab.Pane>
    )
  },

  {
    menuItem: 'Restaurnats',
    pane: (
        <Tab.Pane key='tab4'>
      <Table>
        <Table.Row>
          <Table.Cell>Total Restaurnats</Table.Cell>
          <Table.Cell>555</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Active Restaurnats</Table.Cell>
          <Table.Cell>555</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Inactive Restaurnats</Table.Cell>
          <Table.Cell>555</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Restaurnats Join this week</Table.Cell>
          <Table.Cell>555</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Restaurnats Join this month</Table.Cell>
          <Table.Cell>555</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Restaurnats Join this year</Table.Cell>
          <Table.Cell>555</Table.Cell>
        </Table.Row>
      </Table>
        </Tab.Pane>
    )
  },

  {
    menuItem: 'Last 10 Orders',
  },
]

const panes = [
  {
    menuItem: 'Today',
    pane: (
      <Tab.Pane key='tab4'>
        <Table>
          <Table.Row>
            <Table.Cell>Today Order</Table.Cell>
            <Table.Cell>456</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Today Sales</Table.Cell>
            <Table.Cell>Rs. $562</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Pending Orders</Table.Cell>
            <Table.Cell>6</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Delivered Order</Table.Cell>
            <Table.Cell>46</Table.Cell>
          </Table.Row>
        </Table>
      </Tab.Pane>
    )
  },

  {
     menuItem: 'Week',
     pane: (
       <Tab.Pane key='tab4'>
         <Table>
           <Table.Row>
             <Table.Cell>Week Order</Table.Cell>
             <Table.Cell>456</Table.Cell>
           </Table.Row>
           <Table.Row>
             <Table.Cell>Week Sales</Table.Cell>
             <Table.Cell>Rs. $4,156</Table.Cell>
           </Table.Row>
           <Table.Row>
             <Table.Cell>Pending Orders</Table.Cell>
             <Table.Cell>14</Table.Cell>
           </Table.Row>
           <Table.Row>
             <Table.Cell>Delivered Order</Table.Cell>
             <Table.Cell>425</Table.Cell>
           </Table.Row>
         </Table>
       </Tab.Pane>
     )
  },

  {
    menuItem: 'Month',
    pane: (
      <Tab.Pane key='tab4'>
        <Table>
          <Table.Row>
            <Table.Cell>Month Order</Table.Cell>
            <Table.Cell>456</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Month Sales</Table.Cell>
            <Table.Cell>Rs. $4162</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Pending Orders</Table.Cell>
            <Table.Cell>46</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Delivered Order</Table.Cell>
            <Table.Cell>556</Table.Cell>
          </Table.Row>
        </Table>
      </Tab.Pane>
    )
  },

  {
    menuItem: 'Year',
    pane: (
      <Tab.Pane key='tab4'>
        <Table>
          <Table.Row>
            <Table.Cell>Year Order</Table.Cell>
            <Table.Cell>456</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Year Sales</Table.Cell>
            <Table.Cell>Rs. $41,562</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Pending Orders</Table.Cell>
            <Table.Cell>456</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Delivered Order</Table.Cell>
            <Table.Cell>4256</Table.Cell>
          </Table.Row>
        </Table>
      </Tab.Pane>
    )
  },
]

const TabExampleContentShorthand = () => (
  <Grid columns='equal'>
    <Grid.Column width={6}>
      <Tab panes={panes} renderActiveOnly={false} />
    </Grid.Column>

    <Grid.Column width={10}>
      <Tab panes={panes2} renderActiveOnly={false} />
    </Grid.Column>
  </Grid>
)
export default Dashboard;
