import Download from "@/components/Download";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Download />
      <Footer />
    </>
  );
}
