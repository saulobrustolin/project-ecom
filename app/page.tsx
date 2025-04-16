import Header from "@/modules/header";
import Content from "@/modules/content";

export default function Home() {
  return (
    <>
      <Header/>

      <main
        className="mt-[51px] p-2.5 min-h-full"
      >
        <Content
          title="Days of Summer"
          description="Uma nova abordagem para a temporada de verão"
          anchor="para ela, prada galleria"
          imageURL="/image.png"
          directionsAnchor="#, #"
        />
      </main>
    </>
  );
}
