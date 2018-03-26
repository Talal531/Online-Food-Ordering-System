import uuid from 'uuid';

export const addRestaurant = (
  {
    restaurantName = '',
    restaurantAddress = '',
    restaurantNumber = '',
    managerName = '',
    ownerName = '-',
    countary = '',
    options = ['Details', 'Menu', 'Offers', 'Payment Method', 'Order'],
    city = ''
  } = {}
) => ({
  type: 'ADD_RESTAURANT',
  restaurant: {
    id: uuid(),
    restaurantName,
    restaurantAddress,
    restaurantNumber,
    managerName,
    ownerName,
    countary,
    options,
    city
  }
})

export const removeRestaurant = ( { id } = {} ) => ({
  type: 'REMOVE_RESTAURANT',
  id
})
