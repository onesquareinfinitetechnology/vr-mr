type SiteFooterProps = {
  copyright: string;
  links: Array<{ href: string; label: string }>;
};

export function SiteFooter({ copyright, links }: SiteFooterProps) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-text">{copyright}</div>
        <div className="footer-subtext">
          {links.map((link, index) => (
            <a key={link.href} href={link.href} className="footer-link">
              {link.label}
              {index < links.length - 1 ? " • " : ""}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
