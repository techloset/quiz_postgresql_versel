import './globals.css'
import { Inter } from 'next/font/google'
import { NextAuthProvider } from './Providers'
import { ToastContainer } from 'react-toastify';
import '../components/Toastify'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quiz App',
  description: 'Quiz App by Muhammad Ahmed',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          {children}
        <ToastContainer/>
        </NextAuthProvider>
      </body>
    </html>
  )
}
