import { LOIICHLIST } from "../constants";

function TienIch() {
  return (
    <section className="container mx-auto py-10">
      <h2 className="text-heading text-center lg:text-left">Lợi ích</h2>
      <div className="w-full lg:w-[85%] mx-auto relative">
        <div className="w-full">
          <img
            src="/images/image-tienich.png"
            alt="tien ich sacombank"
            className="max-w-[400px] -translate-x-1/2 md:-translate-x-7 lg:translate-x-0"
          />
        </div>
        <div className="flex flex-col gap-6 items-end absolute right-2 top-0 w-[85%] justify-center h-full -z-10
            md:right-auto  md:left-[15%] md:items-start">
          {LOIICHLIST.map((item, index) => (
            <div
              className="
              benefit-item px-3 py-3 gap-2 background-linear flex justify-end items-center h-10 w-64 rounded-r-none rounded-l-full
              md:flex-row-reverse md:rounded-full
              md:justify-start md:h-auto md:w-full
              lg:px-8 lg:py-4 lg:gap-5 
              "
              key={index}
            >
              <div className="w-6 h-6 md:w-12 md:h-12 rounded-full bg-white flex justify-center items-center">
                <span className="md:text-xl font-bold text-sky-500">
                  {index + 1}
                </span>
              </div>
              <h4 className="text-sm lg:text-2xl font-bold text-white flex-1 md:text-end">
                {item}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TienIch;
