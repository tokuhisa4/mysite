import heroBg from '../assets/image/mysite_header.png'
import logo from '../assets/image/Logo.png' // ロゴ画像のパスを指定

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
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-b from-transparent to-[#0a1e96]" />
      {/* ナビゲーション */}
      <nav className="absolute top-0 left-0 w-full z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white font-medium">
          {/* 左側：ロゴ */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-12 mr-2" />
          </a>
          {/* 右側：メニュー */}
          <div className="flex items-center space-x-4">
            <a href="#about" className="hover:text-gray-200 transition">About</a>
            <span className="opacity-50">｜</span>
            <a href="#works" className="hover:text-gray-200 transition">My Works</a>
            <span className="opacity-50">｜</span>
            <a href="#contact" className="hover:text-gray-200 transition">Contact</a>
          </div>
        </div>
      </nav>
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-5xl font-bold">Hello, I’m Toku109</h1>
      </div>
    </div>
  );
}

export default HeaderImage