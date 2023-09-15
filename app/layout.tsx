import './globals.css';
import React from 'react';
import Head from 'next/head';
import styles from './styles/Main.module.css';
import Sidebar from '@/components/Sidebar';

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <Head>
        <title>MeUtil</title>
      </Head>
      <body className={styles.body}>
        <header className={styles.header}>
          <p className={styles.title}>MeUtil</p>
        </header>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <aside className={styles.sidebar}>
              <Sidebar />
            </aside>
            <main className={styles.main}>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
