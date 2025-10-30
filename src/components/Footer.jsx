import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">DIIDOL Consults</h3>
            <p className="mt-3 text-slate-600">Your premium partner for IT consultation, software craftsmanship, and mobile innovation.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-700">Contact</h4>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex items-center gap-3"><Mail size={18} /> hello@diidol.consulting</li>
              <li className="flex items-center gap-3"><Phone size={18} /> +1 (555) 012-3456</li>
              <li className="flex items-center gap-3"><MapPin size={18} /> Global • Remote-first</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-700">Ready to build?</h4>
            <p className="mt-3 text-slate-600">Tell us about your goals and we’ll craft a roadmap with clear milestones and outcomes.</p>
            <a href="#home" className="inline-flex mt-4 items-center justify-center rounded-md bg-rose-600 text-white px-5 py-3 shadow-lg shadow-rose-600/20 hover:bg-rose-700 transition-colors">Book a discovery call</a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-200 text-sm text-slate-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} DIIDOL Consults. All rights reserved.</p>
          <p>Built with passion and precision.</p>
        </div>
      </div>
    </footer>
  );
}
