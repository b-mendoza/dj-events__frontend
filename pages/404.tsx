import { ArrowBackIosRounded, ReportProblemRounded } from '@material-ui/icons';
import Link from 'next/link';

import { MainLayout } from 'components';

import { cssVariables } from 'constants/shared';

import styles from 'styles/pages/NotFound.module.scss';

const errorIconStyles: React.CSSProperties = {
  color: cssVariables.colors.primaryRedColor,
  marginRight: '1rem',
};

const backIconStyles: React.CSSProperties = {
  marginRight: '0.5rem',
};

function NotFound() {
  return (
    <MainLayout title="DJ Events | Not Found">
      <section className={styles['container']}>
        <h1 className={styles['title']}>
          <ReportProblemRounded fontSize="inherit" style={errorIconStyles} />{' '}
          404
        </h1>

        <h3>__There is _nothin__g here___</h3>

        <Link href="/">
          <a className={styles['link']}>
            <ArrowBackIosRounded style={backIconStyles} /> Go Back Home
          </a>
        </Link>
      </section>
    </MainLayout>
  );
}

export default NotFound;
