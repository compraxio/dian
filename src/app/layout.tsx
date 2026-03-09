import './globals.css';
//*Importando fuente
import { ClassName } from '@/fonts/inter';
//*Importacion del header que se ejecuta al lado del cliente para renderizado condicinal
import { Header } from '@/components/Header';

import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sileo';
import Providers from './Provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth" suppressHydrationWarning>
      {/*Aplicando fuente y estilos a la pagina */}
      <body
        className={`${ClassName} bg-light dark:bg-dark text-slate-900 dark:text-slate-100 animate-fade-in`}
      >
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster position="top-center" />
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
              <div className="layout-container flex h-full grow flex-col">
                {/*Usando header */}
                <Header />
                <main className="flex flex-col flex-1">{children}</main>
              </div>
            </div>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
