import type React from "react";

type NavItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  brand: string;
  logoSrc?: string;
  logoAlt?: string;
  navItems: NavItem[];
  mobileLinkLabel?: string;
  mobileLinkHref?: string;
};

export function SiteHeader({
  brand,
  logoSrc,
  logoAlt = "Brand logo",
  navItems,
  mobileLinkLabel = "Contact",
  mobileLinkHref = "/#contact",
}: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header-bar">
        <div className="site-header-inner">
          <a className="brand-link" href="/">
            <div className="brand">
              {logoSrc ? (
                <>
                  <img className="brand-logo" src={logoSrc} alt={logoAlt} />
                </>
              ) : (
                brand
              )}
            </div>
          </a>
          <nav className="nav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mobile-nav">
            <a href={mobileLinkHref} className="mobile-link">
              {mobileLinkLabel}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
