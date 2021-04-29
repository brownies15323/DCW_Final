import Link from 'next/link'

const Skincarebar = () => (
    <div class= "head">
        <div>
            <Link href="/skincare1"><a>         
            <h3>OLE HENRIKSEN</h3>
            <img src="https://image-optimizer-th.production.sephora-asia.net/images/pictures/67365/closeup_53e7e5b327b49b0c8cc27b3931a0d172bcb55b59_1618763445_840026653978_OLE-HENRIKSEN_LETS-GET-LUMINOUS-BRIGHTENING-ESSENTIALS-SET_SILO.jpg"
            width="200" height="200">
            </img> </a></Link>

            <Link href="/skincare2"><a>
            <h3>FRESH</h3>
            <img src="https://image-optimizer-th.production.sephora-asia.net/images/pictures/64123/closeup_1b4e7cca2227a651bb8900f7a835d848c1c54efa_1612943176_1_Product_809280151842-FRESH-Skincare-Discovery-Gift-Set-Default_581bb30f9fc3fc2edd0c50f197d7e7b2be3f7d0d_1610529653.jpg"
            width="200" height="200">
            </img></a></Link>
        </div>
    </div>
)

export default Skincarebar
