import React from 'react';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

const Home = () => (
  <>
    <NextSeo title="Home" />

    <main className="container">
      <div>
        <Image src="/pudim.jpg" alt="pudim" width="640px" height="480px" />
        <address>
          <a href="mailto:pudim@pudim.com.br">pudim@pudim.com.br</a>
        </address>
      </div>
    </main>
  </>
);

export default Home;
