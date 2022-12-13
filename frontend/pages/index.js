import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <title>Edways Test</title>
      <main>
        <h1>Welcome to Edways Test</h1>
        <Link href="/products">
          <button>Products</button>
        </Link>
      </main>
    </div>
  );
};

export default Home;
