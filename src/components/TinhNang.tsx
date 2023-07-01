import { TINHNANGLIST } from "../constants"
import Card from "./Card"

function TinhNang() {
  return (
    <section className="bg-cl py-10">
      <div className="container mx-auto">
        <h2 className="text-heading mb-8">Tính năng nổi bật</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card ListTinhNang={TINHNANGLIST} />
        </div>
      </div>
    </section>
  )
}

export default TinhNang