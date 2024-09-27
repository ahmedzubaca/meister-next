"use client";

import Link from 'next/link';

export default function ScrollToTopLink({ href, children }) {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}