import dynamic from "next/dynamic";

const Banner = dynamic(() => import("./components/Banner"), {
  ssr: false,
});

const Navbar = dynamic(() => import("./components/Navbar"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="container sm:mx-auto py-4">
      <Navbar />
      <Banner />
    </main>
  );
}
