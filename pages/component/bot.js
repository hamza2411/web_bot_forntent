import Link from 'next/link'
export default function Bot() {
    return (
      <Link href="/bot" passHref>
      <div className="bg-gray-800">
Grid Trading Bot
Leave market swings to our integrated auto-trading bots, help you buy low sell high automatically 7/24 while you spend time doing things you love and with the people you love.
     
ตัวอย่างบอทเทรดกริด
ใช้  Grid Trading Bot เพื่อทำกำไรในตลาดไซด์เวย์ที่ผันผวนด้วย BTC/USDT Trading-Pair ตั้งค่าพารามิเตอร์ดังนี้:

ราคาสูงสุด: 8000 USDT
ราคาขีดจำกัดล่าง: 5000 USDT
ปริมาณกริด: 10
ปริมาณต่อตาราง: 1 BTC
หลังจากสร้างบอทแล้ว บอทจะแบ่งช่วงจาก 5,000 ถึง 8000 ออกเป็น 10 ส่วน (กริด) และสั่งซื้อในแต่ละส่วนเหล่านี้ เมื่อราคาผันผวน มันจะดำเนินการตามคำสั่งซื้อทุกครั้งที่ราคาลดลงเล็กน้อย และคำสั่งขายเมื่อใดก็ตามที่ราคาสูงขึ้นเล็กน้อย ตราบใดที่ราคายังอยู่ในช่วง 5000–8000 คุณจะได้รับผลกำไรเล็กน้อยสำหรับคำสั่งซื้อและขายทุกชุดที่ได้รับการกระตุ้น

หากคุณตั้งราคา Stop-loss สำหรับ Grid Trading Bot มันจะยกเลิกเองและสกุลเงินหลักทั้งหมดจะถูกขายให้กับสกุลเงินอ้างอิง เมื่อราคาลดลงต่ำกว่านั้น ตัวอย่างเช่น หากคุณเปิดบอทบนคู่ BTC/USDT บอทจะขาย BTC ของคุณให้กับ USDT และปิดบอทเมื่อราคาถึงราคาหยุดการขาดทุนของคุณ


      </div>
      </Link>
    )
  }