import Image from 'next/image';

import { MainLayout } from 'components';

import styles from 'styles/pages/Home.module.scss';

function Home() {
  return (
    <MainLayout>
      <Image
        alt="Hero Image"
        className={styles['hero']}
        height={524.875}
        layout="responsive"
        priority
        src="/hero.jpg"
        width={1105}
      />
    </MainLayout>
  );
}

export default Home;
