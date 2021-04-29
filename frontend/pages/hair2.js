import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
import Menubar from '../components/menubar'
import styles from '../styles/Home.module.css'

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

        <h3>DRUNK ELEPHANT</h3>
        Cocomino™ Glossing Shampoo
240ml<br/>
        <img src="https://image-optimizer-th.production.sephora-asia.net/images/pictures/53240/closeup_12c9f56b51dd41e27ac42768c70fb1862bffcf42_1589987381_1_Product_812343031296-Drunk-Elephant-Cocomino--Glossing-Shampoo-240ml_6ca13533f214fd71ea9238cf604689c8a50fc051_1585220974.jpg"
        width="200" height="200">
        </img><br/>
        <h3>฿990.00</h3>

      </div>
      
      <p className={styles.paragaph}>
        <h4>ข้อมูลผลิตภัณฑ์</h4>
        <br/>Cocomino™ แชมพูเพื่อผมที่เงางาม สูตรบำรุงทั้งเส้นผมและหนังศีรษะ ปราศจากสารSulfate ปกป้องสีผมและใช้สารลดแรงตึงผิวจากมะพร้าว มอบความอ่อนโยน ฟองครีมนุ่ม อีกทั้งยังให้ช่วยขจัดสิ่งสกปรก สารเคมีจากการจัดแต่งทรงผม และสารตกค้างต่างๆ โดยไม่ทำร้ายเส้นผมหรือทำลายสีผมของคุณ
        <br/><h4>คุณประโยชน์</h4>


        <br/>มีโปรตีนและสารสกัดที่ช่วยบำรุงให้ผมแข็งแรง ป้องกันการขาดความชุ่มชื้น มอบความนุ่มลื่นเงางามและทำหน้าที่เป็นเกราะป้องกันความร้อนให้กับเส้นผม นอกจากนี้ยังมีน้ำมันต่อต้านอนุมูลอิสระเข้มข้นสกัดจากเมล็ด sacha รวมถึง marula และ argan ที่ช่วยเพิ่มความชุ่มชื้นให้กับเส้นผมโดยไม่ทำให้ผมลีบแบน กรมอมิโนหลายชนิดที่ช่วยเสริมให้ผมแข็งแรง และปรับปรุงเส้นผมระยะยาวให้ผมดูสุขภาพดีขึ้น เด้ง สวย และPanthenol และ sodium PCA ทำให้ผมมีน้ำหนักและป้องกันการขาดน้ำ
       
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
