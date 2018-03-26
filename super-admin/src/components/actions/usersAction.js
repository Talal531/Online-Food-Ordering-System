import uuid from 'uuid';


export const addUser = (
    {
        userName = '-',
        emailId = '-',
        phone = '-',
        registerdDate = '-'
    } = {}
) => ({
    type: 'ADD_USER',
    user: {
        id: uuid(),
        userName,
        emailId,
        phone,
        registeredDate: Date(),

    }
})

export const removeUser = ({ id } = {}) => ({
  type: 'REMOVE_USER',
  id
})
