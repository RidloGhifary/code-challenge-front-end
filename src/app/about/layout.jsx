import Download from "@/components/Download";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Teams from "@/components/Teams";

export default function Layout({
  children,
  companyOverview,
  timeline,
  culture,
}) {
  return (
    <>
      <Navbar />
      <main>
        {children}
        {companyOverview}
        {timeline}
        <Teams />
        {culture}
      </main>
      <Download />
      <Footer />
    </>
  );
}
