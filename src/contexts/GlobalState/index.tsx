import * as React from 'react';
import {TGameData} from 'constants/globalTypes';

export const CartContext = React.createContext<any>(null);

const GlobalState = ({children}: {children: React.ReactNode}) => {
  const [cart, setCart] = React.useState([]);

  const addToCart = (item: TGameData) => {
    const modifiedCart = cart as any;
    modifiedCart.push(item);
    console.log('Cart Updated: ', modifiedCart);
    setCart(modifiedCart);
  };

  return (
    <CartContext.Provider value={{addToCart, cart}}>
      {children}
    </CartContext.Provider>
  );
};

export default GlobalState;
