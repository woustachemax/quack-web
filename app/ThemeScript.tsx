'use client'

export default function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const saved = localStorage.getItem('quackstack-theme');
            if (saved === 'light') {
              document.documentElement.classList.remove('dark');
            } else {
              document.documentElement.classList.add('dark');
            }
          })();
        `,
      }}
    />
  );
}
