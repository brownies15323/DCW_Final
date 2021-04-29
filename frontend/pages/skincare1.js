import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
import Menubar from '../components/menubar'
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

        <h3>OLE HENRIKSEN</h3>
        Let's Get Luminous™ Brightening Essentials Skincare Set <br/>
        <img src="https://image-optimizer-th.production.sephora-asia.net/images/pictures/67365/closeup_53e7e5b327b49b0c8cc27b3931a0d172bcb55b59_1618763445_840026653978_OLE-HENRIKSEN_LETS-GET-LUMINOUS-BRIGHTENING-ESSENTIALS-SET_SILO.jpg"
        width="200" height="200">
        </img><br/>
        <h3>฿1,550.00</h3>

      </div>
      
      <p className={styles.paragaph}>
      <h4>ข้อมูลผลิตภัณฑ์</h4>
<br/> - 
        <br/><h4>คุณประโยชน์</h4>

        <br/>This set is your new daily vitamin C skincare routine. Truth Serum brightens and firms. C-Rush hydrates and creates a smooth, 
        dewy canvas for makeup. Banana Bright, inspired by "banana powder," targets dark circles and improves concealer wear.
         Get youth-boosting results you can C with these 3 favorites.
         The set includes: * 0.5fl.oz/15ml Truth Serum * 1.2fl.oz/35mL C-Rush Brightening Gel Crème * 0.25fl.oz/7mL Banana Bright Eye Crème
       
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
