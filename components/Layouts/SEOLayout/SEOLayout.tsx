import Head from 'next/head';

type SEOLayoutProps = {
  children: React.ReactNode;
  description?: string;
  keywords?: string;
  title?: string;
};

function SEOLayout({
  children,
  description = 'Find the latest DJ and other Musical Events',
  keywords = 'Music, DJ, EDM, Events',
  title = 'DJ Events | Find the Hottest Parties',
}: SEOLayoutProps) {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <title>{title}</title>
      </Head>

      {children}
    </>
  );
}

export default SEOLayout;
