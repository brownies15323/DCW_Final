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
        <title>Hair care</title>
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

        <h3>KRISTIN ESS</h3>
        The One Signature Conditioner<br/>
        <img src="https://image-optimizer-th.production.sephora-asia.net/images/pictures/43822/closeup_67f80ae419f2f944d12abaee4c74f223661d8737_1570619128_1_Product_840797116061-Kristin-Ess-The-One-Signature-Conditioner-59ml_feca91ce37916559b1d3ce59979c61e49fd8b546_1570526286.jpg"
        width="200" height="200">
        </img><br/>
        <h3>฿200.00</h3>

      </div>
      
      <p className={styles.paragaph}>
      <h4>ข้อมูลผลิตภัณฑ์</h4>
        <br/>คอนดิชันเนอร์บำรุงเส้นสามารถใช้ได้ทุกวันและเหมาะกับเส้นผมทุกประเภท
        <br/><h4>คุณประโยชน์</h4>


        <br/>เนื้อบางเบา เพิ่มความชุ่มชื้นให้ผมนุ่มเรียบสวย
        <br/>สามารถใช้ได้ทุกวัน
        <br/>เหมาะสำหรับเส้นผมทุกประเภท
        <br/>มาพร้อมกลิ่นหอมหรูหราที่เป็นเอกลักษณ์ของ Kristin Ess
        <br/><br/>
        <div className={styles.f}>
        <Link href="https://www.sephora.co.th/products/kristin-ess-the-one-signature-conditioner/v/59ml"><a> ซื้อสินค้า </a></Link>
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
