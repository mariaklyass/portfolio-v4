import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
