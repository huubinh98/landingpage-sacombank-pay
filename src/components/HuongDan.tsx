import { HUONGDANG } from "../constants"
import Button from "./Button"

function HuongDan() {
  function handleDangky() {
    return console.log('đăng ký')
  }
  return (
    <section className="container mx-auto py-10">
      <h2 className="text-heading mb-8">Hướng Dẫn</h2>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 mb-20">
        {HUONGDANG.map(item => (
          <div key={item.id} className="drop-shadow-lg bg-white p-6 rounded-2xl flex gap-2">
            <div className="flex-1">
              <h4 className="text-xl font-bold mb-6" style={{ color: '#0171BA' }}>{item.title}</h4>
              <p dangerouslySetInnerHTML={{ __html: item.desc }} />
            </div>
            {item.src && <img src={item.src} alt="qr sacombank pay" />}
          </div>
        ))}
      </div>
      <div className="w-full text-center">
        <Button title="Đăng ký nhanh" onClick={handleDangky} />
      </div>
    </section>
  )
}

export default HuongDan