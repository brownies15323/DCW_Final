import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
import Menubar from '../components/menubar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

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

        <h3>FRESH</h3>
        Skincare Discovery Gift Set (Limited Edition) <br/>
        <img src="https://image-optimizer-th.production.sephora-asia.net/images/pictures/64123/closeup_1b4e7cca2227a651bb8900f7a835d848c1c54efa_1612943176_1_Product_809280151842-FRESH-Skincare-Discovery-Gift-Set-Default_581bb30f9fc3fc2edd0c50f197d7e7b2be3f7d0d_1610529653.jpg"
        width="200" height="200">
        </img><br/>
        <h3>฿1,200.00</h3>


      </div>
      
      <p className={styles.paragaph}>
      <h4>ข้อมูลผลิตภัณฑ์</h4>
      <br/> -
        <br/><h4>คุณประโยชน์</h4>

        <br/>ถึงเวลามอบของขวัญด้วยเซตผลิตภัณฑ์บำรุงผิวอันยอดเยี่ยม เริ่มจาก Soy Face Cleanser แล้วมาปลอบประโลมผิวด้วย Rose Face Mask เพิ่มความกระจ่างใสด้วย Lotus Moisturizer และเติมความชุ่มชื้นแก่ริมฝีปากด้วย Sugar Advanced Therapy แล้วไม่ใช่แค่เท่านั้น! เพราะนี่เป็นแพ็กเกจของขวัญที่ไม่มีพลาสติกแถมรีไซเคิลได้ด้วย (โปรดทำตามคำแนะนำการรีไซเคิลของประเทศที่คุณอาศัยอยู่)
        <br/><br/>
        <div className={styles.f}>
        <Link href="https://www.sephora.co.th/products/fresh-skincare-discovery-gift-set-limited-edition/v/default"><a> ซื้อสินค้า </a></Link>
        </div>
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
