import { createStore,action } from 'easy-peasy';


export const store = createStore({
    products: [],
  addTodo: action((state:any, payload:any) => {
    state.products.push({ name: payload.name, price: payload.price, image:payload.image });
  }),
  
});