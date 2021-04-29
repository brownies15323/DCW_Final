import Link from 'next/link'

const Bodyskinbar = () => (
    <div class= "head">
        <div>
            <Link href="/bodyskin1"><a>         
            <h3>THIS WORKS</h3>
            <img src="https://image-optimizer-th.production.sephora-asia.net/images/pictures/11285/closeup_dfccc7d5bfecd0a861d5172c1e747ddfd6433f80_1493282932_skin_20deep_20dry_20leg_20oil.jpg"
            width="200" height="200">
            </img> </a></Link>

            <Link href="/bodyskin2"><a>
            <h3>DRUNK ELEPHANT</h3>
            <img src="https://image-optimizer-th.production.sephora-asia.net/images/pictures/53244/closeup_4194e8a4efdaaab04a0987dfc8bc055896893941_1589987423_1_Product_812343031340-Drunk-Elephant-Sili-Body-Lotion-240ml_b7efb13203f3c567b326fa190a830cc8ad11012e_1585127832.jpg"
            width="200" height="200">
            </img></a></Link>
        </div>
    </div>
)

export default Bodyskinbar
