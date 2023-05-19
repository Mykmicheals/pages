import { createStore,action } from 'easy-peasy';
import { Product, productsType } from '../appTypes';


export const store = createStore({
    products: [],
  addTodo: action((state:any, payload:Product) => {
    state.products.push({id:payload.id, name: payload.name, price: payload.price, image:payload.image });
  }),
  removeProuct: action((state:any, payload:Product) => {
     const index = state.products.findIndex((product:Product) => product.id === payload.id);
      state.products.splice(index, 1);
  })
});