import Script from "next/script";

export function ThemeInitScript() {
  return (
    <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: `
      try {
        let isDark = false;
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
          isDark = true;
        } else if (savedTheme === 'light') {
          isDark = false;
        } else {
          isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        
        if (isDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {}
    ` }} />
  );
}
