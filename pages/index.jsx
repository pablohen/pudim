import React from 'react';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

const Home = () => (
  <>
    <NextSeo title="Home" />

    <main className="container">
      <div className="pudim">
        <Image src="/pudim.jpg" alt="pudim" width={640} height={480} />
        <address>
          <a href="mailto:pudim@pudim.com.br">pudim@pudim.com.br</a>
        </address>
      </div>
    </main>
  </>
);

export default Home;
