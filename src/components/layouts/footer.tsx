import '@styles/layout.css';

function Footer() {
  return (
    <footer className="navbar-footer justify-center">
      <div className="mb-2 text-center">
        <p className="text-sm">© {new Date().getFullYear()}. Ohyoung Kwon All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
