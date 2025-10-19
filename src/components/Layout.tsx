import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>{children}</main>
      {!isHomePage && <Footer />}
    </div>
  );
};
