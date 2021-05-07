import Image from 'next/image';

export default function Home() {
  return (
    <main className="container">
      <div>
        <Image src="/pudim.jpg" alt="pudim" width="640px" height="480px" />
        <address>
          <a href="mailto:pudim@pudim.com.br">pudim@pudim.com.br</a>
        </address>
      </div>
    </main>
  );
}
