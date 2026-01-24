import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import TodaySher from "../components/home/TodaySher";
import Collection from "../components/home/Collection";
import WordOfDay from "../components/home/WordOfDay";
import Books from "../components/home/Books";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main">
        <section style={{ padding: 0 }}>
          <Hero />
          <TodaySher />
          <Collection />
          <WordOfDay />
          <Books />
        </section>
      </main>
    </>
  );
}




