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

<img width="423" alt="Screen Shot 2023-05-19 at 9 49 28 AM" src="https://github.com/Mykmicheals/pages/assets/88559940/9785bbb5-f4c4-4230-b98c-f5a380619aa9">


### The AddProductModal


<img width="423" alt="Screen Shot 2023-05-19 at 9 50 38 AM" src="https://github.com/Mykmicheals/pages/assets/88559940/337b4f13-b061-4383-a55f-c5a6a740bae6">


### The ProductScreen 


<img width="423" alt="Screen Shot 2023-05-19 at 9 57 08 AM" src="https://github.com/Mykmicheals/pages/assets/88559940/5cf51c0d-4a90-4b8a-81b2-03dfd26baf08">

### The DeleteModal


<img width="423" alt="Screen Shot 2023-05-19 at 9 58 39 AM" src="https://github.com/Mykmicheals/pages/assets/88559940/5fe9b00f-8496-4a55-87cb-668aa3d26b47">

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


