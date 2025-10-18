import { useMemo, useState } from "react";

// ===== 型定義 =====
type Work = {
  id: string;
  title: string;
  summary: string;
  result: string;          // 代表成果（数値）
  stack: string[];         // 使用技術
  category: "Analytics" | "Dashboard" | "Web";
  cover?: string;          // 画像パス（任意）
  details: string;         // 詳細説明（モーダル用）
};

// ===== ダミーデータ（あとで自由に差し替え） =====
const WORKS: Work[] = [
  {
    id: "ec-funnel",
    title: "ECファネルの計測設計と改善",
    summary:
      "GTM/GA4のイベント設計 → SQLで集計 → ボトルネック特定とUI改善まで伴走。",
    result: "CVR +18% / 離脱 -12%",
    stack: ["GA4", "GTM", "MySQL", "Python"],
    category: "Analytics",
    cover: "/assets/works/ec-funnel.jpg",
    details:
      "全ファネルイベントを再定義し、セッション単位での行動系列を可視化。重要KPIの警告しきい値を設定し週次で監視。UI改修後のABテストで改善を検証。",
  },
  {
    id: "slack-notification",
    title: "Slackの自動通知システムの構築",
    summary:
      "スクレイピング結果を定期的にSlackに通知するシステムを構築",
    result: "自動通知システム構築",
    stack: ["Python", "GAS", "Github Actions", "Slack API"],
    category: "Web",
    cover: "../src/assets/image/slack_notification.png",
    details:
      "Slack APIとGASを用いて、スクレイピングしたデータを定期的にSlackチャンネルに通知するシステムを構築。Github Actionsで自動化し、手動での確認作業を削減。",
  },
  {
    id: "django-backend",
    title: "マッチングサービスのバックエンド構築",
    summary:
      "Python/Djangoで会員管理・マッチングロジックのバックエンドを開発。",
    result: "バックエンド開発",
    stack: ["Python", "Django", "SQLite", "Docker", "HTML/CSS",],
    category: "Web",
    cover: "../src/assets/image/matching_backend.png",
    details:
      "Python/Djangoで会員登録・プロフィール管理・マッチングロジックを実装。UI/UX改善も担当し、フロントエンドと連携しマッチングサービスのWebアプリケーションを作成。APIを設計し、フロント側に会員データやマッチング情報を提供。",
  },
];

// ===== タブ =====
const TABS = ["All", "Analytics", "Dashboard", "Web"] as const;
type Tab = (typeof TABS)[number];

// ===== カード =====
function WorkCard({ w, onOpen }: { w: Work; onOpen: (w: Work) => void }) {
  return (
    <button
      onClick={() => onOpen(w)}
      className="text-left group rounded-2xl overflow-hidden border border-white/15 bg-white/5 hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-white/30"
    >
      <div className="aspect-video w-full bg-white/5 overflow-hidden">
        {w.cover ? (
          <img src={w.cover} alt={w.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/0" />
        )}
      </div>

      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold">{w.title}</h3>
        <p className="text-sm opacity-85">{w.summary}</p>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/15">
            {w.result}
          </span>
          {w.stack.map((s) => (
            <span
              key={s}
              className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 opacity-90"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}

// ===== モーダル =====
function WorkModal({ work, onClose }: { work: Work; onClose: () => void }) {
  if (!work) return null;
  return (
    <div
      className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="glass max-w-3xl w-full p-6 md:p-8 border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl md:text-2xl font-bold">{work.title}</h3>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-md border border-white/20 hover:bg-white/10"
          >
            閉じる
          </button>
        </div>

        {work.cover && (
          <div className="mt-4 aspect-video overflow-hidden rounded-lg">
            <img src={work.cover} alt="" className="w-full h-full object-cover" />
          </div>
        )}

        <div className="mt-5 grid md:grid-cols-3 gap-4 text-sm">
          <div className="md:col-span-2 leading-7 opacity-95">{work.details}</div>
          <div className="space-y-2">
            <div>
              <div className="text-xs opacity-70">成果</div>
              <div className="text-sm font-medium">{work.result}</div>
            </div>
            <div>
              <div className="text-xs opacity-70">使用技術</div>
              <div className="flex flex-wrap gap-2 mt-1">
                {work.stack.map((s) => (
                  <span key={s} className="text-xs px-2 py-1 rounded bg-white/10 border border-white/15">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ===== Works セクション本体 =====
export default function MyWorks() {
  const [tab, setTab] = useState<Tab>("All");
  const [current, setCurrent] = useState<Work | null>(null);

  const filtered = useMemo(() => {
    if (tab === "All") return WORKS;
    return WORKS.filter((w) => w.category === tab);
  }, [tab]);

  return (
    <section id="works" className="px-6 py-24 mx-auto max-w-6xl">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">My Works</h2>
        <div className="flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-3 py-1.5 rounded-full border ${
                tab === t
                  ? "bg-white/20 border-white/40"
                  : "bg-white/5 border-white/20 hover:bg-white/10"
              }`}
            >
              {t === "All" ? "すべて" : t}
            </button>
          ))}
        </div>
      </div>

      <p className="opacity-80 mb-8">
        編集中です。実績は今後も追加予定です。
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((w) => (
          <WorkCard key={w.id} w={w} onOpen={setCurrent} />
        ))}
      </div>

      {current && <WorkModal work={current} onClose={() => setCurrent(null)} />}
    </section>
  );
}
