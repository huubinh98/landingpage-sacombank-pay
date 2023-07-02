import Button from "./Button"

function GioiThieu() {
  function handleClickTraiNghiem() {
    return console.log('first')
  }

  return (
    <section className='bg-introduce py-10'>
      <div className="container mx-auto">
        <div className="block text-center md:text-left md:flex justify-between items-center gap-6">
          <div className="mb-8">
            <h2 className="text-heading text-4xl font-bold mb-8">Giới thiệu</h2>
            <p className="text-xl font-bold mb-1">Sacombank Pay là ứng dụng quản lý tài chính trên thiết bị di động</p>
            <p className="text-xl font-bold mb-8">Ứng dụng quản lý tài chính
              mang đến cho bạn trải nghiệm tuyệt vời</p>
            <Button title="Trải nghiệm ngay" onClick={handleClickTraiNghiem} />
          </div>
          <div className="rounded-xl overflow-hidden w-full lg:w-[748px] lg:h-[408px] h-72">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/wHQ22bBxnfs" title="Sở hữu ngay Thẻ tín dụng Sacombank" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      </div >
    </section >
  )
}

export default GioiThieu