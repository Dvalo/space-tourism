import Nav from "./Nav";

export default function Header({ children }) {
  return (
    <>
      <header className="sp-header">
        <div className="sp-header-inner">
          <div className="sp-header-logo">
            <img src="/logo.svg" />
          </div>
          <Nav />
        </div>
      </header>
      {children}
    </>
  );
}
