import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
import Menubar from '../components/menubar'
import Hairbar from '../components/hairbar'
import styles from '../styles/Home.module.css'

export default function Home({ token }) {

  return (
    <Layout>
    <Head>
        <title>Skin Care</title>
    </Head>
    <div className={styles.Navbar}>
                <Navbar />
                </div>
    <div>

      <div>
          <h1 className={styles.b}>Brown</h1>
      </div>

      <div className={styles.Menubar}>
          <Menubar />
      </div>

      <div className={styles.Menubar}>

          <Hairbar />

      </div>

    </div>

</Layout>
  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
