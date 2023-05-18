import { createStore,action } from 'easy-peasy';


export const store = createStore({
    products: [],
  addTodo: action((state:any, payload:any) => {
    state.products.push({id:payload.id, name: payload.name, price: payload.price, image:payload.image });
  }),
  removeProuct: action((state:any, payload:any) => {
     const index = state.products.findIndex((product:any) => product.id === payload.id);
      state.products.splice(index, 1);
  })
});