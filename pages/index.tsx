import Image from 'next/image';

import { MainLayout } from 'components';

import styles from 'styles/pages/Home.module.scss';

function Home() {
  return (
    <MainLayout>
      <Image
        alt="Hero Image"
        className={styles['hero']}
        height="570px"
        layout="responsive"
        priority
        src="/hero.jpg"
        width="1200px"
      />
    </MainLayout>
  );
}

export default Home;
