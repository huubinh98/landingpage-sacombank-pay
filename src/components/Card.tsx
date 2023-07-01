import { ITinhNangList } from "../model"


function Card({ ListTinhNang }: { ListTinhNang: ITinhNangList[] }) {
  return (
    <>
      {
        ListTinhNang.map(item => (
          <div key={item.id} className="drop-shadow-lg bg-white p-6 rounded-2xl">
            <div className="flex items-center gap-4 mb-6">
              <img src={item.src} alt="" />
              <h4 className="flex-1 text-xl font-bold" style={{ color: '#0171BA' }}>{item.title}</h4>
            </div>
            <ul className="pl-6">
              {item.listDesc.map((itemList, index) => (
                <li className="list-disc text-sm mb-1" key={index}>{itemList}</li>
              ))}
            </ul>
            <p className="text-sm pl-2">Xem hướng dẫn <a href={item.url} style={{ color: '#0171BA' }}>tại đây</a></p>
          </div>
        ))
      }
    </>
  )
}

export default Card