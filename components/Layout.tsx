import Navbar from './Navbar';
import Footer from './Footer';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  return (
    <div
      className={
        router.pathname === '/' ? 'h-screen overflow-hidden' : undefined
      }
    >
      <Navbar />
      <main className="wrapper mt-16">{children}</main>
      <Footer />
    </div>
  );
}
