import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
import Menubar from '../components/menubar'
import styles from '../styles/Home.module.css'

export default function Home({ token }) {

  return (
    <Layout>
    <Head>
        <title>First Page</title>
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
      <br/>
      <br/>
      <div className={styles.b}>
      <img src="https://i.pinimg.com/originals/35/18/a4/3518a4c5ec496c0d1e5c47fc355de146.jpg"
            width="500" height="500">
              </img>
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
