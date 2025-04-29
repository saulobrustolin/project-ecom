import Header from "@/modules/header";
import Content from "@/modules/content";
import Footer from "@/modules/footer";

export default function Home() {  
  return (
    <div
      className="flex flex-col items-center"
    >
      <Header/>

      <main>
        <Content/>
      </main>

      <Footer/>
    </div>
  );
}
