import Image from "next/image";
import Feature from "./components/ui/feature";
import Main from "./pages/main/page"


export default function Home() {
  return (
    <>
    <Main></Main>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Feature></Feature>
    </main>
    </>
  );
}
