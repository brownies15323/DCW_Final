import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
import Menubar from '../components/menubar'
import styles from '../styles/Home.module.css'

export default function Home({ token }) {

  return (
    <Layout>
    <Head>
        <title>Makeup</title>
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

        <h3>HOURGLASS</h3>
        Vanish Blush Stick
6g<br/>
        <img src="https://image-optimizer-th.production.sephora-asia.net/images/pictures/67159/closeup_7b6bf30070b83e4b6ccef96da953d9f7dc3640e2_1618113405_Vanish_Wonder_Ecom_173_v2.jpg"
        width="200" height="200">
        </img><br/>
        <h3>฿1,950.00</h3>

      </div>
      
      <p className={styles.paragaph}>
      <h4>ข้อมูลผลิตภัณฑ์</h4>
      <br/> -
        <br/><h4>คุณประโยชน์</h4>

        <br/>• Buildable formula blends easily and seamlessly
        <br/>• Non-drying
        <br/>• Visibly reduces the appearance of pores with PoreAway
        <br/>• Vegan and cruelty free
       
        </p>

    </div>

</Layout>
  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
