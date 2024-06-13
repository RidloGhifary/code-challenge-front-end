import Download from "@/components/Download";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Download />
      <Footer />
    </>
  );
}
