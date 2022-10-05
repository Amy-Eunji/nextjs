import NavBar from '../Component/NavBar'
export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
        * {
          // *은 모든것
          font-size: 40px;
        }
      `}</style>
    </div>
  )
}
