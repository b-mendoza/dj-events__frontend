import Link from 'next/link';

import { NavItem } from 'typings/shared';

import styles from './Navbar.module.scss';

const __navList__: NavItem[] = [
  { text: 'Home', to: '/' },
  { text: 'Events', to: '/events' },
];

function Navbar() {
  return (
    <header className={styles['container']}>
      <div className={styles['wrapper']}>
        <section className={styles['logo']}>
          <Link href="/">
            <a>DJ Events</a>
          </Link>
        </section>

        <nav className={styles['nav']}>
          <ul className={styles['nav__list']}>
            {__navList__.map(listItem => (
              <li className={styles['nav__listItem']} key={listItem.to}>
                <Link href={listItem.to}>
                  <a className={styles['nav_listItem--link']}>
                    {listItem.text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
