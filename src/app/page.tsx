import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blake Fisher',
  description: 'Business student, Eagle Scout, entrepreneur, and outdoor athlete based in Boulder, Colorado.',
};

const stats = [
  { icon: '🦅', label: 'Eagle Scout', value: 'Built a permanent trail in Wyman Woods · 2024' },
  { icon: '🚲', label: '3 Years', value: 'Self-employed entrepreneur before age 18' },
  { icon: '⛷️', label: 'Ski Instructor', value: 'Certified through Vail Resorts' },
  { icon: '🚵', label: 'Competitive MTB', value: 'Downhill & Enduro racing' },
  { icon: '🎓', label: 'Leeds School of Business', value: 'BBA, CU Boulder · Class of 2028' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f1a] text-white font-sans">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 px-8 py-5 flex justify-between items-center backdrop-blur-sm bg-[#0a0f1a]/80 border-b border-white/5">
        <span className="text-sm tracking-[0.2em] uppercase font-medium text-white/60">Blake Fisher</span>
        <a
          href="#contact"
          className="text-sm tracking-widest uppercase border border-[#c8893a] text-[#c8893a] px-5 py-2 hover:bg-[#c8893a] hover:text-[#0a0f1a] transition-all duration-300"
        >
          Connect
        </a>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-20 pt-24">
        {/* Background texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0d1525] to-[#0a1628] opacity-100" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
        />

        <div className="relative z-10 max-w-5xl">
          <p className="text-[#c8893a] text-xs tracking-[0.4em] uppercase mb-8 font-medium">
            Columbus, OH · Boulder, CO
          </p>
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
            Built on the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c8893a] to-[#e8a855]">
              mountain.
            </span><br />
            Rooted in<br />
            the work.
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-lg mt-8 leading-relaxed">
            Business student, Eagle Scout, entrepreneur, and outdoor athlete.
          </p>
          <a
            href="#about"
            className="inline-block mt-12 text-sm tracking-[0.2em] uppercase text-white/40 hover:text-[#c8893a] transition-colors duration-300"
          >
            ↓ Learn more
          </a>
        </div>
      </section>

      {/* STATS */}
      <section className="px-8 md:px-20 py-24 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/5">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#0a0f1a] p-8 hover:bg-[#0d1525] transition-colors duration-300">
              <div className="text-3xl mb-4">{stat.icon}</div>
              <div className="text-[#c8893a] text-sm font-semibold tracking-wide mb-2">{stat.label}</div>
              <div className="text-white/40 text-xs leading-relaxed">{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BIO */}
      <section id="about" className="px-8 md:px-20 py-24 border-t border-white/5">
        <div className="max-w-5xl grid md:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-[#c8893a] text-xs tracking-[0.4em] uppercase mb-6 font-medium">About</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              The kind of guy who builds the trail.
            </h2>
            {/* Headshot placeholder */}
            <div className="aspect-[3/4] bg-white/5 border border-white/10 flex items-center justify-center text-white/20 text-sm tracking-widest uppercase">
              Photo
            </div>
          </div>
          <div className="space-y-6 text-white/60 leading-relaxed text-lg pt-16">
            <p>
              Blake Fisher grew up in Grandview Heights, Ohio with a simple philosophy: if you want something done, own it from start to finish. At 14, he launched a bicycle repair business — building a client base through word of mouth before most kids had a resume.
            </p>
            <p>
              His Eagle Scout project says everything about how he operates. Rather than taking the easy route, Blake spent four months planning and building an all-natural walking trail in Wyman Woods — doing everything from the design to the physical labor himself, using only natural materials to preserve the park's environment. The trail is permanent. That's the kind of work he does.
            </p>
            <p>
              Now a sophomore at the University of Colorado Boulder's Leeds School of Business, Blake is pursuing a BBA while competing in downhill and enduro mountain bike racing, racing on the Freestyle Ski team, and serving on the board of the Mountain Bike Club.
            </p>
            <p>
              He didn't move to Colorado just for college — he moved there to live in the mountains and build something there.
            </p>
          </div>
        </div>
      </section>

      {/* BUILDING */}
      <section className="px-8 md:px-20 py-24 border-t border-white/5 bg-[#0d1525]">
        <div className="max-w-5xl">
          <p className="text-[#c8893a] text-xs tracking-[0.4em] uppercase mb-6 font-medium">What I'm Building</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 max-w-2xl">
            Early in my career.<br />Not early in my work ethic.
          </h2>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed mb-12">
            Studying business with a focus on real estate, entrepreneurship, and investment — following a path shaped by a family with deep roots in multifamily real estate. Looking for internship opportunities, mentorship, and connections in real estate, outdoor industry, and business.
          </p>
          <a
            id="contact"
            href="mailto:blake@blakefish.com"
            className="inline-block text-sm tracking-[0.2em] uppercase border border-[#c8893a] text-[#c8893a] px-8 py-4 hover:bg-[#c8893a] hover:text-[#0a0f1a] transition-all duration-300 font-medium"
          >
            Get in Touch →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 md:px-20 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <span className="text-white/20 text-sm">© {new Date().getFullYear()} Blake Fisher</span>
        <div className="flex gap-8">
          <a href="https://linkedin.com/in/blake-fisher-ski" className="text-white/30 text-sm hover:text-[#c8893a] transition-colors tracking-wide">LinkedIn</a>
          <a href="https://instagram.com" className="text-white/30 text-sm hover:text-[#c8893a] transition-colors tracking-wide">Instagram</a>
        </div>
      </footer>

    </main>
  );
}
