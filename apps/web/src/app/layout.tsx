import type { Metadata } from "next";
import GlobalLayout from "./components/GlobalLayout";
import "./style.css";

export const metadata: Metadata = {
  title: "HireStack",
  description: "Making developer recruitment easier",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
