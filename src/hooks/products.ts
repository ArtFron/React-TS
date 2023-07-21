import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { IProduct } from '../models';

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function addProduct(product: IProduct) {
    setProducts((prev) => [...prev, product]);
  }

  async function fetchProduct() {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get<IProduct[]>(
        'https://fakestoreapi.com/products?limit =10'
      );
      setProducts(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const errorMessage = e as AxiosError;
      setLoading(false);
      setError(errorMessage.message);
    }
  }
  useEffect(() => {
    fetchProduct();
  }, []);
  return { products, error, loading, addProduct };
}
