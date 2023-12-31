import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: 'Savin | portfolio',
  description: 'Created by savin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className='  max-w-full mt-2 px-6 mx-auto border border-[#1d1d1d] bg-[#121212]'>
          {children}
        </main>

      </body>
    </html>
  )
}
