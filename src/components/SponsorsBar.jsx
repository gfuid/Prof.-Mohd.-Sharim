import { Star, Atom, PlayCircle, Cpu, Bell, Newspaper, Award, CheckCircle, ShieldCheck } from 'lucide-react'

export function SponsorsBar() {
  return (
    <section className="bg-[#0e1738] py-8 border-y border-[#18234d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-aos="fade-up" data-aos-duration="700">
        <p className="text-center text-[11px] font-bold tracking-[0.25em] text-slate-400 uppercase mb-7">
          TRUSTED BY RECRUITERS, UNIVERSITIES &amp; INDUSTRY ACCREDITATIONS
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 opacity-85">
          {/* WHO-GMP */}
          <div className="flex items-center gap-2 text-white font-extrabold text-lg sm:text-xl tracking-wider hover:opacity-100 transition-opacity">
            <ShieldCheck className="w-5 h-5 fill-white text-[#0e1738]" />
            <span>WHO-GMP</span>
          </div>

          {/* AICTE */}
          <div className="flex items-center gap-2 text-white font-extrabold text-lg sm:text-xl tracking-widest hover:opacity-100 transition-opacity">
            <Award className="w-5 h-5 text-white" />
            <span>AICTE</span>
          </div>

          {/* PCI */}
          <div className="flex items-center gap-2 text-white font-black text-lg sm:text-xl tracking-tight hover:opacity-100 transition-opacity">
            <div className="flex items-center justify-center w-6 h-6 rounded bg-white text-[#0e1738]">
              <span className="text-xs font-black">Rx</span>
            </div>
            <span>PCI</span>
          </div>

          {/* CUET / JEECUP */}
          <div className="flex items-center gap-2 text-white font-extrabold text-lg sm:text-xl tracking-wide hover:opacity-100 transition-opacity">
            <Cpu className="w-5 h-5 text-white" />
            <span>CUET / JEECUP</span>
          </div>

          {/* PHARMA HR */}
          <div className="flex items-center gap-2 text-white font-bold text-lg sm:text-xl tracking-wider hover:opacity-100 transition-opacity">
            <CheckCircle className="w-5 h-5 fill-white text-[#0e1738]" />
            <span>PHARMA HR</span>
          </div>

          {/* RECRUITERS */}
          <div className="flex items-center gap-2 text-white font-black text-lg sm:text-xl tracking-widest hover:opacity-100 transition-opacity">
            <Star className="w-5 h-5 text-white fill-white" />
            <span>TOP TECH</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SponsorsBar
