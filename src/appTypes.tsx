export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface productsType {
  products: Product[];
}

export interface AddProductTypes {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface RemoveProductPayload {
  id: string;
}

export interface AddProductModalTypes {
  showModals: boolean;
  close: () => void;
}


export interface deleteModalTypes {
  showModals: boolean;
    close: () => void;
    productId: string;
}

export interface ModalContainerProps {
  onClose: () => void;
  children: React.ReactNode;
  showModals: boolean;
}

export interface StoreTypes {
  products: Product[];
  addTodo: (state: StoreTypes, payload: Product) => void;
  removeProduct: (state: StoreTypes, payload: { id: string }) => void;
}