import './index.css'
import heroBg from './assets/image/mysite_header.png' // 保存した画像を読み込む

function HeaderImage() {
  return (
    <div
      className="relative w-full h-[40vh] overflow-hidden"
      style={{
        WebkitMaskImage:
          'linear-gradient(to bottom, black 70%, transparent 100%)',
        maskImage:
          'linear-gradient(to bottom, black 70%, transparent 100%)',
      }}
    >
      <img
        src={heroBg}
        alt="Header"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      {/* 文字を見やすくする場合 */}
      <div className="absolute inset-0 bg-black/35" />
      {/* 任意：境目に柔らかいシャドウ */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-b from-transparent to-[#0a1e96]" />
      {/* ナビゲーション */}
      <nav className="absolute top-0 left-0 w-full z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-end items-center text-white font-medium space-x-4">
          <a href="#about" className="hover:text-gray-200 transition">About</a>
          <span className="opacity-50">｜</span>
          <a href="#works" className="hover:text-gray-200 transition">My Works</a>
          <span className="opacity-50">｜</span>
          <a href="#contact" className="hover:text-gray-200 transition">Contact</a>
        </div>
      </nav>
      {/* ヘッダーテキストを重ねるなら */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-5xl font-bold">Hello, I’m Ryunosuke</h1>
      </div>
    </div>
  );
}

function BridgeCard() {
  return (
    <div className="relative z-10 -mt-10 mx-auto max-w-5xl px-4">
      <div className="glass px-6 py-5 rounded-3xl border border-white/25 shadow-glass">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="opacity-90">Designer / Developer — Tokyo, JP</p>
          <a
            href="#projects"
            className="px-4 py-2 rounded-full border border-white/30 bg-white/15 hover:bg-white/25 backdrop-blur-xl transition"
          >
            View My Work
          </a>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="text-white">
      {/* ナビを上に載せるならここ */}
      {/* <Navbar /> */}

      <HeaderImage />
      <BridgeCard />

      {/* Heroは画像の下に置く */}
      <section className="py-16 text-center">
        <div className="glass max-w-3xl mx-auto -mt-8 px-4 py-3 text-center bg-white/10">
          esigner / Developer — Tokyo, JP
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

export default App
