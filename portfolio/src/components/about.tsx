import profile from "../assets/image/profileimg.jpg";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 mx-auto max-w-6xl">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-left">About</h2>
      </div>

      {/* === 自己紹介セクション === */}
      <div className="relative glass p-8 md:p-16 rounded-lg shadow-lg bg-white/10 flex flex-col md:flex-row items-start">
        <img
          src={profile}
          alt="Profile"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full mb-6 md:mb-0 md:mr-8 object-cover"
        />
        
        <div className="text-left w-full">
          <p className="leading-7 opacity-90">
            こんにちは、Toku109です。<br />
          </p>

          <p className="leading-7 opacity-90 mt-4">
            大手通信会社でデータ分析を中心にシステム開発やUI/UX改善の検討業務を担当。
            2025年からはコンサルティング会社に転職し、ITコンサルタントとして新たなキャリアをスタートします。
          </p>

          <p className="leading-7 opacity-90 mt-4">
            趣味でWeb開発やデザインを行っており、個人プロジェクトとしてこのポートフォリオサイトを制作しました。
            技術力とデザインセンスを磨き、魅力的なプロダクトを生み出していきたいと考えています。
          </p>

          {/* === タイムライン（職歴・学歴） === */}
          <div className="mt-16 grid md:grid-cols-2 gap-10">
            {/* 職歴 */}
            <div>
              <h3 className="text-2xl font-bold text-cyan-300 mb-6 text-left">Career</h3>
              <div className="relative ml-4 before:content-[''] before:absolute before:left-[7px] before:top-0 before:w-[2px] before:h-full before:bg-cyan-300">
                {[
                  {
                    year: "2025年〜現在",
                    title: "コンサルティング会社",
                    details: ["2025.12 ITコンサルタントとして入社予定"],
                  },
                  {
                    year: "2022年〜2025年",
                    title: "通信会社",
                    details: [
                      "GA4 / GTM を用いたイベント設計とデータ分析",
                      "UIUX改善を目的とした数値分析・施策提案",
                      "BigQuery / SQL / Tableau による可視化・レポート運用",
                    ],
                  },
                ].map((job, i) => (
                  <div key={i} className="relative pl-10 pb-8">
                    <span className="absolute left-[2px] top-[6px] w-3.5 h-3.5 bg-cyan-300 rounded-full border-2 border-white"></span>
                    <p className="text-sm text-cyan-200 mb-1">{job.year}</p>
                    <h4 className="font-semibold">{job.title}</h4>
                    <ul className="list-disc list-inside text-sm opacity-90 mt-2 space-y-1">
                      {job.details.map((d, j) => (
                        <li key={j}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* 学歴 */}
            <div>
              <h3 className="text-2xl font-bold text-cyan-300 mb-6 text-left">Education</h3>
              <div className="relative ml-4 before:content-[''] before:absolute before:left-[7px] before:top-0 before:w-[2px] before:h-full before:bg-cyan-300">
                {[
                  {
                    year: "2020年〜2022年",
                    title: "大学院",
                    details: ["情報工学専攻", "修士（工学）", "手の触覚知能の研究に従事"],
                  },
                  {
                    year: "2018年〜2020年",
                    title: "国立高専 専攻科",
                    details: ["電子工学専攻", "学士（工学）", "VRとロボットの研究に従事"],
                  },
                ].map((edu, i) => (
                  <div key={i} className="relative pl-10 pb-8">
                    <span className="absolute left-[2px] top-[6px] w-3.5 h-3.5 bg-cyan-300 rounded-full border-2 border-white"></span>
                    <p className="text-sm text-cyan-200 mb-1">{edu.year}</p>
                    <h4 className="font-semibold">{edu.title}</h4>
                    <ul className="list-disc list-inside text-sm opacity-90 mt-2 space-y-1">
                      {edu.details.map((d, j) => (
                        <li key={j}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
