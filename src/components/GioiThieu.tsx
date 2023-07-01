
function GioiThieu() {
  return (
    <section className='bg-introduce py-10'>
      <div className="container mx-auto">
        <div className="block md:flex justify-between items-center gap-6">
          <div>
            <h2 className="text-heading text-4xl font-bold mb-8">Giới thiệu</h2>
            <p className="text-xl font-bold">Sacombank Pay là ứng dụng quản lý tài chính trên thiết bị di động</p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <iframe width="748" height="408" src="https://www.youtube.com/embed/wHQ22bBxnfs" title="Sở hữu ngay Thẻ tín dụng Sacombank" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            {/* <img src="/images/gioi-thieu-1.jpg" alt="gioi thieu sacombank" /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GioiThieu