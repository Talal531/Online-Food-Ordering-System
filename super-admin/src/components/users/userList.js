import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import TableHeader from './tableHeader';
import User from './user';

const UserList = (props) => {
    return (
        <div style={{marginRight:'10px'}}>
            <h1>Users: </h1>

            <Table celled striped textAlign="center">
                <TableHeader {...props.users[0]}/>
                <Table.Body>
                    {props.users.map((user, index) => {
                        return <User key={user.id} {...user} serialNo={index+1}/>
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
    }
}
export default connect(mapStateToProps)(UserList);
