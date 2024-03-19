import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function Layout() {
  return (
    <>
      <main>
        <section>
        <Navbar/>
        </section>
        <section>
          <Outlet/>
        </section>
        <section>
          footer
        </section>         
      </main>
    </>
  );
}
