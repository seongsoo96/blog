import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();
  router.pathname === '/' ? 'h-screen overflow-hidden' : undefined;
  return (
    <>
      <footer
        className={router.pathname === '/' ? 'footer fixed bottom-0' : 'footer'}
      >
        <p>Copyright ⓒ Seongsoo96 2022 All rights reserved.</p>
      </footer>
    </>
  );
}
