import { Outlet } from "react-router-dom";

function Layout() {
  return <div className="app-layout">
      <header>Header</header>

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </div>
}

export default Layout;
