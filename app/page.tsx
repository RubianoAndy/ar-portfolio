import Banner from "./global/components/banner/banner";
import Features from "./global/components/features/features";

export default function Home() {
  return (
    <main className="flex flex-col w-full space-y-5">
      <Banner />
      <Features />
    </main>
  );
}