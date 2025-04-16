import Header from "@/modules/header";
import Content from "@/modules/content";

export default function Home() {
  return (
    <>
      <Header/>

      <main
        className="mt-[51px] p-2.5 min-h-full"
      >
        <Content/>
      </main>
    </>
  );
}
