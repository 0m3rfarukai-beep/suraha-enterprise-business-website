import { useEffect } from 'react';

export function usePageTitle(title: string) {
  useEffect(() => {
    const previous = document.title;
    document.title = title
      ? `${title} — Suraha Enterprise Ltd.`
      : 'Suraha Enterprise Ltd.';
    return () => {
      document.title = previous;
    };
  }, [title]);
}
