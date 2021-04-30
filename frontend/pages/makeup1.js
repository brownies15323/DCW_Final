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

        <h3>ANASTASIA BEVERLY HILLS</h3>
        Luminous Foundation 30ml <br/>
        <img src="https://image-optimizer-th.production.sephora-asia.net/images/pictures/42619/closeup_e5f66bd8cddadaa9515851e0366c985a543ec993_1568198625_1_Product_689304360029-Anastasia-Beverly-Hills-Luminous-Foundation-100N_69d0c666a8d8b39e1bf3e326157e521ffe5c6d51_1565754609.jpg"
        width="200" height="200">
        </img><br/>
        <h3>฿1,600.00</h3>

      </div>
      
      <p className={styles.paragaph}>
      <h4>ข้อมูลผลิตภัณฑ์</h4>
<br/> -
        <br/><h4>คุณประโยชน์</h4>


        <br/>ช่วยเบลอจุดที่ไม่เพอร์เฟ็กต์บนใบหน้าทั้งสีผิวที่ไม่สม่ำเสมอ, รอยดำ, รอยสิว ด้วยระดับการปกปิดแบบ Medium Coverage ช่วยให้ผิวเนียนสวย แลดูกระจ่างใสโดยไม่เป็นคราบแป้งหรือหลุดเลือนระหว่างวัน
Vegan & Cruelty-free ไม่มีส่วนผสมที่ทำมาจากสัตว์ และไม่ทดสอบผลิตภัณฑ์กับสัตว์
เหมาะสำหรับผิวแบบไหน? ✔ ผิวธรรมดา ✔ ผิวมัน ✔ ผิวผสม
✔ ผิวแห้ง
<br/><br/>
        <div className={styles.f}>
        <Link href="https://www.sephora.co.th/products/anastasia-beverly-hills-luminous-foundation/v/100n"><a> ซื้อสินค้า </a></Link>
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
