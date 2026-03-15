import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Copy, Check, Dribbble, Instagram, Twitter, Mail, Sparkles, Palette, PenTool, Layout, Star, User, GraduationCap, Figma, Image, Layers, Video, Scissors, Brush } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 glass rounded-full px-6 py-3 flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent-primary to-primary-text flex items-center justify-center text-white font-serif font-bold text-sm">
          S
        </div>
        <span className="font-serif font-bold text-primary-text tracking-tight">Studio.</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-medium text-sm text-primary-text/70">
        <a href="#about" className="hover:text-primary-text transition-colors">About</a>
        <a href="#work" className="hover:text-primary-text transition-colors">Project</a>
        <a href="#services" className="hover:text-primary-text transition-colors">Services</a>
      </div>

      <button className="bg-primary-text text-base px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary-text/90 transition-all hover:shadow-lg hover:shadow-primary-text/10 active:scale-95 flex items-center gap-2">
        Let's Talk <ArrowRight className="w-4 h-4" />
      </button>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background Decorative Elements specific to Hero */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-ivory/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent-primary/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-accent-secondary/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-84 h-84 bg-lavender/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-3000"></div>
      </div>

      {/* Hero-specific Noise Texture */}
      <div className="absolute inset-0 pointer-events-none bg-noise opacity-[0.03] z-0"></div>

      <div className="w-full flex flex-col items-center justify-center relative z-10 gap-16">
        
        {/* Top Content - Centered Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Glassmorphism Welcome Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 px-5 py-2 rounded-full border border-white/20 bg-white/40 backdrop-blur-xl shadow-[0_8px_32_rgba(0,0,0,0.04)] text-sm font-semibold text-primary-text inline-flex items-center gap-3 cursor-default"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-primary"></span>
            </span>
            Available for freelance work
            <Sparkles className="w-4 h-4 text-accent-primary" />
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-extrabold tracking-tight text-primary-text leading-[1.1] mb-6 drop-shadow-sm">
            Hi, I'm Balqis.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-primary-text">
              Turning imagination into visual reality.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-primary-text/70 leading-relaxed max-w-2xl mb-10 font-sans mx-auto">
            Translating abstract ideas into vibrant illustrations and strategic graphic designs. Helping brands find their unique visual voice.
          </p>

          {/* CTA Button */}
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-accent-primary text-primary-text rounded-full font-semibold text-lg shadow-lg shadow-accent-primary/20 hover:bg-accent-primary/90 transition-all flex items-center gap-2 group"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Bottom Content - Dynamic Visual Element */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl h-[400px] lg:h-[500px] flex items-center justify-center"
        >
          {/* Main Floating Glass Card */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-full max-w-sm lg:max-w-md aspect-[4/5] rounded-[2.5rem] border border-white/50 bg-white/20 backdrop-blur-2xl shadow-[0_8px_32_rgba(0,0,0,0.1)] overflow-hidden z-20 p-4"
          >
            <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
              <img 
                src="https://github.com/user-attachments/assets/9fc60c2f-15db-4112-a2ac-a6b1e66886eb" 
                alt="Abstract 3D Art" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/40 via-transparent to-transparent"></div>
              
              {/* Card Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium border border-white/30">
                    Featured Project
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-1">Neon Genesis</h3>
                <p className="text-white/80 text-sm">3D Illustration & Branding</p>
              </div>
            </div>
          </motion.div>

          {/* Secondary Floating Element 1 */}
          <motion.div
            animate={{ y: [15, -15, 15], rotate: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-8 lg:-left-20 w-32 h-32 lg:w-48 lg:h-48 rounded-3xl border border-white/50 bg-white/30 backdrop-blur-xl shadow-xl z-30 p-3"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2564&auto=format&fit=crop" 
                alt="Graphic Design Elements" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Secondary Floating Element 2 */}
          <motion.div
            animate={{ y: [-20, 20, -20], rotate: [5, -5, 5] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
            className="absolute -top-4 -right-8 lg:-right-20 w-24 h-24 lg:w-32 lg:h-32 rounded-full border border-white/20 bg-gradient-to-br from-accent-primary to-accent-secondary backdrop-blur-xl shadow-xl z-10 flex items-center justify-center text-primary-text"
          >
            <Palette className="w-10 h-10 lg:w-12 lg:h-12 opacity-80" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      {/* F-Pattern Top Horizontal: Name and Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-5xl md:text-7xl font-serif font-extrabold text-primary-text mb-4 tracking-tight">
          Balqis Eka Tri Azalea
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-accent-primary to-primary-text rounded-full mb-6"></div>
      </motion.div>

      <div className="flex flex-col gap-8">
        {/* Top Row: Photo & About Me */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* F-Pattern Left Vertical Anchor: Photo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 lg:col-span-4"
          >
            <div className="glass-card rounded-[40px] p-3 aspect-[4/5] md:aspect-auto md:h-full relative overflow-hidden group">
              {/* Profile Photo */}
              <img 
                src="https://github.com/user-attachments/assets/8cd8620e-0fdb-4426-ab90-2ce236c182f4" 
                alt="Balqis Eka Tri Azalea" 
                className="w-full h-full object-cover rounded-[32px] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]"></div>
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 glass px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary/40 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-primary"></span>
                </span>
                <span className="text-sm font-medium text-primary-text/80">Open to work</span>
              </div>
            </div>
          </motion.div>

          {/* Background Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-7 lg:col-span-8 glass-card rounded-[40px] p-8 md:p-10 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-secondary/10 rounded-full mix-blend-multiply filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-2xl font-serif font-bold text-primary-text mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                <User className="w-5 h-5" />
              </div>
              About Me
            </h3>
            <div className="text-primary-text/80 text-lg leading-relaxed space-y-4 relative z-10">
              <p>
                Balqis adalah mahasiswa Desain Grafis yang fokus pada ilustrasi dan desain visual.
                Memiliki ketertarikan dalam mengolah ide menjadi karya visual yang komunikatif.
                Terbiasa menciptakan desain yang rapi, terstruktur, dan detail.
                Berfokus pada pengembangan konsep visual untuk berbagai kebutuhan desain.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: Education & Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Education Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-[40px] p-8 md:p-10 relative overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent-secondary/10 rounded-full mix-blend-multiply filter blur-2xl translate-y-1/2 translate-x-1/4"></div>
              
              <h3 className="text-2xl font-serif font-bold text-primary-text mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                Education
              </h3>
              
              <div className="space-y-8 relative z-10">
                {/* Education Item 1 */}
                <div className="relative pl-8 before:absolute before:left-[11px] before:top-2 before:bottom-[-32px] before:w-[2px] before:bg-accent-primary/20 last:before:hidden">
                  <div className="absolute w-6 h-6 bg-base border-4 border-accent-primary rounded-full -left-0 top-0 shadow-sm"></div>
                  <h4 className="font-bold text-primary-text text-lg">Universitas Negeri Surabaya</h4>
                  <p className="text-accent-primary font-medium mb-1">Graphic Design</p>
                  <p className="text-sm text-primary-text/60 bg-white/10 inline-block px-3 py-1 rounded-full mt-1">2024 - Sekarang</p>
                </div>
                
                {/* Education Item 2 (Optional) */}
                <div className="relative pl-8 before:absolute before:left-[11px] before:top-2 before:bottom-[-32px] before:w-[2px] before:bg-accent-primary/20 last:before:hidden">
                  <div className="absolute w-6 h-6 bg-base border-4 border-accent-primary rounded-full -left-0 top-0 shadow-sm"></div>
                  <h4 className="font-bold text-primary-text text-lg">SMAN 1 Sidayu</h4>
                  <p className="text-sm text-primary-text/60 bg-white/10 inline-block px-3 py-1 rounded-full mt-1">2022 - 2024</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card rounded-[40px] p-8 md:p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-40 h-40 bg-accent-primary/10 rounded-full mix-blend-multiply filter blur-2xl -translate-y-1/4 -translate-x-1/4"></div>
              
              <h3 className="text-2xl font-serif font-bold text-primary-text mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                  <Sparkles className="w-5 h-5" />
                </div>
                Skills
              </h3>
              
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-8 relative z-10 mt-6">
                {[
                  { name: 'Clip Studio', logo: 'https://github.com/user-attachments/assets/9cfde58c-2c77-4626-99fb-afa409afbd53', bg: 'bg-accent-secondary/10', rotate: '-rotate-6', delay: 0 },
                  { name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', bg: 'bg-white', rotate: 'rotate-3', delay: 0.2 },
                  { name: 'Illustrator', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg', bg: 'bg-accent-secondary/10', rotate: '-rotate-3', delay: 0.4 },
                  { name: 'Photoshop', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg', bg: 'bg-accent-primary/10', rotate: 'rotate-6', delay: 0.1 },
                  { name: 'Ibis Paint', logo: 'https://github.com/user-attachments/assets/0167e30d-2206-4446-842c-d0393aea0bee', bg: 'bg-white', rotate: '-rotate-12', delay: 0.5 },
                  { name: 'Cap Cut', logo: 'https://github.com/user-attachments/assets/50c87e3e-2a8a-470d-8cfb-c8b98a6b277b', bg: 'bg-white', rotate: 'rotate-12', delay: 0.3 },
                  { name: 'Canva', logo: 'https://github.com/user-attachments/assets/f7cf267a-c0e6-4565-b67c-b5de8ac7501d', bg: 'bg-accent-primary/10', rotate: '-rotate-3', delay: 0.6 }
                ].map((skill, i) => (
                  <motion.div 
                    key={skill.name} 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: skill.delay, ease: "easeInOut" }}
                    whileHover={{ scale: 1.1, zIndex: 20 }}
                    className={`flex flex-col items-center justify-center gap-2 cursor-default ${skill.rotate}`}
                  >
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                    </div>
                    <span className="text-[11px] font-bold text-primary-text bg-white/10 px-3 py-1 rounded-full shadow-sm border border-white/10 backdrop-blur-md whitespace-nowrap">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
      </div>
    </section>
  );
};

const BentoGallery = () => {
  const projects = [
    {
      id: 1,
      title: "Oatmilk Rebrand",
      category: "Brand Identity",
      description: "Identitas visual yang segar dan menyenangkan serta desain kemasan untuk merek susu oat modern.",
      image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&q=80&w=800",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-2",
      color: "bg-blue-100"
    },
    {
      id: 2,
      title: "Summer Festival",
      category: "Illustration",
      description: "Ilustrasi poster yang cerah dan penuh energi untuk festival musik musim panas tahunan.",
      image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80&w=800",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
      color: "bg-blue-100"
    },
    {
      id: 3,
      title: "Eco Skincare",
      category: "Packaging",
      description: "Desain kemasan yang berkelanjutan dan minimalis untuk lini perawatan kulit organik.",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
      color: "bg-green-100"
    },
    {
      id: 4,
      title: "Tech Startup",
      category: "UI/UX & Brand",
      description: "Identitas merek yang komprehensif dan desain antarmuka pengguna untuk startup teknologi yang inovatif.",
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800",
      colSpan: "md:col-span-3",
      rowSpan: "md:row-span-1",
      color: "bg-purple-100"
    }
  ];

  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-serif font-bold text-primary-text mb-4">Selected Works</h2>
          <p className="text-primary-text/70 max-w-md">A collection of my recent projects focusing on playful branding and vibrant illustrations.</p>
        </div>
        <button className="px-6 py-3 glass-card rounded-full font-medium text-primary-text hover:bg-white/80 transition-all flex items-center gap-2 w-fit">
          View All Projects <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className={`group relative overflow-hidden rounded-[32px] glass-card p-2 ${project.colSpan} ${project.rowSpan}`}
          >
            <div className={`w-full h-full rounded-[24px] overflow-hidden relative ${project.color}`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="glass px-5 py-4 rounded-2xl inline-block w-full backdrop-blur-md bg-white/10 border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-serif font-bold text-white">{project.title}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/80 bg-black/20 px-2 py-1 rounded-full">{project.category}</span>
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed">{project.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "hello@studio.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="py-12 px-6 relative z-10 mt-20">
      <div className="max-w-4xl mx-auto glass-card rounded-[40px] p-8 md:p-12 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-text mb-6">
          Ready to create something <span className="text-gradient">cheerful?</span>
        </h2>
        
        <button 
          onClick={handleCopy}
          className="group relative flex items-center gap-3 px-8 py-4 bg-white/40 rounded-full shadow-sm border border-white/20 hover:shadow-md transition-all mb-12 backdrop-blur-md"
        >
          <Mail className="w-5 h-5 text-primary-text/40 group-hover:text-accent-primary transition-colors" />
          <span className="text-lg font-medium text-primary-text/80">{email}</span>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-accent-primary/10 transition-colors ml-2">
            {copied ? <Check className="w-4 h-4 text-accent-primary" /> : <Copy className="w-4 h-4 text-primary-text/40 group-hover:text-accent-primary" />}
          </div>
        </button>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-text/10 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-accent-primary to-primary-text flex items-center justify-center text-white font-serif font-bold text-[10px]">
              S
            </div>
            <span className="font-serif font-bold text-primary-text text-sm">Studio.</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary-text/60 hover:text-accent-primary hover:bg-white transition-all">
              <Dribbble className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary-text/60 hover:text-accent-primary hover:bg-white transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary-text/60 hover:text-accent-primary hover:bg-white transition-all">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-primary-text/50">
            © {new Date().getFullYear()} Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-base relative selection:bg-accent-primary/20 selection:text-primary-text overflow-x-hidden">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none bg-noise z-0 opacity-60"></div>
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <BentoGallery />
      </main>
      <Footer />
    </div>
  );
}
