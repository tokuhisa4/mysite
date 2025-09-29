export default function Contact() {
  const handleMail = () => {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const message = (document.getElementById("message") as HTMLTextAreaElement).value;

    const subject = encodeURIComponent(`【お問合せ】from ${name} 様`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);

    window.location.href = `mailto:tokuhisa4.third@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <div className="glass w-full max-w-2xl p-8 space-y-6">
        <input id="name" type="text" placeholder="Your name" className="w-full p-3 rounded bg-white/10" />
        <input id="email" type="email" placeholder="you@example.com" className="w-full p-3 rounded bg-white/10" />
        <textarea id="message" rows={4} placeholder="Your message..." className="w-full p-3 rounded bg-white/10" />
        <button
          type="button"
          onClick={handleMail}
          className="glass px-6 py-3 rounded-lg border border-white/30 w-full hover:animate-color-shift-orange"
        >
          Send Message
        </button>
      </div>
    </section>
  );
}
