import heroBg from '../assets/image/mysite_header.png'

const HeaderImage = () => (
  <div className="relative h-64 w-full">
    <img
      src={heroBg}
      alt="Header"
      className="object-cover w-full h-full"
    />
    {/* 必要なら他の要素も追加 */}
  </div>
)

export default HeaderImage