import Link from 'next/link'

const Makeupbar = () => (
    <div class= "head">
        <div>
            <Link href="/makeup1"><a>         
            <h3>ANASTASIA BEVERLY HILLS</h3>
            <img src="https://image-optimizer-th.production.sephora-asia.net/images/pictures/42619/closeup_e5f66bd8cddadaa9515851e0366c985a543ec993_1568198625_1_Product_689304360029-Anastasia-Beverly-Hills-Luminous-Foundation-100N_69d0c666a8d8b39e1bf3e326157e521ffe5c6d51_1565754609.jpg"
            width="200" height="200">
            </img> </a></Link>

            <Link href="/makeup2"><a>
            <h3>HOURGLASS</h3>
            <img src="https://image-optimizer-th.production.sephora-asia.net/images/pictures/67159/closeup_7b6bf30070b83e4b6ccef96da953d9f7dc3640e2_1618113405_Vanish_Wonder_Ecom_173_v2.jpg"
            width="200" height="200">
            </img></a></Link>
        </div>
    </div>
)

export default Makeupbar
