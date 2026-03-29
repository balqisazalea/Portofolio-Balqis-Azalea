import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Copy, Check, Linkedin, Instagram, Twitter, Mail, Sparkles, Palette, PenTool, Layout, Star, User, GraduationCap, Figma, Image, Layers, Video, Scissors, Brush, X, ExternalLink } from 'lucide-react';

const Navbar = ({ selectedProject }: { selectedProject: any }) => {
  if (selectedProject) return null;
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 glass rounded-full px-6 py-3 flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent-primary to-accent-secondary flex items-center justify-center text-white shadow-sm font-serif font-bold text-sm">
          B
        </div>
        <span className="font-serif font-bold text-primary-text tracking-tight">Balqis</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-medium text-sm text-primary-text/70">
        <a href="#about" className="hover:text-primary-text transition-colors">About</a>
        <a href="#work" className="hover:text-primary-text transition-colors">works</a>
        <a href="#contact" className="hover:text-primary-text transition-colors">Contact</a>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Hero-specific Noise Texture */}
      <div className="absolute inset-0 pointer-events-none bg-noise opacity-[0.05] z-0"></div>

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
            className="mb-6 px-5 py-2 rounded-full border border-white/40 bg-white/30 backdrop-blur-2xl saturate-[180%] shadow-[0_8px_32_rgba(0,0,0,0.04)] text-sm font-semibold text-primary-text inline-flex items-center gap-3 cursor-default"
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-primary-text text-[6vw] leading-[1.1] block w-full text-center mt-2">
              Illustrator & Graphic Designer
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-primary-text/70 leading-relaxed max-w-2xl mb-10 font-sans mx-auto">
            Based in Indonesia
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
        <h2 className="text-4xl md:text-6xl font-serif font-extrabold text-primary-text mb-4 tracking-tight">
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
              <h3 className="text-2xl font-serif font-bold text-primary-text mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary">
                  <Sparkles className="w-5 h-5" />
                </div>
                Skills
              </h3>
              
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-8 relative z-10 mt-6">
                {[
                  { name: 'Clip Studio', logo: 'https://github.com/user-attachments/assets/9cfde58c-2c77-4626-99fb-afa409afbd53', bg: 'glass', rotate: '-rotate-6', delay: 0 },
                  { name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', bg: 'glass', rotate: 'rotate-3', delay: 0.2 },
                  { name: 'Illustrator', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg', bg: 'glass', rotate: '-rotate-3', delay: 0.4 },
                  { name: 'Photoshop', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg', bg: 'glass', rotate: 'rotate-6', delay: 0.1 },
                  { name: 'Ibis Paint', logo: 'https://github.com/user-attachments/assets/0167e30d-2206-4446-842c-d0393aea0bee', bg: 'glass', rotate: '-rotate-12', delay: 0.5 },
                  { name: 'Cap Cut', logo: 'https://github.com/user-attachments/assets/50c87e3e-2a8a-470d-8cfb-c8b98a6b277b', bg: 'glass', rotate: 'rotate-12', delay: 0.3 },
                  { name: 'Canva', logo: 'https://github.com/user-attachments/assets/f7cf267a-c0e6-4565-b67c-b5de8ac7501d', bg: 'glass', rotate: '-rotate-3', delay: 0.6 }
                ].map((skill, i) => (
                  <motion.div 
                    key={skill.name} 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: skill.delay, ease: "easeInOut" }}
                    whileHover={{ scale: 1.1, zIndex: 20 }}
                    className={`flex flex-col items-center justify-center gap-2 cursor-default ${skill.rotate}`}
                  >
                    <div className={`w-16 h-16 flex items-center justify-center rounded-2xl glass p-3 shadow-lg border border-white/40 saturate-[150%]`}>
                      <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                    </div>
                    <span className="text-[11px] font-bold text-primary-text glass px-3 py-1 rounded-full shadow-sm border border-white/20 whitespace-nowrap">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
      </div>
    </section>
  );
};

const ProjectsSection = ({ selectedProject, setSelectedProject }: { selectedProject: any, setSelectedProject: (project: any) => void }) => {
  const projects = [
    {
      id: 1,
      title: "Keong Mas — Book Cover Redesign",
      category: "Editorial Design",
      description: "Redesain cover buku cerita rakyat Keong Mas dengan menempatkan keong emas sebagai fokus utama visual. Elemen ini digunakan sebagai simbol inti cerita sekaligus membangun daya tarik visual melalui pendekatan ilustratif yang memperkuat nuansa cerita rakyat.",
      image: "https://github.com/user-attachments/assets/2f091461-b382-4b35-a344-2464ff991299",
      images: [
        "https://github.com/user-attachments/assets/8a9e7a14-dd54-4aa8-9d2a-3735b2dda44b",
        "https://github.com/user-attachments/assets/264fe65c-3544-4bd1-b517-4010ad2ab308",
        "https://github.com/user-attachments/assets/2f091461-b382-4b35-a344-2464ff991299",
        "https://github.com/user-attachments/assets/0a4bbce9-65f4-4708-964b-1ca16a61f593",
        "https://github.com/user-attachments/assets/31cf93db-7cdd-41d5-8ee2-5a81e87fb515"
      ],
      tools: ["Clip Studio Paint", "Photoshop"],
      year: "2025",
      tags: ["Editorial Design"]
    },
    {
      id: 2,
      title: "Cat T-Shirt Illustration",
      category: "Apparel Design",
      description: "Desain ilustrasi kaos dengan karakter Kucing yang dikembangkan melalui pendekatan stylized. Karakter dirancang dengan kepribadian aktif, girly, dan ceria, yang ditampilkan melalui ekspresi wajah, gesture, serta pemilihan warna yang kontras untuk memperkuat daya tarik visual pada media apparel.",
      image: "https://github.com/user-attachments/assets/a5e62d7c-46f8-4367-8f0a-fb3a60ebd28e",
      images: [
        "https://github.com/user-attachments/assets/b8b43c18-19c3-4b7d-83c8-838bc9a60360",
        "https://github.com/user-attachments/assets/f6a5e894-4723-4a64-8172-36d40d1b1d3d",
        "https://github.com/user-attachments/assets/5b7b4e77-c693-4a41-90f0-22c056f929ae",
        "https://github.com/user-attachments/assets/e0fffd1a-5808-417b-bb63-b62fc69daeeb",
        "https://github.com/user-attachments/assets/ed37277e-8403-42f1-8a09-f43d63572f61"
      ],
      tools: ["Clip Studio Paint", "Photoshop"],
      year: "2025",
      tags: ["Apparel Design"]
    },
    {
      id: 3,
      title: "Im — Monster Character Design",
      category: "Character Design",
      description: "Desain karakter monster (Degamon) berbasis Meerkat dengan eksplorasi warna hijau dan elemen lightning. Menggunakan pendekatan stylized untuk menampilkan karakter yang lincah, waspada, dan penuh energi.",
      image: "https://github.com/user-attachments/assets/4e8f91cf-8bcc-42ad-b98f-a13f5e25a6b0",
      images: [
        "https://github.com/user-attachments/assets/cf016c4d-46fa-4423-b6e7-d388acbc3305",
        "https://github.com/user-attachments/assets/9ea2fbb1-7ba7-4f1a-be25-0e4fe1b1cf25",
        "https://github.com/user-attachments/assets/50138b3a-bc75-477c-9362-042d48edc7e6",
        "https://github.com/user-attachments/assets/60616591-9fe1-41a9-a2e3-d260aaed3dde",
        "https://github.com/user-attachments/assets/0b6bbbf0-e6f9-407a-aa0c-22cc32dcf7f7",
        "https://github.com/user-attachments/assets/9964faaf-dd02-44cc-8d42-1e4fb77a90bd",
        "https://github.com/user-attachments/assets/93c594f9-ec30-4611-abed-bc7b764f834d",
        "https://github.com/user-attachments/assets/b74c5ea8-e478-485a-93bc-6f598f2c72d3",
        "https://github.com/user-attachments/assets/bf6be5a8-1a3f-4c79-8701-9ecc9accc409"
      ],
      tools: ["Ibis Paint", "Adobe Illustrator"],
      year: "2024",
      tags: ["Character Design"]
    },
    {
      id: 4,
      title: "Tepiranu Coffee Rebranding",
      category: "Branding",
      description: "Proyek berbasis tim berupa perancangan rebranding untuk sebuah public space bernama Tepiranu Coffee. Perancangan meliputi pengembangan logo, Graphic Standard Manual (GSM), identitas visual, desain signage, serta media promosi digital untuk membangun identitas yang konsisten dan mudah dikenali.",
      image: "https://github.com/user-attachments/assets/5e8d26b4-7f49-46d7-a1c4-64ee2a93cee8",
      images: ["https://github.com/user-attachments/assets/5e8d26b4-7f49-46d7-a1c4-64ee2a93cee8"],
      tools: ["Illustrator", "Photoshop"],
      year: "2025",
      tags: ["Branding"]
    }
  ];

  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mb-20">
          <h2 className="text-6xl font-serif font-bold text-primary-text mb-4">works</h2>
          <p className="text-primary-text/70 max-w-md">some of my best works</p>
        </div>

        <div className="flex flex-col gap-40">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-12 gap-20 items-center"
            >
              {/* Left Column: Image (60%) */}
              <div className={`md:col-span-7 overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative group rounded-[24px] overflow-hidden">
                  {project.id === 2 ? (
                    <div className="flex flex-col gap-4">
                      <img 
                        src="https://github.com/user-attachments/assets/e0fffd1a-5808-417b-bb63-b62fc69daeeb" 
                        alt={project.title} 
                        className="w-3/4 h-auto object-cover rounded-[24px] mx-auto"
                        referrerPolicy="no-referrer"
                      />
                      <img 
                        src="https://github.com/user-attachments/assets/ed37277e-8403-42f1-8a09-f43d63572f61" 
                        alt={project.title} 
                        className="w-3/4 h-auto object-cover rounded-[24px] mx-auto"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : project.id === 3 ? (
                    <div className="flex flex-col gap-4">
                      <img 
                        src="https://github.com/user-attachments/assets/2d90b728-6ecd-4ca5-ada6-0756e57a7c2a" 
                        alt={project.title} 
                        className="w-2/3 h-auto object-cover rounded-[24px] mx-auto"
                        referrerPolicy="no-referrer"
                      />
                      <img 
                        src="https://github.com/user-attachments/assets/a5fe12ef-0ea4-433a-bf39-c1dc5bc7679b" 
                        alt={project.title} 
                        className="w-2/3 h-auto object-cover rounded-[24px] mx-auto"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={`w-full ${project.id === 4 ? 'md:w-3/4 mx-auto' : ''} h-auto object-cover transition-transform duration-700 group-hover:scale-110 ${project.id === 1 ? 'scale-105' : ''}`}
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>
              </div>

              {/* Right Column: Description (40%) */}
              <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="glass-card rounded-[24px] p-8 md:p-10 backdrop-blur-md bg-white/40 border border-white/20 shadow-xl">
                  <h3 className="text-5xl font-serif font-bold text-primary-text mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-primary-text">
                    {project.title}
                  </h3>
                  <p className="text-primary-text/80 leading-relaxed mb-8">{project.description}</p>
                  
                  {/* Tech/Tools Used */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags?.map((tag: string, i: number) => (
                      <span key={i} className="px-3 py-1 rounded-full glass text-xs font-medium text-primary-text/70 border border-white/20">{tag}</span>
                    ))}
                  </div>

                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="px-6 py-2.5 bg-primary-text text-white rounded-full text-sm font-medium hover:bg-primary-text/90 transition-all shadow-lg shadow-primary-text/10 active:scale-95 flex items-center gap-2"
                  >
                    Detail <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "balqiseka10@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-12 px-6 relative z-10 mt-20">
      <div className="max-w-4xl mx-auto glass-card !bg-accent-primary/10 rounded-[40px] p-8 md:p-12 flex flex-col items-center text-center border-accent-primary/20">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-primary-text mb-4">
          Work with me.
        </h2>
        <p className="text-primary-text/70 text-lg mb-8">
          Drop a message for inquiries, collaborations, or just to say hello.
        </p>
        
        <button 
          onClick={handleCopy}
          className="group relative flex items-center gap-3 px-8 py-4 bg-white/30 rounded-full shadow-sm border border-white/40 hover:shadow-md transition-all mb-12 backdrop-blur-2xl saturate-[180%]"
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
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-accent-primary to-accent-secondary flex items-center justify-center text-white shadow-sm font-serif font-bold text-[10px]">
              B
            </div>
            <span className="font-serif font-bold text-primary-text text-sm">Balqis</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/balqis-azalea-a327863b3/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary-text/60 hover:text-accent-primary hover:bg-white transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/balqisleaa/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary-text/60 hover:text-accent-primary hover:bg-white transition-all">
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-primary-text/50">
            © {new Date().getFullYear()} Balqis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  return (
    <div className="min-h-screen bg-base relative selection:bg-accent-primary/20 selection:text-primary-text overflow-x-hidden">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none bg-noise z-0 opacity-60"></div>
      
      {!selectedProject && <Navbar selectedProject={selectedProject} />}
      <main>
        <Hero />
        <About />
        <ProjectsSection selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
      </main>
      <Footer />

      {selectedProject && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm" 
          onClick={() => setSelectedProject(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[32px] p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative [&::-webkit-scrollbar]:hidden" 
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full glass bg-white/50 hover:bg-white/80 transition-colors"
            >
              <X className="w-6 h-6 text-primary-text" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-text/60">{selectedProject.category}</span>
              <span className="w-1 h-1 rounded-full bg-primary-text/20"></span>
              <span className="text-xs font-bold text-primary-text/40">{selectedProject.year}</span>
            </div>
            <h2 className="text-5xl font-serif font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-primary-text mb-6">
              {selectedProject.title}
            </h2>
            
            {/* Description */}
            <p className="text-primary-text/80 leading-relaxed mb-8 text-lg">{selectedProject.description}</p>
            
            {/* Tech/Tools Used */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              {selectedProject.tools.map((tool: string, i: number) => (
                <span key={i} className="px-4 py-2 rounded-full glass bg-white/30 text-sm font-medium text-primary-text/70 border border-white/20">
                  {tool}
                </span>
              ))}
              {selectedProject.id === 4 && (
                <a 
                  href="https://drive.google.com/file/d/1shLILVtg2NF-BQZzhRvKVFFBCoarGu1o/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-accent-primary text-primary-text rounded-full text-sm font-bold hover:bg-accent-primary/90 transition-all shadow-lg shadow-accent-primary/10 active:scale-95 flex items-center gap-2 ml-auto"
                >
                  Klik GSM <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* Gallery */}
            <div className="flex flex-col gap-8">
              {selectedProject.images.map((img: string, i: number) => (
                <div key={i} className="space-y-2">
                  <img src={img} alt={`${selectedProject.title} ${i + 1}`} className="rounded-[24px] w-full h-auto object-cover shadow-lg border border-white/20" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
