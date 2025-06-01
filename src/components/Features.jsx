export default function Features() {
  return (
    <section className="py-16 bg-white px-6">
      <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">Features</h3>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Responsive Design', desc: 'Looks great on all devices.' },
          { title: 'Fast Performance', desc: 'Built with modern tech.' },
          { title: 'Easy Customization', desc: 'Edit and go in seconds.' },
        ].map((f, i) => (
          <div key={i} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">{f.title}</h4>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
