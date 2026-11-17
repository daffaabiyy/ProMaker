import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2, FileCheck2, Gauge, Download, Sparkles, Clock, Layers, MousePointerClick, FileDown, Menu, X, Play, ChevronLeft, ChevronRight, Home, FileText, LayoutGrid } from "lucide-react";
import { TOOLS } from "./tools.js";

const CV_URL = TOOLS.find((t) => t.id === "cv").url;
const YEAR = new Date().getFullYear();

function Logo() {
  return (
    <a href="#top" className="logo" aria-label="ProMaker">
      <span className="logo-mark">
        <svg viewBox="0 0 64 64" width="20" height="20" aria-hidden="true"><path d="M20 44V20h12a8 8 0 0 1 0 16H20" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </span>
      <span className="logo-text">ProMaker</span>
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const close = () => setOpen(false);
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Logo />
        <nav className={`nav-links${open ? " open" : ""}`} aria-label="Navigasi utama">
          <a href="#top" onClick={close}>Beranda</a>
          <a href="#tools" onClick={close}>Semua tools</a>
          <a href="#cara-kerja" onClick={close}>Cara kerja</a>
          <a href="#faq" onClick={close}>FAQ</a>
        </nav>
        <button className="nav-toggle" aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

// Mock CV card used in the hero (real content, not placeholder bars).
function MiniCv() {
  return (
    <div className="minicv">
      <div className="minicv-head">
        <svg viewBox="0 0 100 100" className="minicv-avatar" aria-hidden="true">
          <defs><linearGradient id="av" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#E9DDFB" /><stop offset="1" stopColor="#FBD9EC" /></linearGradient></defs>
          <rect width="100" height="100" fill="url(#av)" />
          <ellipse cx="50" cy="104" rx="40" ry="32" fill="#4C1D95" />
          <rect x="44" y="58" width="12" height="16" fill="#E8B48F" />
          <ellipse cx="50" cy="40" rx="22" ry="26" fill="#2A1B4D" />
          <ellipse cx="50" cy="46" rx="18" ry="21" fill="#F3C6A3" />
          <path d="M31 36a19 13 0 0 1 38 0z" fill="#2A1B4D" />
          <circle cx="43" cy="47" r="1.6" fill="#2A1B4D" /><circle cx="57" cy="47" r="1.6" fill="#2A1B4D" />
          <path d="M45 55q5 4 10 0" stroke="#B8604A" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        </svg>
        <div>
          <b>Ayu Ramadhani</b>
          <span>UI/UX Designer</span>
          <small>ayu.ramadhani@email.com</small>
        </div>
      </div>
      <div className="minicv-body">
        <h5>Ringkasan</h5>
        <p>Desainer produk dengan 4 tahun pengalaman merancang antarmuka mobile dan web.</p>
        <h5>Pengalaman</h5>
        <div className="minicv-row"><b>Product Designer</b><i>2022 – Sekarang</i></div>
        <p>PT Teknologi Nusantara · Jakarta</p>
        <div className="minicv-row"><b>UI Designer</b><i>2020 – 2022</i></div>
        <p>Studio Kreasi Digital · Bandung</p>
        <h5>Skill</h5>
        <div className="minicv-chips"><span>Figma</span><span>User Research</span><span>Design System</span></div>
      </div>
      <div className="minicv-scan" />
    </div>
  );
}

const SW = 640, SH = 400;
const CHIPS = {
  cv: [[FileCheck2, "ATS-Friendly"], [Sparkles, "Template Modern"], [Download, "Unduh PDF Instan"]],
  soon: [[Clock, "Segera hadir"], [Layers, "Terhubung ke ProMaker"]],
};

function CvScreen() {
  const side = [[Home, "Beranda"], [FileText, "Buat CV", true], [LayoutGrid, "Template"], [Gauge, "Skor ATS"]];
  return (
    <div className="app">
      <aside className="app-side">
        <div className="app-logo"><span>P</span>ProMaker</div>
        {side.map(([Ic, t, on]) => <div key={t} className={`app-nav${on ? " on" : ""}`}><Ic size={13} />{t}</div>)}
      </aside>
      <div className="app-main">
        <div className="app-top">
          <div><b>Buat CV</b><small>Isi data, pilih template, lalu unduh CV-mu.</small></div>
          <span className="app-btn"><Download size={12} /> Unduh PDF</span>
        </div>
        <div className="app-body">
          <div className="app-form">
            <div className="app-tabs"><i className="on">Data CV</i><i>Desain</i><i>Atur</i></div>
            <h6>Pilih template</h6>
            <div className="app-tpls">{[0, 1, 2, 3, 4, 5].map((n) => (
              <div key={n} className={`app-tpl${n === 0 ? " on" : ""}`}><i style={{ background: n % 2 ? "#e9ddfb" : "#7c3aed" }} /><u /><u /><u /></div>
            ))}</div>
            <h6>Warna tema</h6>
            <div className="app-dots">{["#7c3aed", "#6366f1", "#ec4899", "#14b8a6"].map((c) => <i key={c} style={{ background: c }} />)}</div>
          </div>
          <div className="app-prev"><MiniCv /></div>
        </div>
      </div>
    </div>
  );
}

function SoonScreen({ tool }) {
  const sc = (tool && tool.screen) || { title: "Tools berikutnya", sub: "Sedang dirancang dan akan muncul di sini." };
  return (
    <div className="app soon-screen">
      <div className="soon-card">
        <span className="soon-ic"><Clock size={26} /></span>
        <b>{sc.title}</b>
        <small>{sc.sub}</small>
        <div className="soon-lines"><u /><u /><u /></div>
      </div>
    </div>
  );
}

const AUTO_MS = 5000;

function HeroShowcase({ i, prev, dir, go }) {
  const [scale, setScale] = useState(0.8);
  const screenRef = useRef(null);
  const lidRef = useRef(null);
  const firstRun = useRef(true);
  const n = TOOLS.length;
  const reduce = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  useEffect(() => {
    const el = screenRef.current; if (!el) return undefined;
    const fit = () => setScale(el.clientWidth / SW);
    fit();
    if (typeof ResizeObserver === "undefined") return undefined;
    const ro = new ResizeObserver(fit); ro.observe(el);
    return () => ro.disconnect();
  }, []);
  // Auto-advance every AUTO_MS. A manual click changes `i`, which restarts the timer.
  useEffect(() => {
    if (n < 2) return undefined;
    let t;
    const arm = () => { clearTimeout(t); t = setTimeout(() => { if (!document.hidden) go((i + 1) % n, 1); else arm(); }, AUTO_MS); };
    arm();
    return () => clearTimeout(t);
  }, [i, n]);
  useEffect(() => {
    if (firstRun.current) { firstRun.current = false; return; }
    const el = lidRef.current;
    if (reduce || !el || !el.animate) return;
    el.animate([
      { transform: "translateY(0) rotateY(0deg) rotateZ(0deg)" },
      { transform: `translateY(-7px) rotateY(${dir * -5}deg) rotateZ(${dir * 0.6}deg)`, offset: 0.42 },
      { transform: "translateY(0) rotateY(0deg) rotateZ(0deg)" },
    ], { duration: 600, easing: "cubic-bezier(.22,.8,.3,1)" });
  }, [i]);
  const cur = TOOLS[i];
  const chips = CHIPS[cur.status === "live" ? cur.id : "soon"] || CHIPS.soon;
  return (
    <div className="showcase rise d2" style={{ "--auto": `${AUTO_MS}ms` }}>
      <div className="glow" />
      <div className="laptop-wrap">
        <div className="laptop">
          <div className="lid" ref={lidRef}>
            <span className="cam" />
            <div className="screen" ref={screenRef} style={{ "--dir": dir }}>
              <div className="fit" style={{ width: SW, height: SH, transform: `scale(${scale})` }}>
                <div className="track">
                  {TOOLS.map((t, k) => (
                    <div className={`slide${k === i ? " on" : k === prev ? " off" : ""}`} key={t.id}>
                      {t.status === "live" ? <CvScreen /> : <SoonScreen tool={t} />}
                    </div>
                  ))}
                </div>
              </div>
              <span className="glare" key={`g${i}`} />
            </div>
          </div>
          <div className="base" />
        </div>
        <div className="chips" key={i} style={{ "--dir": dir }}>
          {chips.map(([Ic, t], k) => (
            <div className="chip2" style={{ animationDelay: `${k * 0.12}s` }} key={t}><Ic size={15} /> <span>{t}</span><CheckCircle2 size={15} className="ok" /></div>
          ))}
        </div>
      </div>
      <div className="show-ctrl">
        <button aria-label="Tools sebelumnya" onClick={() => go((i - 1 + n) % n, -1)}><ChevronLeft size={18} /></button>
        <div className="show-dots">
          {TOOLS.map((t, k) => <button key={t.id} aria-label={`Tampilkan ${t.name}`} className={k === i ? "on" : ""} onClick={() => go(k, k > i ? 1 : -1)} />)}
        </div>
        <button aria-label="Tools berikutnya" onClick={() => go((i + 1) % n, 1)}><ChevronRight size={18} /></button>
      </div>
      <p className="show-name" key={`n${i}`}>{cur.name}</p>
    </div>
  );
}

const STAT_ICONS = { layers: Layers, gauge: Gauge, download: Download, clock: Clock, sparkles: Sparkles, pointer: MousePointerClick };

function HeroArea() {
  const [st, setSt] = useState({ i: 0, prev: -1, dir: 1 });
  const { i, prev, dir } = st;
  const go = (n, d) => setSt((s) => (s.i === n ? s : { i: n, prev: s.i, dir: d }));
  const cur = TOOLS[i];
  const h = cur.hero;
  const href = h.cta.href || cur.url;
  return (
    <>
      <section className="hero" id="top">
        <div className="blob blob-a" /><div className="blob blob-b" />
        <div className="wrap hero-grid">
          <div className="hero-copy rise">
            <div className="hero-swap" key={i} style={{ "--dir": dir }}>
              <span className="badge"><Sparkles size={14} /> {h.badge}</span>
              <h1>{h.title.map(([txt, g], k) => (g ? <span className="grad" key={k}>{txt}</span> : <span key={k}>{txt}</span>))}</h1>
              <p className="lead">{h.lead}</p>
              <div className="cta-row">
                <a className="btn btn-primary btn-lg" href={href}>{h.cta.label} <ArrowRight size={17} /></a>
                <a className="btn btn-outline btn-lg" href="#cara-kerja"><Play size={14} /> Lihat Cara Kerja</a>
              </div>
              <ul className="trust">
                {h.trust.map((x) => <li key={x}><CheckCircle2 size={16} /> {x}</li>)}
              </ul>
            </div>
          </div>
          <HeroShowcase i={i} prev={prev} dir={dir} go={go} />
        </div>
      </section>
      <div className="statband">
        <div className="wrap stat-in" key={`s${i}`} style={{ "--dir": dir }}>
          <p className="stat-lead">{h.statLead}</p>
          {h.stats.map(([ic, a, b]) => { const Ic = STAT_ICONS[ic] || Sparkles; return (
            <div className="stat" key={a}><Ic size={26} /><div><b>{a}</b><span>{b}</span></div></div>
          ); })}
        </div>
      </div>
    </>
  );
}

function ToolCard({ tool, featured }) {
  if (tool.status === "soon") {
    return (
      <div className="tool tool-soon">
        <span className="tool-ic soon"><Clock size={20} /></span>
        <span className="pill pill-soon">Segera hadir</span>
        <h3>{tool.name}</h3>
        <p className="tool-tag">{tool.tagline}</p>
        <p className="tool-desc">{tool.description}</p>
      </div>
    );
  }
  return (
    <a className={`tool tool-live${featured ? " featured" : ""}`} href={tool.url}>
      <div className="tool-main">
        <span className="tool-ic"><FileCheck2 size={22} /></span>
        <span className="pill pill-live"><span className="pulse sm" /> Sudah tersedia</span>
        <h3>{tool.name}</h3>
        <p className="tool-tag">{tool.tagline}</p>
        <p className="tool-desc">{tool.description}</p>
        {tool.points && (
          <ul className="tool-points">{tool.points.map((p) => <li key={p}><CheckCircle2 size={15} /> {p}</li>)}</ul>
        )}
        <span className="tool-go">Buka {tool.name} <ArrowUpRight size={17} /></span>
      </div>
      {featured && <div className="tool-preview" aria-hidden="true"><MiniCv /></div>}
    </a>
  );
}

function Tools() {
  const live = TOOLS.filter((t) => t.status === "live");
  const soon = TOOLS.filter((t) => t.status === "soon");
  return (
    <section className="section" id="tools">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow"><Layers size={14} /> Semua tools</span>
          <h2>Pilih tools yang kamu butuhkan</h2>
          <p>Setiap tools adalah website tersendiri dan dibuka langsung dari ProMaker.</p>
        </div>
        <div className="tools-grid">
          {live.map((t) => <ToolCard key={t.id} tool={t} featured />)}
          {soon.map((t) => <ToolCard key={t.id} tool={t} />)}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { icon: MousePointerClick, title: "Pilih tools", text: "Buka ProMaker lalu pilih website yang sesuai kebutuhanmu, misalnya CV Pro Maker." },
  { icon: Sparkles, title: "Isi dan sesuaikan", text: "Isi data, pilih template, lalu lihat hasil dan skor kesiapannya langsung." },
  { icon: FileDown, title: "Unduh hasilnya", text: "Simpan sebagai PDF yang rapi dan siap dikirim ke perusahaan impianmu." },
];

function HowItWorks() {
  return (
    <section className="section alt" id="cara-kerja">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow"><Sparkles size={14} /> Cara kerja</span>
          <h2>Tiga langkah, tanpa ribet</h2>
        </div>
        <div className="steps">
          {STEPS.map((s, i) => (
            <div className="step" key={s.title}>
              <span className="step-n">{i + 1}</span>
              <span className="step-ic"><s.icon size={22} /></span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQ = [
  { q: "Apa itu ProMaker?", a: "ProMaker adalah website utama yang menghimpun beberapa tools digital. Setiap tools punya website sendiri dan bisa dibuka langsung dari sini." },
  { q: "Bagaimana cara membuat CV?", a: "Klik tombol Buat CV. Kamu akan diarahkan ke CV Pro Maker, tempat kamu memilih template, mengisi data, mengecek skor ATS, dan mengunduh PDF." },
  { q: "Apakah akan ada tools lain?", a: "Ya. Kartu Segera hadir di atas adalah tempat untuk website berikutnya. Tools baru akan muncul di halaman ini begitu siap dipakai." },
];

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id="faq">
      <div className="wrap narrow">
        <div className="sec-head center">
          <span className="eyebrow">FAQ</span>
          <h2>Pertanyaan yang sering muncul</h2>
        </div>
        <div className="faq">
          {FAQ.map((f, i) => (
            <div className={`faq-item${open === i ? " on" : ""}`} key={f.q}>
              <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
                {f.q}<span className="faq-plus" aria-hidden="true" />
              </button>
              <div className="faq-a"><div><p>{f.a}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="cta-band">
      <div className="wrap cta-in">
        <div>
          <h2>Siap membuat CV yang lolos ATS?</h2>
          <p>Mulai dalam hitungan menit, langsung dari browser.</p>
        </div>
        <a className="btn btn-light" href={CV_URL}>Buat CV sekarang <ArrowRight size={17} /></a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-in">
        <Logo />
        <div className="foot-links">
          <a href="#tools">Tools</a>
          <a href="#cara-kerja">Cara kerja</a>
          <a href="#faq">FAQ</a>
          <a href={CV_URL}>CV Pro Maker</a>
        </div>
        <small>© {YEAR} ProMaker. Semua hak dilindungi.</small>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (typeof IntersectionObserver === "undefined") { els.forEach((e) => e.classList.add("in")); return undefined; }
    const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: 0.12 });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
  return (
    <>
      <Nav />
      <main>
        <HeroArea />
        <div className="reveal"><Tools /></div>
        <div className="reveal"><HowItWorks /></div>
        <div className="reveal"><Faq /></div>
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
