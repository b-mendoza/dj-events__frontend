import Head from 'next/head';

import styles from './MainLayout.module.scss';

type MainLayoutProps = {
  children: React.ReactNode;
  description?: string;
  keywords?: string;
  title?: string;
};

function MainLayout({
  children,
  description = 'Find the latest DJ and other Musical Events',
  keywords = 'Music, DJ, EDM, Events',
  title = 'DJ Events | Find the Hottest Parties',
}: MainLayoutProps) {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <title>{title}</title>
      </Head>

      <main className={styles['container']}>{children}</main>
    </>
  );
}

export default MainLayout;
