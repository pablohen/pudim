import Image from 'next/image';
import styles from './index.module.css';
import Img from '../../public/pudim.jpg';

const Home = () => (
  <>
    <main className={styles.container}>
      <div className={styles.pudim}>
        <Image
          src={Img}
          alt="pudim"
          width={640}
          height={480}
          placeholder="blur"
        />
        <address>
          <a href="mailto:pudim@pudim.com.br">pudim@pudim.com.br</a>
        </address>
      </div>
    </main>
  </>
);

export default Home;
