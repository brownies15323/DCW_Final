import Link from 'next/link'

const Hairbar = () => (
    <div class= "head">
        <div>
            <Link href="/hair1"><a>         
            <h3>KRISTIN ESS</h3>
            <img src="https://image-optimizer-th.production.sephora-asia.net/images/pictures/43822/closeup_67f80ae419f2f944d12abaee4c74f223661d8737_1570619128_1_Product_840797116061-Kristin-Ess-The-One-Signature-Conditioner-59ml_feca91ce37916559b1d3ce59979c61e49fd8b546_1570526286.jpg"
            width="200" height="200">
            </img> </a></Link>

            <Link href="/hair2"><a>
            <h3>DRUNK ELEPHANT</h3>
            <img src="https://image-optimizer-th.production.sephora-asia.net/images/pictures/53240/closeup_12c9f56b51dd41e27ac42768c70fb1862bffcf42_1589987381_1_Product_812343031296-Drunk-Elephant-Cocomino--Glossing-Shampoo-240ml_6ca13533f214fd71ea9238cf604689c8a50fc051_1585220974.jpg"
            width="200" height="200">
            </img></a></Link>
        </div>
    </div>
)

export default Hairbar
