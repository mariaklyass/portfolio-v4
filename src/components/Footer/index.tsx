export default function Footer() {
  return (
    <footer className="pb-10 px-4 bg-dark text-center text-gray-400">
      <small className="py-4 block text-xs">
        &copy; 2024 Maria Klyass. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js & TypeScript, styled with Tailwind CSS, animated with
        Framer Motion & Three.js, emailing functionality is done via Server
        Actions & Nodemailer, hosted on Vercel.
      </p>
    </footer>
  );
}
