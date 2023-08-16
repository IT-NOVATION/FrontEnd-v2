'use-client';

import Link from 'next/link';

const items = [
  {
    name: '무비서치',
    link: '/movie-search',
  },
  {
    name: '무비토크',
    link: '/movie-talk',
  },
];

export default function NavigationBar() {
  return (
    <div>
      <Link href="/"></Link>
      <nav>
        {items.map(({ name, link }) => (
          <Link key={name} href={link}>
            {name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
