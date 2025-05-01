import Header from "@/modules/header";
import Content from "@/modules/content";
import Footer from "@/modules/footer";

export default function Home() {  
  return (
    <div>
      <Header/>

      <main>
        <Content/>
      </main>

      <Footer/>
    </div>
  );
}
