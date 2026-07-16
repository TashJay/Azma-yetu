import { motion } from 'motion/react';

const statVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const statItem = {
  hidden: { opacity: 0, scale: 0.88, y: 12 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};


export function About() {
  return (
    <section id="about" className="py-24 md:py-36 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              className="absolute -top-6 -left-6 w-48 h-48 bg-ochre-500/10 rounded-3xl -z-10"
              animate={{ rotate: [0, 3, 0, -3, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-forest-900/10 rounded-3xl -z-10" />
            <motion.img
              src="/src/assets/images/kenyan_children_1780696307562.png"
              alt="Kenyan children supported by Azma Yetu CBO"
              className="w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-5 left-6 bg-earth-900 text-white rounded-2xl px-6 py-4 shadow-xl"
            >
              <p className="text-ochre-400 font-display font-bold text-2xl">Azma Yetu</p>
              <p className="text-white/50 text-sm">Our Resolve</p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-ochre-100 text-ochre-700 text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            >
              Who We Are
            </motion.div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 leading-tight mb-6">
              Built from the grassroots, for the grassroots.
            </h2>

            <motion.div
              className="w-16 h-1 bg-ochre-500 rounded-full mb-8"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />

            <div className="space-y-5 text-earth-600 text-lg leading-relaxed mb-10">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Azma Yetu — meaning <em>"Our Resolve"</em> — is a Kenyan community-based organization committed to transforming lives from the ground up. We work at the intersection of empowerment, healing, and resilience, believing that lasting change must be built by the people it serves.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                From mentoring young boys to standing beside widows and widowers, from unlocking opportunity for women to confronting drug abuse head-on — everything we do is rooted in community, dignity, and a refusal to accept that the circumstances of birth should determine the ceiling of a life.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-earth-700 font-medium"
              >
                We do not believe in charity that creates dependency. Every program we run is designed to build capacity — to leave people and communities more capable, more connected, and more self-sufficient than we found them.
              </motion.p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
