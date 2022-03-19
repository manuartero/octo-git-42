import './layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <h1>Octo Git 42</h1>
      </header>
      <main>{children}</main>
      <footer>bottom</footer>
    </div>
  );
}

export default Layout;
