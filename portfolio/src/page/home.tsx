import HeaderImage from '../components/header_image'
import BridgeCard from '../components/bridge_card'

const Home = () => {
  return (
    <div className="text-white">
      <HeaderImage />
      <BridgeCard />
      <section className="py-16 text-center">
        <div className="glass max-w-3xl mx-auto -mt-8 px-4 py-3 text-center bg-white/10">
          Designer / Developer — Tokyo, JP
        </div>
        <a
          href="#projects"
          className="glass px-6 py-3 mt-6 inline-block rounded-full border border-white/30 hover:bg-white/20 transition"
        >
          View My Work
        </a>
      </section>
    </div>
  )
}

export default Home