export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'addtocart':
      // Check if the item is already in the cart
      const existingItem = state.find(item => item.id === action.product.id);
      if (existingItem) {
        return state; // If already in the cart, return the current state
      }
      // If not in the cart, add the new product
      return [...state, action.product];

    case 'removefromcart':
      // Filter out the product to be removed
      return state.filter(item => item.id !== action.id);

    default:
      return state;
  }
};
