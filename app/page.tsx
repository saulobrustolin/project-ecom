import Header from "@/modules/header";
import Content from "@/modules/content";

export default function Home() {  
  return (
    <>
      <Header/>

      <main
        className="mt-[51px] p-2.5 min-h-full 2xl:px-32 2xl:pt-6"
      >
        <Content/>
      </main>
    </>
  );
}
