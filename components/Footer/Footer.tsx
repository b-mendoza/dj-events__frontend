import { FavoriteRounded, LaunchRounded } from '@material-ui/icons';
import Link from 'next/link';

import { cssVariables } from 'constants/shared';

import { NavItem } from 'typings/shared';

import styles from './Footer.module.scss';

const redirectIconStyles: React.CSSProperties = {
  marginLeft: '0.3rem',
};

const __navList__: NavItem[] = [{ text: 'About', to: '/about' }];

function Footer() {
  return (
    <footer className={styles['container']}>
      <section className={styles['general']}>
        <p className={styles['general__info']}>
          Copyright&copy; DJ Events 2021
        </p>

        <p className={styles['general__info']}>
          Made with{' '}
          <FavoriteRounded
            fontSize="large"
            style={{ color: cssVariables.colors.primaryRedColor }}
          />{' '}
          by{' '}
          <a
            className={styles['general__info--author']}
            href="https://github.com/b-mendoza"
            rel="noopener noreferrer"
            target="_blank"
          >
            b-mendoza <LaunchRounded style={redirectIconStyles} />
          </a>
        </p>
      </section>

      <nav>
        <ul>
          {__navList__.map(listItem => (
            <li key={listItem.to}>
              <Link href={listItem.to}>
                <a>{listItem.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
