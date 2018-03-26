import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Icon } from 'semantic-ui-react'
import  { Link } from 'react-router-dom';
// import Routing from '../routing/index';

class SidebarLeftPush extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
      <div>
        { (!visible)
          ? <Button icon="sidebar" color= 'green' onClick={this.toggleVisibility} />
          : <Button icon="remove" color= 'green' onClick={this.toggleVisibility} />
        }
      </div>
      <div style={{ height: '100vh' }}>
        <Sidebar.Pushable as={Segment} >
          <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Link to="/dashboard" >
              <Menu.Item name='dashboard'>
                <Icon name='dashboard' />
                  Dashboard
                </Menu.Item>
            </Link>

            <Link to="/admins" >
            <Menu.Item name='admins'>
              <Icon name='male' />
              Admins
            </Menu.Item>
            </Link>

            <Link to="/restaurants" >
            <Menu.Item name='restaurants'>
              <Icon name='food' />
              Restaurants
            </Menu.Item>
            </Link>

            <Link to="/orders" >
            <Menu.Item name='orders'>
              <Icon name='food' />
              Orders
            </Menu.Item>
            </Link>

            <Menu.Item name='cuisines'>
              <Icon name='food' />
              Cuisines
            </Menu.Item>
            <Menu.Item name='users'>
              <Icon name='users' />
              Users
            </Menu.Item>
            <Menu.Item name='category'>
              <Icon name='tags' />
              Category
            </Menu.Item>
            <Menu.Item name='coupans'>
              <Icon name='camera' />
              Coupans
            </Menu.Item>
            <Menu.Item name='reports'>
              <Icon name='camera' />
              Reports
            </Menu.Item>
            <Menu.Item name='settings'>
              <Icon name='settings' />
              Settings
            </Menu.Item>
            <Menu.Item name='logout'>
              <Icon name='log out' />
              Logout
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              hello
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
      </div>
    )
  }
}

export default SidebarLeftPush
