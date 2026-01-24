import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  // lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* ===== TOP NAV ===== */}
      <header className="navbar">
        <div className="nav-container">
          {/* Logo always visible */}
        <div className="logo">
          <img src="/images/labzaank-logo.png" alt="Labzaank" />
        </div>

        {/* Desktop nav */}
        <nav className="nav-links desktop-only">
          <a className="navitem">Poet</a>
          <a className="navitem">Sher</a>
          <a className="navitem">Dictionary</a>
          <a className="navitem">E-Books</a>
          <a className="navitem">Prose</a>
          <a className="navitem">Blog</a>
          <a className="navitem">More</a>

          <p className="saprator">|</p>

          <div className="search-bar">
            <i className="ri-search-line"></i>
            <input type="text" placeholder="Search" />
          </div>

          <p className="saprator">|</p>

          <div className="site-lang" onClick={() => setLangOpen(!langOpen)}>
            <p>
              ENG <i className="ri-arrow-drop-down-line"></i>
            </p>
            {langOpen && (
              <div className="lang-menu">
                <div className="eng-lang"><p>BAL</p></div>
                <div className="eng-lang"><p>SIN</p></div>
                <div className="eng-lang"><p>URD</p></div>
                <div className="eng-lang"><p>ENG</p></div>
              </div>
            )}
          </div>
        </nav>

        {/* Hamburger (mobile only) */}
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <i className="ri-menu-3-line"></i>
        </div>
        </div>
        
      </header>

      {/* ===== OVERLAY ===== */}
      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)} />
      )}

      {/* ===== MOBILE SLIDE MENU ===== */}
      <aside className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="mobile-menu-header">

  <i
    className="ri-close-line close-btn"
    onClick={() => setMenuOpen(false)}
  ></i>
</div>

        <div className="mobile-links">
          <a onClick={() => setMenuOpen(false)}>Poet</a>
          <a onClick={() => setMenuOpen(false)}>Sher</a>
          <a onClick={() => setMenuOpen(false)}>Dictionary</a>
          <a onClick={() => setMenuOpen(false)}>E-Books</a>
          <a onClick={() => setMenuOpen(false)}>Prose</a>
          <a onClick={() => setMenuOpen(false)}>Blog</a>
          <a onClick={() => setMenuOpen(false)}>More</a>

          <div className="mobile-divider"></div>

          {/* Search inside mobile menu */}
          <div className="search-bar mobile-search">
            <i className="ri-search-line"></i>
            <input type="text" placeholder="Search" />
          </div>

          {/* Language selector inside mobile menu */}
          <div className="mobile-lang">
            <p>Language</p>
            <div className="mobile-lang-options">
              <span>BAL</span>
              <span>SIN</span>
              <span>URD</span>
              <span>ENG</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
