import Link from "next/link";
import productCard from "./components/ProductCard";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <Link href="/users">Users</Link>
      <ProductCard/>
    </main>
  );
}
