import { HOIDAP } from "../constants"

function HoiDap() {
  return (
    <section className="bg-cl py-10">
      <div className="container mx-auto max-w-[1200px]">
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {HOIDAP.map(item => (
            <figure key={item.id} className="text-center">
              <img src={item.src} alt="" className="mx-auto mb-5" />
              <figcaption>
                <h5 className="text-xl mb-5">{item.title}</h5>
                {item.link && <a href="" style={{ color: '#0171BA' }}>{item.link}</a>}
                {item.desc && <p>{item.desc}</p>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HoiDap