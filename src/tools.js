// Daftar tools yang tampil di ProMaker. Untuk menambah website baru, cukup tambah satu objek di sini.
// status: "live" (sudah bisa dipakai) atau "soon" (segera hadir).
// hero: teks hero + baris statistik yang tampil saat tools ini aktif di slide.
// title: potongan teks, [teks, true] = pakai warna gradien. stats.icon: layers|gauge|download|clock|sparkles|pointer.
const SOON_HERO = {
  badge: "Segera hadir",
  title: [["Tools baru ", false], ["sedang disiapkan", true], [" untuk kariermu.", false]],
  lead: "Tempat ini disiapkan untuk website berikutnya yang akan terhubung langsung dari ProMaker.",
  cta: { label: "Lihat semua tools", href: "#tools" },
  trust: ["Terhubung ke ProMaker", "Dibuka dari satu tempat", "Segera hadir"],
  statLead: "Tools berikutnya sedang dirancang",
  stats: [["clock", "Segera hadir", "Sedang dirancang"], ["layers", "Terhubung", "Dibuka dari ProMaker"], ["sparkles", "Satu tempat", "Semua tools kariermu"], ["pointer", "Mudah dipakai", "Langsung dari browser"]],
};

export const TOOLS = [
  {
    id: "cv",
    name: "CV Pro Maker",
    tagline: "Buat CV yang lolos ATS dalam hitungan menit",
    description: "20 template profesional, skor ATS langsung, dan unduh PDF tanpa merusak format.",
    url: "https://cvpromaker.vercel.app",
    status: "live",
    hero: {
      badge: "Platform tools karier all-in-one",
      title: [["Buat ", false], ["CV", true], [" profesional, ", false], ["tingkatkan peluang kariermu.", true]],
      lead: "ProMaker adalah platform tools digital untuk kebutuhan kariermu. Mulai dari membuat CV yang lolos ATS, dan akan terus bertambah dengan tools lainnya.",
      cta: { label: "Buat CV Sekarang" },
      trust: ["Mudah digunakan", "Lolos ATS", "Tanpa instalasi"],
      statLead: "Satu pintu untuk semua tools kariermu",
      stats: [["layers", "20 template", "Gaya ATS dan kreatif"], ["gauge", "Skor ATS", "Dihitung langsung"], ["download", "PDF siap unduh", "Format tetap rapi"], ["clock", "Tools baru", "Segera hadir"]],
    },
    points: ["20 template ATS dan kreatif", "Skor ATS dan rekomendasi perbaikan", "Unduh PDF langsung dari browser"],
  },
  {
    id: "clip",
    name: "Clip Pro Maker",
    tagline: "Ubah video panjang jadi klip vertikal",
    description: "Aplikasi desktop untuk memotong video menjadi klip 9:16 dengan framing mengikuti wajah dan subtitle otomatis.",
    url: "https://clippromaker.vercel.app",
    status: "soon",
    screen: { title: "Clip Pro Maker", sub: "Aplikasi desktop, segera hadir di ProMaker." },
    hero: {
      badge: "Segera hadir · Aplikasi desktop",
      title: [["Ubah video panjang jadi ", false], ["klip vertikal", true], [" siap unggah.", false]],
      lead: "Clip Pro Maker memotong video menjadi klip 9:16 dengan framing yang mengikuti wajah pembicara, lengkap dengan subtitle otomatis. Berjalan di komputermu sendiri.",
      cta: { label: "Lihat Clip Pro Maker" },
      trust: ["Klip 9:16", "Subtitle otomatis", "Jalan di komputer sendiri"],
      statLead: "Clip Pro Maker segera hadir di ProMaker",
      stats: [["layers", "Klip 9:16", "Format vertikal"], ["sparkles", "Subtitle otomatis", "Dari transkrip"], ["pointer", "Ikuti wajah", "Framing pembicara"], ["clock", "Segera hadir", "Aplikasi desktop"]],
    },
  },
  {
    id: "next-2",
    name: "Tools berikutnya",
    tagline: "Sedang dirancang",
    description: "Tempat ini disiapkan untuk tools digital selanjutnya.",
    status: "soon",
    hero: SOON_HERO,
  },
];
