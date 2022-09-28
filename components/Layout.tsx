import Navbar from './Navbar';
import Footer from './Footer';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <main className="wrapper mt-16">{children}</main>
      <Footer />
    </>
  );
}
