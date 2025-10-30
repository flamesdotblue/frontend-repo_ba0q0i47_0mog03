import { Code, Smartphone, Server, Shield } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Software Development',
    desc: 'End-to-end web platforms, APIs, and enterprise systems built with modern stacks and best practices.',
    points: ['Full-stack engineering', 'API & microservices', 'QA & automation'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Beautiful native and cross-platform apps with smooth performance and scalable architecture.',
    points: ['iOS & Android', 'React Native', 'App Store readiness'],
  },
  {
    icon: Server,
    title: 'IT Consultation',
    desc: 'Architecture, cloud, and security guidance to align technology with your business outcomes.',
    points: ['Cloud strategy', 'Scalability & reliability', 'Cost optimization'],
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    desc: 'Security-by-design implementations and audits for peace of mind at every layer.',
    points: ['Security audits', 'Best practices', 'Compliance-ready'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">What we do</h2>
          <p className="mt-3 text-slate-600">From strategy to shipping, we help teams deliver resilient, elegant software that moves the needle.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group relative rounded-2xl border border-slate-200 p-6 bg-white hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-rose-50 text-rose-600 ring-1 ring-rose-100">
                <s.icon />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-600" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="absolute inset-0 -z-[1] rounded-2xl bg-gradient-to-br from-rose-500/0 via-rose-500/0 to-rose-500/0 group-hover:from-rose-500/5 group-hover:to-rose-500/15 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
