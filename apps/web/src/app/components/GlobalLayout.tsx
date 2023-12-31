import { Footer } from "./Footer";
import { Header } from "./Header";

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
