import { FOOTERLIST, LINKSOCIALNETWORK, MENU } from '../constants'

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <footer>
      <section className='py-6' style={{ background: '#0071BB' }}>
        <div className='container mx-auto'>
          <div className="md:flex md:justify-between md:items-center">
            <div>
              <div className='mb-4'>
                <a href=""><img src="/images/Logo.png" alt="" className='mx-auto lg:mx-0' /></a>
              </div>
              <ul className='lg:flex text-center'>
                {MENU.map((item, index) => (
                  <li className='menu-footer px-4' key={index}><a href="#" className='text-white text-sm'>{item}</a></li>
                ))}
              </ul>
            </div>
            <div className='flex items-center justify-center gap-4'>
              <div className='flex'>
                <img src="/images/danhhieu.png" alt="" />
                <img src="/images/danhhieu-2.png" alt="" />
                <img src="/images/danhhieu-3.png" alt="" />
                <img src="/images/danhhieu-4.png" alt="" />
              </div>
              <button className='text-white text-md btn-footer' onClick={scrollToTop}>Về đầu trang</button>
            </div>
          </div>
        </div>
      </section>
      <section className='py-6' style={{ background: '#0062a2' }}>
        <div className="container mx-auto">
          <div className='grid gap-4 grid-cols-1 md:gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 '>
            {FOOTERLIST.map(item => (
              <div key={item.id} className='text-center'>
                <h5 className='font-bold text-white mb-2'>{item.title}</h5>
                <ul>
                  {item.link && item.link.map((item, index) => (
                    <li key={index}>
                      <a href="" className='text-gray-300 hover:text-white text-sm'>{item}</a>
                    </li>
                  ))}
                  {item.img && item.img.map((img, index) => (
                    <li key={index} className='mb-2'>
                      <a href=""><img src={img} alt="" className='mx-auto' /></a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: '#00436e' }}>
        <div className='container mx-auto md:flex justify-between items-center py-4'>
          <ul className='flex justify-center'>
            {LINKSOCIALNETWORK.map((item, index) => (
              <li key={index} className='p-3 social-footer'>
                <a href="">
                  <img src={item} />
                </a>
              </li>
            ))}
          </ul>
          <p className='text-white'>© 2023 Bản quyền thuộc về Ngân hàng TMCP Sài Gòn Thương Tín (Sacombank).</p>
        </div>
      </section>
    </footer>
  )
}

export default Footer