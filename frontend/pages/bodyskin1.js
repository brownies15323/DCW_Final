import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
import Menubar from '../components/menubar'
import styles from '../styles/Home.module.css'

export default function Home({ token }) {

  return (
    <Layout>
    <Head>
        <title>Body skin</title>
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

        <h3>THIS WORKS</h3>
        Skin Deep Dry Leg Oil
120ml<br/>
        <img src="https://image-optimizer-th.production.sephora-asia.net/images/pictures/11285/closeup_dfccc7d5bfecd0a861d5172c1e747ddfd6433f80_1493282932_skin_20deep_20dry_20leg_20oil.jpg"
        width="200" height="200">
        </img><br/>
        <h3>฿2,100.00</h3>

      </div>
      
      <p className={styles.paragaph}>
      <h4>ข้อมูลผลิตภัณฑ์</h4>
        <br/>ผลิตภัณฑ์จาก Thisworks ที่ได้รับรางวัลว่าเป็นออยล์ที่มอบความชุ่มชื่นให้ผิวได้อย่างล้ำลึก ด้วยน้ำมันจากธรรมชาติอย่าง Rose Oil, Tuberose, Sandalwood และ Evening Primrose เพื่อช่วยให้ผิวที่แห้งกร้านกลับเนียนนุ่มชุ่มชื่นกว่าที่เคย
        <br/><h4>คุณประโยชน์</h4>
        <br/>อุดมด้วยน้ำมันธรรมชาติอย่าง Rose Oil, Tuberose, Sandalwood และ Evening Primrose
        <br/>ช่วยให้ผิวที่แห้งกร้านกลับเนียนนุ่มชุ่มชื่น
       
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
