import Banner from "./global/components/banner/banner";
import Technologies from "./global/components/technologies/technologies";
import Features from "./global/components/features/features";

export default function Home() {
  return (
    <main className="flex flex-col w-full space-y-8 md:space-y-12">
      <Banner />
      <Technologies />
      {/* <Features /> */}
    </main>
  );
}