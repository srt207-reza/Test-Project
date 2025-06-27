import '@/../styles/globals.scss'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='container'>
        {children}
      </body>
    </html>
  );
}
