import Link from 'next/link';

const Product = ({ products }) => {
  return (
    <>
      <h1>Product Page</h1>
      <Link href="/products/create">
        <button>Create Product</button>
      </Link>
      <h3>Product List </h3>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>WQty</th>
          <th>SRate</th>
          <th>Category</th>
        </tr>
        {products.map((data) => {
          return (
            <tr key={data.ID}>
              <td>{data.ID}</td>
              <td>{data.Name}</td>
              <td>{data.WQty}</td>
              <td>{data.SRate}</td>
              <td>{data.Category}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Product;

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:5000/api/products');
  const { products } = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      products,
    },
  };
}
