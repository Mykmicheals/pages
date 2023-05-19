# To run the project

-  On the terminal run the command

## `git clone https://github.com/Mykmicheals/pages.git `

Navigate to the project directory, and run:

 `cd pages `


 # Project Structure

- `src/`: Source code directory
  - `modals/`: React components directory
      - `AddProductModals.js`: Modal to add products
      - `DeleteProductModal.js`: Modals to deleteProduct
      - `SearchComponent.tsx`: Searchbar component 
      - `ModalContainer.tsx` : ModalContainer
  - `Screens/`: React pages directory
      - `HomeScreen.tsx`: HomeScreen to add product
      - `ProuctScreen`: Contains screens for all products
 
    - `appTypes`: The entire types (typescript) for the project

- `package.json`: NPM package configuration file
- `README.md`: Project README file

 Install all depenecies using :

` yarn install `

Run the app using the command

` yarn start `



- Runs the app in the development mode.\
- Open [React native setup](https://reactnative.dev/docs/environment-setup) to see guidelines to setup react native on your local maching.

The app will reload if you make edits.\
You will also see any lint errors in the console.




## The HomeScreen



### The AddProductModal



### The ProductScreen 



### The DeleteModal




## The App Store


```

import { createStore,action } from 'easy-peasy';
import { Product} from '../appTypes';


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


```

### Select Image functionality

```
  const selectImage = async () => {
    try {
      const result: any = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.cancelled) {
        setSelectedImage(result.uri);
        setErr(null);
      }
    } catch (error) {
      console.log('Error selecting image:', error);
    }
  };

```


