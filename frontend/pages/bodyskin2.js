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

        <h3>DRUNK ELEPHANT</h3>
        Sili™ Body Lotion
240ml<br/>
        <img src="https://image-optimizer-th.production.sephora-asia.net/images/pictures/53244/closeup_4194e8a4efdaaab04a0987dfc8bc055896893941_1589987423_1_Product_812343031340-Drunk-Elephant-Sili-Body-Lotion-240ml_b7efb13203f3c567b326fa190a830cc8ad11012e_1585127832.jpg"
        width="200" height="200">
        </img><br/>
        <h3>฿790.00</h3>

      </div>
      
      <p className={styles.paragaph}>
      <h4>ข้อมูลผลิตภัณฑ์</h4>
        <br/>Sili ™ โลชั่นสำหรับผิวกายสูตรพิเศษ ช่วยฟื้นฟูผิวที่หมองคล้ำ ผิวแห้ง และระคายเคืองให้กลับมามีสุขภาพดีและมีสมดุลมากขึ้น
        <br/><h4>คุณประโยชน์</h4>
        <br/>ด้วยการผสมผสานระหว่างน้ำมันสกัดจากพืช butters squalane และกรดอะมิโนที่ช่วยเพิ่มความแข็งแรงให้ผิว ผสมผสานซีราไมด์ 5 ชนิด และสารที่ช่วยเพิ่มเกราะป้องกันผิวอย่างโซเดียม PCA ผลิตภัณฑ์ Sili ™ ช่วยล็อคในความชุ่มชื้นในผิว และในขณะเดียวกันก็คืนความชุ่มชื้นที่ผิวคุณสูญเสียไป

        <br/>นอกจากนี้เรายังเพิ่มกสารต้านอนุมูลอิสระจากผลไม้ มีโพลีฟีนอลคุณภาพสูงและสารประกอบแคโรทีนอยด์ เช่น เบต้าแคโรทีน คาคาดูพลัม มะม่วง และหยวกกล้วย ซึ่งให้การปกป้องผิวอย่างมีประสิทธิภาพ Sili ™มีค่า pH ที่เหมาะกับผิว 4.2"
        <br/><br/>
        <div className={styles.f}>
        <Link href="https://www.sephora.co.th/products/drunk-elephant-sili-body-lotion/v/240ml"><a> ซื้อสินค้า </a></Link>
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
