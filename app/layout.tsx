import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import '../src/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Tripwire AI Academy',
  description: 'Practical AI training for executives and practitioners — from strategic literacy to operational mastery.',
  manifest: '/manifest.json',
  keywords: ['AI training', 'executive AI', 'AI literacy', 'prompt engineering', 'agentic workspaces', 'AI governance'],
  authors: [{ name: 'Tripwire Digital Ltd.' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
