import React from 'react';

interface Error {
  error: string;
}

export function Error({ error }: Error) {
  return <p className="text-center text-red-600">Sorry {error}</p>;
}
