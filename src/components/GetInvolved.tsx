import { motion } from 'motion/react';
import { Heart, Handshake, Users, ArrowRight, Mail, User, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const cards = [
  {
    icon: Users,
    color: 'bg-sky-50 text-sky-600 border-sky-100',
    title: 'Volunteer',
    desc: 'Whether you have a weekend, a specific skill, or a career\'s worth of experience to share — our programs are designed to match your capacity with our greatest needs. From mentorship sessions and skills workshops to field coordination and communications support, every contribution leaves a lasting mark on the communities we serve.',
  },
  {
    icon: Handshake,
    color: 'bg-forest-900/5 text-forest-700 border-forest-900/10',
    title: 'Partner',
    desc: 'We welcome partnerships with businesses, NGOs, faith institutions, and academic bodies. Whether you bring funding, expertise, platforms, or networks, we build structured partnerships that are transparent, accountable, and designed to create real, measurable impact alongside our communities.',
  },
  {
    icon: Heart,
    color: 'bg-rose-50 text-rose-500 border-rose-100',
    title: 'Donate',
    desc: '100% of public donations flow directly into community programs — administrative costs are covered entirely by our institutional partners. When you give to Azma Yetu, you fund a specific reality: a boy in a mentorship session, a woman building her first business, a widow stepping back into a life of dignity.',
  },
];

export function GetInvolved() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Getting Involved with Azma Yetu');
    const body    = encodeURIComponent(`Name: ${form.name}\n\n${form.message}`);
    window.location.href = `mailto:Azmayetucbo@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-ochre-100 text-ochre-700 text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Join the Movement
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-5 leading-tight">
              How will you show up?
            </h2>
            <p className="text-earth-500 text-lg">
              There are many ways to be part of Azma Yetu. Find yours — and help us build something that outlasts all of us.
            </p>
          </motion.div>
        </div>

        {/* Way cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white border border-earth-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl border ${card.color} mb-6`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-earth-900 mb-3">{card.title}</h3>
                <p className="text-earth-500 leading-relaxed flex-1">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto bg-earth-900 rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <h3 className="font-display text-3xl font-bold text-white mb-2">Send us a message</h3>
          <p className="text-white/50 mb-8">We'll get back to you within 48 hours.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <input
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/10 border border-white/10 text-white placeholder-white/30 rounded-2xl pl-12 pr-5 py-4 focus:outline-none focus:border-ochre-500/60 transition-colors"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <input
                type="email"
                required
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/10 border border-white/10 text-white placeholder-white/30 rounded-2xl pl-12 pr-5 py-4 focus:outline-none focus:border-ochre-500/60 transition-colors"
              />
            </div>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-5 w-5 h-5 text-white/30" />
              <textarea
                required
                rows={4}
                placeholder="How would you like to get involved?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/10 border border-white/10 text-white placeholder-white/30 rounded-2xl pl-12 pr-5 py-4 focus:outline-none focus:border-ochre-500/60 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 bg-ochre-500 hover:bg-ochre-400 text-earth-900 font-bold rounded-2xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-ochre-500/20"
            >
              Send Message
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
