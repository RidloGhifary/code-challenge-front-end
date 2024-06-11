export default function Layout({ children, companyOverview, timeline }) {
  return (
    <main>
      {children}
      {companyOverview}
      {timeline}
    </main>
  );
}
