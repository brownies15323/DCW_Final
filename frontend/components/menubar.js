import Link from 'next/link'

const Menubar = () => (
    <div class= "head">
        <div>
        <Link href="/skincare"><a> <img src="https://cdn.dynamicyield.com/api/8767266/images/1c94bd39a9bb6__all-skincare.png" width="40" height="40"></img> สกินแคร์ </a></Link>  |
        <Link href="/makeup"><a><img src="https://cdn.dynamicyield.com/api/8767263/images/159a90c916224__19be366e476a3__Subcategory_Icons-12.png" width="40" height="40"></img>  เมคอัพ </a></Link> |  
        <Link href="/hair"><a> <img src="https://cdn.dynamicyield.com/api/8767266/images/a2873de1a1e5__all-hair.png" width="40" height="40"></img>  ดูแลเส้นผม </a></Link> |
        <Link href="/bodyskin"><a> <img src="https://cdn.dynamicyield.com/api/8767266/images/cb0d8e95f902__all-bath.png" width="40" height="40"></img>  ดูแลผิวกาย </a></Link> |
        </div>
    </div>
)

export default Menubar