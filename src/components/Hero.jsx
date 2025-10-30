import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 w-full">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-rose-700 font-medium bg-rose-50 rounded-full px-3 py-1 mb-4">
            <span className="inline-block w-2 h-2 bg-rose-600 rounded-full" />
            Premium IT Partner
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            DIIDOL Consults
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-slate-700 leading-relaxed">
            We design, build, and scale robust software and mobile experiences for modern businesses. Strategy-first execution, enterprise-grade quality, and startup speed.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-rose-600 text-white px-6 py-3 shadow-lg shadow-rose-600/20 hover:bg-rose-700 transition-colors">
              Start a project <ArrowRight size={18} />
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 px-6 py-3 ring-1 ring-slate-200 hover:ring-slate-300 transition-all">
              Explore services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
