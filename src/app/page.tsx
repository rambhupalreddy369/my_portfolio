import Header from "./components/Header/Header";
import Navbar from "./components/Navbar";
// import Resume from "../components/Resume";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header></Header>
      <Navbar />
      {/* <Resume /> */}
      <h1>Hello</h1>
    </div>
  );
}
