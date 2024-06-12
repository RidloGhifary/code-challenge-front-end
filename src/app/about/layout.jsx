import Teams from "@/components/Teams";

export default function Layout({
  children,
  companyOverview,
  timeline,
  culture,
}) {
  return (
    <main>
      {children}
      {companyOverview}
      {timeline}
      <Teams />
      {culture}
    </main>
  );
}
