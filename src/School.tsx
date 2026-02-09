import React, { useState, useEffect } from 'react';
import { Sparkles, BookOpen, Palette, Music, Star, Heart, Rocket, Users, Mail, Phone, MapPin, Menu, X } from 'lucide-react';

export default function KidsSchoolLanding() {
const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
const [scrolled, setScrolled] = useState<boolean>(false);

useEffect((): (() => void) => {
  const handleScroll = (): void => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener('scroll', handleScroll);

  return (): void => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
  const features = [
    { icon: BookOpen, title: "Creative Learning", desc: "Fun and engaging curriculum designed for young minds", color: "bg-pink-400" },
    { icon: Palette, title: "Arts & Crafts", desc: "Express creativity through painting, drawing, and crafts", color: "bg-purple-400" },
    { icon: Music, title: "Music & Dance", desc: "Discover rhythm and movement in our music classes", color: "bg-yellow-400" },
    { icon: Rocket, title: "STEM Activities", desc: "Build, experiment, and explore science together", color: "bg-blue-400" },
    { icon: Users, title: "Social Skills", desc: "Learn teamwork and make lifelong friends", color: "bg-green-400" },
    { icon: Heart, title: "Caring Teachers", desc: "Experienced educators who truly care", color: "bg-red-400" }
  ];

  const programs = [
    {
      title: "Toddler Program",
      age: "2-3 Years",
      time: "Mon-Fri, 9AM-12PM",
      color: "from-pink-400 to-rose-400",
      description: "Gentle introduction to learning through play, music, and sensory activities.",
      highlights: ["Potty Training Support", "Music & Movement", "Sensory Play", "Story Time"]
    },
    {
      title: "Preschool Program",
      age: "3-4 Years",
      time: "Mon-Fri, 9AM-3PM",
      color: "from-purple-400 to-indigo-400",
      description: "Building foundation skills in literacy, math, and social interaction.",
      highlights: ["Early Literacy", "Math Concepts", "Art Projects", "Outdoor Play"]
    },
    {
      title: "Pre-K Program",
      age: "4-5 Years",
      time: "Mon-Fri, 9AM-3PM",
      color: "from-blue-400 to-cyan-400",
      description: "Kindergarten readiness with advanced learning and leadership skills.",
      highlights: ["Reading Readiness", "STEM Activities", "Leadership Skills", "Field Trips"]
    },
    {
      title: "Kindergarten",
      age: "5-6 Years",
      time: "Mon-Fri, 8AM-3PM",
      color: "from-yellow-400 to-orange-400",
      description: "Comprehensive curriculum preparing children for elementary school success.",
      highlights: ["Advanced Reading", "Math & Science", "Computer Skills", "Physical Education"]
    }
  ];

  const testimonials = [
    { name: "Sarah Johnson", text: "My daughter loves coming to school every day! The teachers are amazing.", stars: 5 },
    { name: "Michael Chen", text: "Best decision we made for our son's early education. Highly recommend!", stars: 5 },
    { name: "Emily Davis", text: "The creative activities and caring environment are outstanding.", stars: 5 }
  ];

  const activities = [
    { name: "Art Studio", icon: "🎨", desc: "Creative expression through various art forms" },
    { name: "Music Room", icon: "🎵", desc: "Learn instruments and rhythm" },
    { name: "Library Corner", icon: "📚", desc: "Reading adventures and story time" },
    { name: "Science Lab", icon: "🔬", desc: "Hands-on experiments and discovery" },
    { name: "Outdoor Playground", icon: "🌳", desc: "Physical activities and nature exploration" },
    { name: "Computer Lab", icon: "💻", desc: "Technology and digital learning" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-pink-50 to-yellow-50 font-['Nunito',sans-serif] overflow-x-hidden">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-300 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-pink-300 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-blue-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-14 h-14 bg-purple-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center transform rotate-12 shadow-lg">
                <Sparkles className="w-7 h-7 text-white -rotate-12" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Sunshine Kids
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'Programs', 'About', 'Gallery', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-purple-600 font-semibold text-lg transition-colors duration-200">
                  {item}
                </a>
              ))}
            </div>

            <button className="hidden md:block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Enroll Now
            </button>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {['Home', 'Programs', 'About', 'Gallery', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-gray-700 hover:text-purple-600 font-semibold text-lg">
                  {item}
                </a>
              ))}
              <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-[fadeInUp_0.8s_ease-out]">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Where Little
                </span>
                <br />
                <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Dreams Grow Big!
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
                A magical place where children explore, learn, and discover their potential through play and creativity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  Schedule a Tour
                </button>
                <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl border-2 border-purple-300 transform hover:scale-105 transition-all duration-200">
                  Learn More
                </button>
              </div>
              <div className="flex gap-6 pt-4">
                <div className="text-center">
                  <div className="text-4xl font-black text-purple-600">200+</div>
                  <div className="text-gray-600 font-semibold">Happy Kids</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-pink-600">15+</div>
                  <div className="text-gray-600 font-semibold">Expert Teachers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-blue-600">10+</div>
                  <div className="text-gray-600 font-semibold">Years Excellence</div>
                </div>
              </div>
            </div>

            <div className="relative animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-[3rem] transform rotate-6 opacity-20"></div>
                <div className="relative bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200 rounded-[3rem] p-8 shadow-2xl">
                  <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=800&fit=crop" 
                      alt="Happy children learning" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-6 -right-6 bg-yellow-400 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-lg transform rotate-12">
                    <Star className="w-8 h-8 fill-current" />
                    <span className="font-black text-sm">5 Star</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-pink-500 text-white px-6 py-3 rounded-2xl shadow-lg transform -rotate-6">
                    <span className="font-bold text-lg">Ages 2-6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 relative z-10 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-pink-300 rounded-full -translate-x-1/2 opacity-20 blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-300 rounded-full translate-x-1/2 opacity-20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full font-bold text-sm mb-4">
                ABOUT US
              </div>
              <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                Building Bright Futures Since 2014
              </h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                At Sunshine Kids, we believe every child is unique and deserves an environment where they can thrive, explore, and discover their potential.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our experienced educators create a nurturing atmosphere that combines structured learning with creative play, ensuring your child develops academically, socially, and emotionally.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-4xl mb-2">🎯</div>
                  <div className="text-3xl font-black text-purple-600 mb-1">100%</div>
                  <div className="text-gray-600 font-semibold">Parent Satisfaction</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-4xl mb-2">🏆</div>
                  <div className="text-3xl font-black text-pink-600 mb-1">Award</div>
                  <div className="text-gray-600 font-semibold">Winning School</div>
                </div>
              </div>

              <button className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Discover Our Story
              </button>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl p-4 aspect-square flex items-center justify-center transform hover:rotate-3 transition-all duration-300 shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=300&fit=crop" 
                        alt="Learning" 
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                    <div className="bg-gradient-to-br from-yellow-200 to-orange-200 rounded-3xl p-4 aspect-[4/3] flex items-center justify-center transform hover:-rotate-3 transition-all duration-300 shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=300&h=200&fit=crop" 
                        alt="Playing" 
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-gradient-to-br from-blue-200 to-cyan-200 rounded-3xl p-4 aspect-[4/3] flex items-center justify-center transform hover:rotate-3 transition-all duration-300 shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=300&h=200&fit=crop" 
                        alt="Outdoor" 
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                    <div className="bg-gradient-to-br from-green-200 to-emerald-200 rounded-3xl p-4 aspect-square flex items-center justify-center transform hover:-rotate-3 transition-all duration-300 shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1560421683-6856ea585c78?w=300&h=300&fit=crop" 
                        alt="Reading" 
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-2xl px-6 py-4 shadow-xl transform -rotate-6 z-10">
                  <div className="font-black text-2xl">10+</div>
                  <div className="font-semibold">Years Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-4xl font-black text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Our Core Values
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { emoji: "💝", title: "Care & Love", desc: "Every child feels valued and cherished" },
                { emoji: "🌟", title: "Excellence", desc: "Commitment to highest quality education" },
                { emoji: "🎨", title: "Creativity", desc: "Encouraging imagination and innovation" },
                { emoji: "🤝", title: "Community", desc: "Building strong family partnerships" }
              ].map((value, i) => (
                <div key={i} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.emoji}</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Why Choose Sunshine Kids?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide a nurturing environment where every child can thrive and reach their full potential
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-4 border-transparent hover:border-purple-200 group"
                  style={{ 
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-lg">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-200 rounded-full -translate-x-32 -translate-y-32 opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-200 rounded-full translate-x-32 translate-y-32 opacity-30 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-[fadeIn_1s_ease-out]">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-[fadeIn_1s_ease-out_0.2s_both]">
              Age-appropriate learning experiences designed to nurture every stage of development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {programs.map((program, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${program.color} rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:scale-[1.02] group`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-3xl font-black mb-2">{program.title}</h3>
                    <div className="flex gap-4 text-sm font-semibold opacity-90">
                      <span className="bg-white/20 px-3 py-1 rounded-full">{program.age}</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full">{program.time}</span>
                    </div>
                  </div>
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {index === 0 && "🧸"}
                    {index === 1 && "🎨"}
                    {index === 2 && "🚀"}
                    {index === 3 && "🎓"}
                  </div>
                </div>
                
                <p className="text-lg mb-6 opacity-95">{program.description}</p>
                
                <div className="space-y-2">
                  <div className="font-bold text-sm uppercase tracking-wide mb-3">Program Highlights:</div>
                  <div className="grid grid-cols-2 gap-2">
                    {program.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-xl">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        <span className="text-sm font-semibold">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="mt-6 bg-white text-gray-800 px-6 py-3 rounded-full font-bold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-200 shadow-lg">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          {/* Activities Grid */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-4xl font-black text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Special Activities & Facilities
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((activity, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">{activity.icon}</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{activity.name}</h4>
                  <p className="text-gray-600">{activity.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100 to-pink-100 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-pink-600 to-yellow-600 bg-clip-text text-transparent">
              Moments of Joy
            </h2>
            <p className="text-xl text-gray-600">Capturing the magic of childhood every day</p>
          </div>

          {/* Gallery Categories */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {['All', 'Classroom', 'Outdoor', 'Art & Craft', 'Events', 'Activities'].map((category, i) => (
                <button 
                  key={i}
                  className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                    i === 0 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
                  } transform hover:scale-105`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Main Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop", title: "Art Class Fun" },
              { img: "https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=400&h=400&fit=crop", title: "Outdoor Play" },
              { img: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400&h=400&fit=crop", title: "Learning Together" },
              { img: "https://images.unsplash.com/photo-1560421683-6856ea585c78?w=400&h=400&fit=crop", title: "Story Time" },
              { img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=400&fit=crop", title: "Science Lab" },
              { img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=400&fit=crop", title: "Music Class" },
              { img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop", title: "Building Blocks" },
              { img: "https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?w=400&h=400&fit=crop", title: "Happy Faces" }
            ].map((item, i) => (
              <div 
                key={i} 
                className="group relative aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer"
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </span>
                </div>
                <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-2xl">✨</span>
                </div>
              </div>
            ))}
          </div>

          {/* Large Feature Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96 group">
            <img 
              src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1200&h=400&fit=crop" 
              alt="School Overview" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-pink-900/70 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <h3 className="text-5xl font-black mb-4 animate-[fadeIn_1s_ease-out]">View Our Full Gallery</h3>
                <p className="text-xl mb-6 opacity-90 animate-[fadeIn_1s_ease-out_0.2s_both]">See more amazing moments from our school</p>
                <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 animate-[fadeIn_1s_ease-out_0.4s_both]">
                  Explore More Photos
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What Parents Say
            </h2>
            <p className="text-xl text-gray-600">Don't just take our word for it!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold text-purple-600 text-lg">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              A Day in the Life
            </h2>
            <p className="text-xl text-gray-600">See how we structure our enriching daily routine</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { time: "8:00 - 9:00 AM", activity: "Arrival & Free Play", emoji: "🌅", color: "from-orange-400 to-yellow-400" },
              { time: "9:00 - 10:00 AM", activity: "Circle Time & Learning", emoji: "📚", color: "from-blue-400 to-cyan-400" },
              { time: "10:00 - 10:30 AM", activity: "Snack & Story Time", emoji: "🍎", color: "from-green-400 to-emerald-400" },
              { time: "10:30 - 11:30 AM", activity: "Art & Craft Activities", emoji: "🎨", color: "from-pink-400 to-rose-400" },
              { time: "11:30 - 12:30 PM", activity: "Outdoor Play & Sports", emoji: "⚽", color: "from-yellow-400 to-orange-400" },
              { time: "12:30 - 1:30 PM", activity: "Lunch Time", emoji: "🍱", color: "from-red-400 to-pink-400" },
              { time: "1:30 - 2:30 PM", activity: "Rest & Quiet Activities", emoji: "😴", color: "from-purple-400 to-indigo-400" },
              { time: "2:30 - 3:00 PM", activity: "Music & Movement", emoji: "🎵", color: "from-violet-400 to-purple-400" }
            ].map((item, i) => (
              <div 
                key={i}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-md`}>
                    {item.emoji}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-gray-500 mb-1">{item.time}</div>
                    <div className="text-xl font-black text-gray-800">{item.activity}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg mb-6">
              * Schedule may vary by program and age group. Extended care available until 6:00 PM.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Download Full Curriculum
            </button>
          </div>
        </div>
      </section>

      {/* Enrollment CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 relative z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-bold text-sm mb-6 animate-[fadeIn_1s_ease-out]">
            LIMITED SPOTS AVAILABLE
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 animate-[fadeIn_1s_ease-out_0.2s_both]">
            Ready to Give Your Child<br />The Best Start?
          </h2>
          <p className="text-2xl text-white/90 mb-12 animate-[fadeIn_1s_ease-out_0.4s_both]">
            Join our community of happy families and watch your child thrive!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-[fadeIn_1s_ease-out_0.6s_both]">
            <button className="bg-white text-purple-600 px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200 group">
              <span className="inline-block group-hover:scale-110 transition-transform duration-200">🎓</span> Schedule a Tour
            </button>
            <button className="bg-yellow-400 text-gray-900 px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200 group">
              <span className="inline-block group-hover:scale-110 transition-transform duration-200">📝</span> Apply Now
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white animate-[fadeIn_1s_ease-out_0.8s_both]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">✓</div>
              <span className="font-semibold">Flexible Schedules</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">✓</div>
              <span className="font-semibold">Financial Aid Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">✓</div>
              <span className="font-semibold">Year-Round Enrollment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-black mb-6">Ready to Join Our Family?</h2>
              <p className="text-xl mb-8 opacity-90">
                Schedule a visit and see why parents choose Sunshine Kids for their little ones!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Phone</div>
                    <div className="opacity-90">(555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Email</div>
                    <div className="opacity-90">hello@sunshinekids.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Location</div>
                    <div className="opacity-90">123 Sunshine Street, Happy City</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-purple-500 outline-none text-gray-800 text-lg"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-purple-500 outline-none text-gray-800 text-lg"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-purple-500 outline-none text-gray-800 text-lg"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-purple-500 outline-none text-gray-800 text-lg resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center transform rotate-12 shadow-lg">
                  <Sparkles className="w-7 h-7 text-white -rotate-12" />
                </div>
                <span className="text-2xl font-bold">Sunshine Kids</span>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Nurturing young minds and creating joyful learning experiences since 2014.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <span className="text-xl">📘</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <span className="text-xl">📷</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <span className="text-xl">🐦</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <span className="text-xl">▶️</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-pink-300">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Programs', 'Admissions', 'Gallery', 'Blog', 'Contact Us'].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 inline-block transition-all duration-200 group">
                      <span className="inline-block mr-2 group-hover:mr-3 transition-all duration-200">→</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-purple-300">Programs</h3>
              <ul className="space-y-3">
                {['Toddler Program', 'Preschool', 'Pre-Kindergarten', 'Kindergarten', 'After School Care', 'Summer Camp', 'Parent Resources'].map((program, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-300 hover:text-white hover:translate-x-2 inline-block transition-all duration-200 group">
                      <span className="inline-block mr-2 group-hover:mr-3 transition-all duration-200">→</span>
                      {program}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-yellow-300">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-white/10 p-2 rounded-lg mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Address</div>
                    <div className="text-gray-300 text-sm">123 Sunshine Street<br />Happy City, HC 12345</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white/10 p-2 rounded-lg mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Phone</div>
                    <div className="text-gray-300 text-sm">(555) 123-4567<br />(555) 987-6543</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white/10 p-2 rounded-lg mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-gray-300 text-sm">hello@sunshinekids.com<br />info@sunshinekids.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-white/10 pt-12 pb-8">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-300 to-yellow-300 bg-clip-text text-transparent">
                Stay Connected! 📬
              </h3>
              <p className="text-gray-300 mb-6">Subscribe to our newsletter for updates, events, and parenting tips</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2024 Sunshine Kids School. All rights reserved. | Where Little Dreams Grow Big ✨
              </p>
              <div className="flex gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors duration-200">Sitemap</a>
              </div>
            </div>
          </div>

          {/* Accreditation Badges */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex flex-wrap justify-center gap-6 items-center">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold">
                🏆 Accredited by NAEYC
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold">
                ⭐ 5-Star Rated
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold">
                🎓 State Licensed
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold">
                💚 Eco-Friendly Campus
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}