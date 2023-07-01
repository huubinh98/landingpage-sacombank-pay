import Header from './components/Header'
import Slider from './components/Slider'
import GioiThieu from './components/GioiThieu'
import TienIch from './components/TienIch'
import TinhNang from './components/TinhNang'
import HuongDan from './components/HuongDan'
import HoiDap from './components/HoiDap'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Slider />
      <main>
        <GioiThieu />
        <TienIch />
        <TinhNang />
        <HuongDan />
        <HoiDap />
      </main>
      <Footer />
    </>
  )
}

export default App
