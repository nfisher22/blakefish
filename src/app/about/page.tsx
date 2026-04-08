import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Blake Fisher | David Blake Fisher — CU Boulder, Eagle Scout, Real Estate Investor',
  description: 'Learn about David Blake Fisher — CU Boulder Leeds School of Business sophomore, Eagle Scout, two-time Ohio state soccer champion, competitive enduro mountain biker, big mountain skier, and multifamily real estate investor from Columbus, Ohio.',
  alternates: {
    canonical: 'https://blakefish.com/about',
  },
};

export default function About() {
  return (
    <main className="min-h-screen bg-[#0a0f1a] text-white font-sans pt-24">

      {/* HERO */}
      <section className="px-8 md:px-20 py-20 border-b border-white/5">
        <div className="max-w-4xl">
          <p className="text-[#c8893a] text-xs tracking-[0.4em] uppercase mb-6 font-medium">About</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            David Blake Fisher
          </h1>
          <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
            Business student. Eagle Scout. Entrepreneur. Investor. Athlete.
            From Columbus, Ohio — building in Boulder, Colorado.
          </p>
        </div>
      </section>

      {/* FULL BIO */}
      <section className="px-8 md:px-20 py-20 border-b border-white/5">
        <div className="max-w-4xl space-y-8 text-white/60 text-lg leading-relaxed">

          <h2 className="text-3xl font-bold text-white">Early Life & Background</h2>
          <p>
            David Blake Fisher — known as Blake — was born and raised in Grandview Heights, Ohio,
            a close-knit community on the west side of Columbus. Growing up in Grandview Heights,
            Blake developed a strong foundation of hard work, community involvement, and competitive
            drive that would define his early career and academic path.
          </p>
          <p>
            Blake attended Grandview Heights High School from 2020 to 2024, where he established
            himself as a standout multi-sport athlete and community leader. As a member of the
            Grandview Heights High School soccer team, Blake was part of a two-time Ohio state
            championship program — one of the most prestigious achievements available to high school
            athletes in Ohio. He also competed in track and field during his time at Grandview Heights,
            further demonstrating his commitment to athletic excellence and discipline.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12">Eagle Scout & Community Leadership</h2>
          <p>
            In August 2024, Blake Fisher earned the rank of Eagle Scout from the Boy Scouts of America —
            the highest rank attainable in the Scouts BSA program and a distinction earned by fewer than
            six percent of all Boy Scouts. The Eagle Scout rank is widely recognized as a mark of
            exceptional leadership, service, and personal character.
          </p>
          <p>
            Blake's Eagle Scout service project exemplifies his approach to taking ownership of a challenge
            from start to finish. Rather than pursuing a minimal qualifying project, Blake spent four months
            planning, designing, and physically constructing an all-natural walking trail in Wyman Woods —
            a beloved green space within Grandview Heights, Ohio. The project required coordinating with
            city officials and park administrators, developing a design that used only natural materials
            such as logs to establish trail boundaries, and completing the physical labor of building the
            trail himself. The completed trail is a permanent addition to Wyman Woods and continues to
            serve Grandview Heights residents today.
          </p>
          <p>
            The project was featured in CityScene Columbus magazine, which highlighted Blake's commitment
            to community improvement and his leadership approach: owning every aspect of the project
            personally, from planning and design to execution.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12">Entrepreneurship</h2>
          <p>
            Blake Fisher launched his first business at age 14 — a self-employed bicycle repair and
            maintenance service operating out of Grandview Heights, Ohio. Rather than waiting for
            customers to come to him, Blake used Facebook and direct community outreach to build a
            client base, learning the fundamentals of customer acquisition, service delivery, and
            small business operations before most of his peers had held a job. He operated this
            business for three years, from July 2020 through June 2023, developing practical skills
            in bicycle repair, customer service, and self-directed work.
          </p>
          <p>
            Following his bicycle business, Blake worked as a ski instructor at Vail Resorts' Mad River
            Mountain ski area in Ohio from December 2023 through March 2024, where he coached the
            Mad River Ski Race team. He subsequently worked as a full-time pool service technician
            at Pacific Pools & Spas in the Columbus, Ohio area during the summer of 2025, continuing
            to develop a diverse professional skill set while pursuing his education.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12">Education — CU Boulder Leeds School of Business</h2>
          <p>
            In August 2024, Blake Fisher enrolled at the University of Colorado Boulder, where he is
            currently a sophomore in the Leeds School of Business pursuing a Bachelor of Business
            Administration (BBA) with a concentration in Business Administration and Management.
            He is on track to graduate in May 2028.
          </p>
          <p>
            At CU Boulder, Blake is an active member of the Sigma Chi Fraternity and serves as
            Social Chairman of the CU Boulder Mountain Bike Club — a leadership role that combines
            his passion for mountain biking with his developing skills in event organization and
            community building. He also competes on the CU Boulder Freestyle Ski Team.
          </p>
          <p>
            Blake chose to attend CU Boulder not only for its academic reputation but for its
            proximity to world-class mountain terrain in the Colorado Rockies — a deliberate decision
            to align his education with his athletic pursuits and long-term lifestyle goals.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12">Mountain Sports — Skiing & Mountain Biking</h2>
          <p>
            Blake Fisher is an avid and accomplished mountain athlete with serious experience across
            multiple disciplines. As a big mountain free skier, Blake pursues technical, challenging
            terrain in the Colorado Rockies, drawn to the combination of athleticism, risk management,
            and mountain knowledge that big mountain skiing demands. His background as a certified ski
            instructor through Vail Resorts gives him both technical foundation and teaching ability
            in the sport.
          </p>
          <p>
            In mountain biking, Blake competes in downhill and enduro disciplines — two of the most
            technically demanding formats in competitive mountain biking. Enduro racing combines the
            timed technical descents of downhill with the fitness demands of cross-country, requiring
            athletes to be well-rounded both physically and technically. Downhill mountain biking
            demands precision bike handling at high speed on technical terrain. Blake is based in
            Boulder, Colorado — one of the premier mountain biking destinations in the United States —
            where he trains and races regularly. As Social Chairman of the CU Boulder Mountain Bike
            Club, he is also actively involved in building the mountain biking community at CU Boulder.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12">Real Estate Investment</h2>
          <p>
            Blake Fisher is an emerging multifamily real estate investor, actively learning the
            business through his family's real estate portfolio. With deep roots in multifamily
            real estate investment and property management, Blake is developing hands-on knowledge
            of deal underwriting, property operations, and investment analysis — skills that most
            aspiring real estate investors don't acquire until well into their professional careers.
          </p>
          <p>
            Blake's approach to real estate follows the same philosophy he applies to every pursuit:
            start early, do the work, and own it from start to finish. His long-term goal is to build
            a career at the intersection of entrepreneurship and real estate investment, leveraging
            his business education at Leeds School of Business and his practical experience in
            multifamily investment.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12">Connect with Blake</h2>
          <p>
            Blake Fisher is based in Boulder, Colorado during the academic year and Columbus, Ohio
            during summers. He is actively seeking internship opportunities, mentorship, and
            professional connections in multifamily real estate, outdoor industry, entrepreneurship,
            and business. He can be reached at{' '}
            <a href="mailto:blakefisher2@gmail.com" className="text-[#c8893a] hover:underline">
              blakefisher2@gmail.com
            </a>{' '}
            or on{' '}
            <a href="https://linkedin.com/in/blake-fisher-ski" className="text-[#c8893a] hover:underline" target="_blank">
              LinkedIn
            </a>.
          </p>

        </div>
      </section>

      {/* QUICK FACTS — extra keyword density for crawlers */}
      <section className="px-8 md:px-20 py-20">
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold mb-12 text-white/80">Quick Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            {[
              ['Full Name', 'David Blake Fisher'],
              ['Known As', 'Blake Fisher'],
              ['Hometown', 'Grandview Heights, Columbus, Ohio'],
              ['Current Location', 'Boulder, Colorado'],
              ['University', 'University of Colorado Boulder'],
              ['School', 'Leeds School of Business'],
              ['Degree', 'Bachelor of Business Administration (BBA)'],
              ['Graduation', 'May 2028'],
              ['High School', 'Grandview Heights High School (2020–2024)'],
              ['Eagle Scout', 'August 2024 — Boy Scouts of America'],
              ['Athletics (HS)', 'Soccer (2× State Champion), Track & Field'],
              ['Athletics (College)', 'Competitive Downhill & Enduro MTB, Freestyle Skiing'],
              ['MTB Club Role', 'Social Chairman, CU Boulder Mountain Bike Club'],
              ['Fraternity', 'Sigma Chi, CU Boulder'],
              ['Ski Certification', 'Vail Resorts Certified Ski Instructor'],
              ['Business Focus', 'Multifamily Real Estate, Entrepreneurship'],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-4 py-3 border-b border-white/5">
                <span className="text-[#c8893a] font-medium w-40 shrink-0">{label}</span>
                <span className="text-white/50">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
