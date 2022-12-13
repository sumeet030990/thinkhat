import { useState } from 'react';
import { useRouter } from 'next/router';

const CreateProduct = () => {
  const [name, setName] = useState('');
  const [qty, setQty] = useState('');
  const [rate, setRate] = useState('');
  const [category, setCategory] = useState('');
  const router = useRouter();
  const submitProduct = async () => {
    const response = await fetch('http://localhost:5000/api/products', {
      method: 'POST',
      body: JSON.stringify({
        name,
        qty,
        rate,
        category,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log('data: ', data);
    router.push('/products');
  };

  return (
    <>
      <h1>Create Product Page</h1>
      <div>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div>
        <input
          type="number"
          value={qty}
          placeholder="WQty"
          onChange={(e) => setQty(e.target.value)}
        ></input>
      </div>
      <div>
        <input
          type="number"
          placeholder="SRate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        ></input>
      </div>
      <div>
        <input
          type="text"
          value={category}
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        ></input>
      </div>
      <button type="button" onClick={submitProduct}>
        Save
      </button>
    </>
  );
};

export default CreateProduct;
