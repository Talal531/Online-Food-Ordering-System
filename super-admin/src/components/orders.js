import React from 'react';
import { Divider, Dropdown, Grid, Icon, Table, Button, Input } from 'semantic-ui-react';

const options = [
  { key: 1, text: 'One', value: 1 },
  { key: 2, text: 'Two', value: 2 },
  { key: 3, text: 'Three', value: 3 },
]

const Orders = () => {
  return (
    <div>
    <h1>Orders</h1>
    <Divider inverted section/>
    <Grid columns={3} style={{marginRight:'10px'}}>
        <Grid.Column>
        <label>Select Restaurant Name: </label>
          <Dropdown
            //onChange={this.handleChange}
            options={options}
            placeholder='Search by restaurant name'
            selection
            //value={value}
            fluid
          />
        </Grid.Column>
        <Grid.Column>
        <label>Sort By Status: </label>
        <Dropdown
          //onChange={this.handleChange}
          options={options}
          placeholder='Sort by'
          selection
          //value={value}
          fluid
        />
        </Grid.Column>
        <Grid.Column>
        <label>Sort By: </label>
        <Dropdown
          //onChange={this.handleChange}
          options={options}
          placeholder='Sort by'
          selection
          //value={value}
          fluid
        />
        </Grid.Column>
      </Grid>
      <br />
          <div>
            <Input icon='search' placeholder='Search...' size='large' style={{width: '85%'}} /> &nbsp;
            <Button content='Search' color='green' size='large' />
          </div>

      <Divider style={{backgroundColor: '#ccc', height: '30px',  marginRight: '10px'}} />

      <div style={{marginRight:'10px'}}>
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell rowSpan='2'>Id</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Order No</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Restaurant Name</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Delivery/Pickup date</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Check Date</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Finish Date</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Order Price</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Order Type</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Customer Email</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Invoice PDF</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Order Status</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Order Date & Time</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
     <Table.Row>
       <Table.Cell>1</Table.Cell>
       <Table.Cell>ORD721</Table.Cell>
       <Table.Cell>Restaurant 1</Table.Cell>
       <Table.Cell>31 Oct, 2017 ASAP</Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell>Rs.200</Table.Cell>
       <Table.Cell>Delivery</Table.Cell>
       <Table.Cell>abc@gmail.com</Table.Cell>
       <Table.Cell>Invoice PDF</Table.Cell>
       <Table.Cell>
        <Dropdown placeholder='Status' compact selection options={options} />
       </Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell>
        <Icon name='edit' size='large'/>
        <Icon name='delete' size='large' color='red'/>
       </Table.Cell>
     </Table.Row>
     <Table.Row>
       <Table.Cell>2</Table.Cell>
       <Table.Cell>ORD722</Table.Cell>
       <Table.Cell>Restaurant 3</Table.Cell>
       <Table.Cell>31 Oct, 2017 ASAP</Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell>Rs.240</Table.Cell>
       <Table.Cell>Delivery</Table.Cell>
       <Table.Cell>abc@gmail.com</Table.Cell>
       <Table.Cell>Invoice PDF</Table.Cell>
       <Table.Cell>
        <Dropdown placeholder='Status' compact selection options={options} />
       </Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell>
        <Icon name='edit' size='large'/>
        <Icon name='delete' size='large' color='red'/>
       </Table.Cell>
     </Table.Row>
     <Table.Row>
       <Table.Cell>3</Table.Cell>
       <Table.Cell>ORD723</Table.Cell>
       <Table.Cell>Restaurant 5</Table.Cell>
       <Table.Cell>31 Oct, 2017 ASAP</Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell>Rs.2030</Table.Cell>
       <Table.Cell>Delivery</Table.Cell>
       <Table.Cell>abc@gmail.com</Table.Cell>
       <Table.Cell>Invoice PDF</Table.Cell>
       <Table.Cell>
        <Dropdown placeholder='Status' compact selection options={options} />
       </Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell>
        <Icon name='edit' size='large'/>
        <Icon name='delete' size='large' color='red'/>
       </Table.Cell>
     </Table.Row>
     <Table.Row>
       <Table.Cell>4</Table.Cell>
       <Table.Cell>ORD724</Table.Cell>
       <Table.Cell>Restaurant 2</Table.Cell>
       <Table.Cell>31 Oct, 2017 ASAP</Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell>Rs.500</Table.Cell>
       <Table.Cell>Delivery</Table.Cell>
       <Table.Cell>abc@gmail.com</Table.Cell>
       <Table.Cell>Invoice PDF</Table.Cell>
       <Table.Cell>
        <Dropdown placeholder='Status' compact selection options={options} />
       </Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell>
        <Icon name='edit' size='large'/>
        <Icon name='delete' size='large' color='red'/>
       </Table.Cell>
     </Table.Row>
     <Table.Row>
       <Table.Cell>5</Table.Cell>
       <Table.Cell>ORD725</Table.Cell>
       <Table.Cell>Restaurant 2</Table.Cell>
       <Table.Cell>31 Oct, 2017 ASAP</Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell>Rs.2050</Table.Cell>
       <Table.Cell>Delivery</Table.Cell>
       <Table.Cell>abc@gmail.com</Table.Cell>
       <Table.Cell>Invoice PDF</Table.Cell>
       <Table.Cell>
        <Dropdown placeholder='Status' compact selection options={options} />
       </Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell>
        <Icon name='edit' size='large'/>
        <Icon name='delete' size='large' color='red'/>
       </Table.Cell>
     </Table.Row>
     <Table.Row>
       <Table.Cell>6</Table.Cell>
       <Table.Cell>ORD726</Table.Cell>
       <Table.Cell>Restaurant 1</Table.Cell>
       <Table.Cell>31 Oct, 2017 ASAP</Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell>Rs.300</Table.Cell>
       <Table.Cell>Delivery</Table.Cell>
       <Table.Cell>abc@gmail.com</Table.Cell>
       <Table.Cell>Invoice PDF</Table.Cell>
       <Table.Cell>
        <Dropdown placeholder='Status' compact selection options={options} />
       </Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell>
        <Icon name='edit' size='large'/>
        <Icon name='delete' size='large' color='red'/>
       </Table.Cell>
     </Table.Row>
     <Table.Row>
       <Table.Cell>7</Table.Cell>
       <Table.Cell>ORD727</Table.Cell>
       <Table.Cell>Restaurant 1</Table.Cell>
       <Table.Cell>31 Oct, 2017 ASAP</Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell>Rs.3060</Table.Cell>
       <Table.Cell>Delivery</Table.Cell>
       <Table.Cell>abc@gmail.com</Table.Cell>
       <Table.Cell>Invoice PDF</Table.Cell>
       <Table.Cell>
        <Dropdown placeholder='Status' compact selection options={options} />
       </Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell>
        <Icon name='edit' size='large'/>
        <Icon name='delete' size='large' color='red'/>
       </Table.Cell>
     </Table.Row>
     <Table.Row>
       <Table.Cell>8</Table.Cell>
       <Table.Cell>ORD728</Table.Cell>
       <Table.Cell>Restaurant 4</Table.Cell>
       <Table.Cell>31 Oct, 2017 ASAP</Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell>Rs.800</Table.Cell>
       <Table.Cell>Delivery</Table.Cell>
       <Table.Cell>abc@gmail.com</Table.Cell>
       <Table.Cell>Invoice PDF</Table.Cell>
       <Table.Cell>
        <Dropdown placeholder='Status' compact selection options={options} />
       </Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell>
        <Icon name='edit' size='large'/>
        <Icon name='delete' size='large' color='red'/>
       </Table.Cell>
     </Table.Row>
     <Table.Row>
       <Table.Cell>9</Table.Cell>
       <Table.Cell>ORD729</Table.Cell>
       <Table.Cell>Restaurant 1</Table.Cell>
       <Table.Cell>31 Oct, 2017 ASAP</Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell>Rs.700</Table.Cell>
       <Table.Cell>Delivery</Table.Cell>
       <Table.Cell>abc@gmail.com</Table.Cell>
       <Table.Cell>Invoice PDF</Table.Cell>
       <Table.Cell>
        <Dropdown placeholder='Status' compact selection options={options} />
       </Table.Cell>
       <Table.Cell></Table.Cell>
       <Table.Cell>
        <Icon name='edit' size='large'/>
        <Icon name='delete' size='large' color='red'/>
       </Table.Cell>
     </Table.Row>

   </Table.Body>
      </Table>
      </div>
    </div>
  )
}

export default Orders;
