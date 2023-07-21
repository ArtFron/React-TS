import React, { useContext } from 'react';
import { Product } from '../components/Product';
import { useProducts } from '../hooks/products';
import { Loader } from '../components/Loader';
import { Error } from '../components/Error';
import { Modal } from '../components/Model';
import { CreateModal } from '../components/CreateModal';
import { IProduct } from '../models';
import { ModalContext } from '../context/ModalContext';
export function ProductPage() {
  const { loading, products, error, addProduct } = useProducts();

  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className="App mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <Error error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title="Create new product" onClose={close}>
          <CreateModal onCreate={createHandler} />
        </Modal>
      )}
      <button
        className="fixed py-4 px-4 bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl"
        onClick={open}>
        Create
      </button>
    </div>
  );
}
