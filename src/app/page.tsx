import ImageSlider from "@/components/images/image-slider";
import Link from "next/link";

export default function Home() {
  console.log('From Server')
  return (
    <>
      <header className="flex mr-4 ml-4 pr-4 pl-4">
        <div className="p-4">
          <ImageSlider />
        </div>
        <div className="p-4">
          <div>
            <h1 className="text-6xl font-semibold w-[60%]">Next Level Food for Next Level Foodies</h1>
            <p className="text-3xl pt-6 font-semibold">Taste and Share food</p>
          </div>
          <div className="flex gap-10 pt-10 pb-2 text-xl">
            <Link className="hover:text-blue-600" href="/community">Join the Community</Link>
            <Link className="hover:text-blue-600" href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main className="m-4 p-4 text-center">
        <section className="p-4">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <p className="text-xl">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p className="text-xl">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="p-4">
          <h2 className="text-2xl font-semibold">Why NextLevel Food?</h2>
          <p className="text-xl">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p className="text-xl">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
