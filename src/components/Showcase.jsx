export default function Showcase() {
  const items = [
    {
      title: 'Fintech Mobile Suite',
      desc: 'Secure, scalable mobile banking app with real-time analytics and biometric auth.',
      tag: 'Mobile',
    },
    {
      title: 'E-commerce Platform',
      desc: 'Headless storefront with blazing performance, custom CMS, and global CDN.',
      tag: 'Web',
    },
    {
      title: 'Cloud Migration',
      desc: 'Multi-region infrastructure on Kubernetes with automated CI/CD and observability.',
      tag: 'Cloud',
    },
  ];

  return (
    <section id="work" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Selected work</h2>
          <p className="mt-3 text-slate-600">A snapshot of the kind of impact we create across industries.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((i) => (
            <article key={i.title} className="group relative rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-white hover:-translate-y-1 transition-all">
              <div className="h-40 bg-gradient-to-br from-rose-100 via-white to-slate-100" />
              <div className="p-6">
                <span className="inline-flex text-xs font-medium px-2 py-1 rounded-full bg-rose-50 text-rose-700 ring-1 ring-rose-100">{i.tag}</span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{i.title}</h3>
                <p className="mt-2 text-slate-600">{i.desc}</p>
              </div>
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-rose-500/0 to-rose-500/10" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
