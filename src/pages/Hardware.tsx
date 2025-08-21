



const Hardware = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/hw.png')` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Looking for Specialized{" "}
            <span className="text-primary-glow">Hardware</span>?
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light opacity-95">
            For work in BIM, CAD, CAM software, rendering, blueprint printing and more,{" "}
            <br className="hidden md:block" />
            you need powerful machines
          </p>
          
          <p className="text-lg md:text-xl mb-12 opacity-90">
            We deliver and install them for you
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/20 to-transparent" />
    </section>
  );
};



export default Hardware;