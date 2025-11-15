'use client'

export default function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const saved = localStorage.getItem('quackstack-theme');

            if (saved === 'dark') {
              document.documentElement.classList.add('dark');
            } else if (saved === 'light') {
              document.documentElement.classList.remove('dark');
            } else {
              // Default: always dark
              document.documentElement.classList.add('dark');
            }
          })();
        `,
      }}
    />
  );
}
