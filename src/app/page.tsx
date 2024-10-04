import Image from "next/image"
export default function Home() {
  return (
    <main className="mt-10 mx-10">
      {/* Hero Section */}
      <section className="flex gap-6 items-center">
        {/* Left side */}
        <div className="flex-1">
          <h1 className="font-bold text-3xl ">Hi, I'm Hamzah Syed</h1>
          <p className="text-lg text-gray-600 mt-2">
            I'm a full-stack developer with a passion for building beautiful
            websites and applications.
            I'm a full-stack developer with a passion for building beautiful
            websites and applications.
          </p>
          <button className="bg-gray-900 text-white py-2 mt-4 px-4" >View My Work</button>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <Image width={500} height={500} src="/poster.jpg" alt="shoes" />
        </div>
      </section>
    </main>
  );
}
