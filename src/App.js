import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import MobileNav from "./components/MobileNav";

export default function App() {
  return (
    <div className='page'>
      <Header />
      <Main />
      <MobileNav />
    </div>
  );
}
