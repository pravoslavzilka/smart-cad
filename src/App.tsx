import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Monitor, 
  HardDrive, 
  GraduationCap, 
  CheckCircle, 
  Star,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Presentation,
  Cog,
  Workflow,
  Play,
  Users,
  Award,
  Headphones,
  Building,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [currentSlide, setCurrentSlide] = useState(0);

  const companies = [
    { name: 'Autodesk', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/autodesk.png' },
    { name: 'Trimble', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/trimble.png' },
    { name: 'Linear', logo: 'https://new.smartcad.sk/wp-content/uploads/2025/02/linear.png' },
    { name: 'Dell', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/dell.png' },
    { name: 'ESET', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/eset.png' },
    {name: 'GFI Software', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/gfi.png' },
    { name: 'HP', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/hp.png' },
    { name: 'Kerio', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/kerio.png' },
    { name: 'ROWE', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/rowe.png' },
    { name: 'SIGMA', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/sigma.png' },
    { name: 'Lenovo', logo: 'https://new.smartcad.sk/wp-content/uploads/2023/12/lenovo.png' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Nové funkcie v AutoCAD 2025: Čo potrebujete vedieť',
      excerpt: 'Objavte najnovšie funkcie a vylepšenia v AutoCAD 2025, ktoré zvýšia vašu produktivitu a zjednodušia pracovný tok.',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      date: '15. január 2025',
      category: 'Software'
    },
    {
      id: 2,
      title: 'Ako vybrať správnu CAD pracovnú stanicu',
      excerpt: 'Kompletný sprievodca výberom hardvéru pre CAD aplikácie. Tipy a odporúčania od našich expertov.',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      date: '10. január 2025',
      category: 'Hardvér'
    },
    {
      id: 3,
      title: 'BIM v stavebníctve: Trendy a príležitosti',
      excerpt: 'Prečo je BIM budúcnosťou stavebníctva a ako sa na ňu pripraviť. Praktické rady a príklady implementácie.',
      image: 'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      date: '5. január 2025',
      category: 'BIM'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(companies.length / 4));
    }, 3000);
    return () => clearInterval(timer);
  }, [companies.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(companies.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(companies.length / 4)) % Math.ceil(companies.length / 4));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-800 text-white py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="https://new.smartcad.sk/wp-content/uploads/2023/10/smartcad-logo-v-krivkach_-biele-638x100.png" 
              alt="smartCad Logo" 
              className="h-10" />
            
          </div>
          
          <nav className="hidden lg:flex space-x-8">
            <a href="#riesenia" className="hover:text-teal-400 transition-colors">Riešenia</a>
            <a href="#produkty" className="hover:text-teal-400 transition-colors">Produkty</a>
            <a href="#skolenia" className="hover:text-teal-400 transition-colors">Školenia</a>
            <a href="#o-nas" className="hover:text-teal-400 transition-colors">O nás</a>
            <a href="#blog" className="hover:text-teal-400 transition-colors">Blog</a>
            <a href="#kontakt" className="hover:text-teal-400 transition-colors">Kontakt</a>
          </nav>

          <div className="flex items-center space-x-4">
            
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors">
              E-shop
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Replace image background with video */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          src="/images/video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Zlepšite svoj CAD workflow 
            <br />
            <span className="text-teal-300 text-5xl">expertnými nástrojmi a podporou</span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
            SmartCAD je váš dôveryhodný partner pre CAD softvér, hardvér a školenia na Slovensku a v zahraničí.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-teal-500 text-white px-8 py-4 rounded-lg hover:bg-teal-600 transition-colors text-lg font-semibold flex items-center">
              Prehliadnuť CAD riešenia
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            
          </div>
          
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-12 h-12 text-white" style={{ marginTop: "40px", marginBottom: "-30px"}} />
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section id="riesenia" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Zabezpečujeme</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kompletné CAD riešenia od licencovania softvéru až po nastavenie hardvéru a poskytovanie servisných služieb.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow group">
              <div className="w-20 h-20 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500 transition-colors">
                <Monitor className="w-10 h-10 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">CAD Softvér</h3>
              <p className="text-gray-600 mb-6">
                AutoCAD, Revit, Civil 3D a ďalšie. Oficiálne Autodesk licencie a podpora.
              </p>
              <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors flex items-center mx-auto">
                Zistiť viac <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow group">
              <div className="w-20 h-20 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500 transition-colors">
                <HardDrive className="w-10 h-10 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">CAD Hardvér</h3>
              <p className="text-gray-600 mb-6">
                Vysokovýkonné pracovné stanice, monitory, plotre a 3D vstupné zariadenia.
              </p>
              <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors flex items-center mx-auto">
                Zistiť viac <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow group">
              <div className="w-20 h-20 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500 transition-colors">
                <GraduationCap className="w-10 h-10 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Školenia a workshopy</h3>
              <p className="text-gray-600 mb-6">
                Certifikované kurzy a prispôsobené školiace programy pre jednotlivcov a tímy.
              </p>
              <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors flex items-center mx-auto">
                Prihlásiť sa <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ marginTop: '5rem' }}>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow group">
              <div className="w-20 h-20 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500 transition-colors">
                <Workflow className="w-10 h-10 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Technické a IT služby</h3>
              <p className="text-gray-600 mb-6">
                Opravy plotrov, inštalácie sw, správa siete.
              </p>
              <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors flex items-center mx-auto">
                Zistiť viac <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow group">
              <div className="w-20 h-20 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500 transition-colors">
                <Presentation className="w-10 h-10 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Projekčná činnosť</h3>
              <p className="text-gray-600 mb-6">
                Železobetónové konštrukcie, TZB v Revite
              </p>
              <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors flex items-center mx-auto">
                Zistiť viac <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow group">
              <div className="w-20 h-20 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500 transition-colors">
                <Cog className="w-10 h-10 text-teal-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Konštrukčná činnosť</h3>
              <p className="text-gray-600 mb-6">
                Potrubia, oceľové konštrukcie, pevnostné výpočty.
              </p>
              <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors flex items-center mx-auto">
                Zistiť viac <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose SmartCAD */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Projektujeme a poskytujeme servisné služby</h2>
            <p className="text-xl text-gray-600">
              Využite naše viac ako 20-ročné skúsenosti vo svoj prospech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Oficiálny Autodesk partner</h3>
                <p className="text-gray-600">Autorizovaný predajca s priamym prístupom k najnovšiemu softvéru a podpore</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">20+ rokov skúseností</h3>
                <p className="text-gray-600">Dve desaťročia odborných znalostí v CAD riešeniach a technických službách</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Certifikovaní lektori</h3>
                <p className="text-gray-600">Profesionálni inžinieri a certifikovaní inštruktori</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Komplexné riešenia</h3>
                <p className="text-gray-600">Kompletné CAD hardvérové a softvérové balíky</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Popredajná podpora</h3>
                <p className="text-gray-600">Priebežné konzultácie a technická pomoc</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Lokálne odborné znalosti</h3>
                <p className="text-gray-600">Porozumenie slovenského trhu a predpisov</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-teal-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-teal-600 mb-2">500+</div>
              <div className="text-gray-600">Vyškolených profesionálov</div>
            </div>
            <div className="bg-teal-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-teal-600 mb-2">3000+</div>
              <div className="text-gray-600">Vybavených firiem</div>
            </div>
            <div className="bg-teal-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-teal-600 mb-2">98%</div>
              <div className="text-gray-600">Spokojnosť zákazníkov</div>
            </div>
            <div className="bg-teal-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-teal-600 mb-2">20+</div>
              <div className="text-gray-600">Rokov skúseností</div>
            </div>
          </div>
        </div>
      </section>


      {/* Cooperating Companies */}
    <section className="py-20 px-0 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">Spolupracujeme so silnými spoločnosťami</h2>
        <p className="text-xl text-gray-600">
          Naši dôveryhodní partneri a dodávatelia technológií
        </p>
      </div>

      <div className="relative overflow-hidden w-full">
        <div className="w-full">
          <div
            className="flex items-center gap-16 animate-company-scroll"
            style={{ width: 'max-content' }}
          >
            {[...companies, ...companies].map((company, idx) => (
              <div key={idx} className="flex items-center justify-center ">
                <img src={company.logo} alt={company.name} className="h-32 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>    
      </div>
      <style>
        {`
          @keyframes company-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-company-scroll {
            animation: company-scroll 40s linear infinite;
          }
        `}
      </style>
    </section>

      {/* Customer Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Dôverujú nám profesionáli</h2>
            <p className="text-xl text-gray-600">
              V oblasti inžinierstva a architektúry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "SmartCAD poskytol vynikajúce školenie pre náš tím. Lektori boli odborní a praktický prístup bol veľmi efektívny."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-slate-800">Ing. Peter Novák</div>
                  <div className="text-gray-600 text-sm">Hlavný architekt, ARCH Studio</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "CAD pracovná stanica, ktorú nám postavili, predčila očakávania. Perfektný výkon pre naše Civil 3D projekty."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-slate-800">Ing. Mária Svoboda</div>
                  <div className="text-gray-600 text-sm">Projektový manažér, BuildTech</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Vynikajúca podpora a služby. Pomohli nám bezproblémovo prejsť na najnovší Autodesk balík."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-slate-800">Ing. Tomáš Kováč</div>
                  <div className="text-gray-600 text-sm">CAD manažér, Engineering Plus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="produkty" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Odporúčané produkty a služby</h2>
            <p className="text-xl text-gray-600">
              Naše najpopulárnejšie riešenia pre CAD profesionálov
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-8 relative">
              <div className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Najpredávanejší
              </div>
              <Monitor className="w-16 h-16 text-teal-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Autodesk AutoCAD</h3>
              <p className="text-gray-600 mb-6">
                Priemyselný štandard 2D a 3D CAD softvér s plnou licenciou a podporou.
              </p>
              <button className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors">
                Získať cenovú ponuku
              </button>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 relative">
              <div className="absolute top-4 right-4 bg-slate-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Na mieru
              </div>
              <HardDrive className="w-16 h-16 text-slate-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">CAD pracovné stanice</h3>
              <p className="text-gray-600 mb-6">
                Vysokovýkonné počítače postavené špecificky pre CAD aplikácie.
              </p>
              <button className="bg-slate-500 text-white px-6 py-3 rounded-lg hover:bg-slate-600 transition-colors">
                Konfigurovať teraz
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 relative">
              <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Začína čoskoro
              </div>
              <GraduationCap className="w-16 h-16 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">AutoCAD školenie</h3>
              <p className="text-gray-600 mb-6">
                Komplexný AutoCAD kurz pre stavebných inžinierov - marec 2025.
              </p>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                Registrovať sa teraz
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Training Schedule */}
      <section id="skolenia" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Nadchádzajúce workshopy a školenia</h2>
            <p className="text-xl text-gray-600">
              Zdokonaľte svoje zručnosti s našimi certifikovanými školiacimi programami
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex">
                <button
                  onClick={() => setActiveTab('upcoming')}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === 'upcoming'
                      ? 'border-b-2 border-teal-500 text-teal-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Nadchádzajúce kurzy
                </button>
                <button
                  onClick={() => setActiveTab('custom')}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === 'custom'
                      ? 'border-b-2 border-teal-500 text-teal-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Školenia na mieru
                </button>
              </nav>
            </div>

            <div className="p-8">
              {activeTab === 'upcoming' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-6 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Calendar className="w-8 h-8 text-teal-600" />
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800">AutoCAD základy</h3>
                        <p className="text-gray-600">15.-17. marec 2025 | 3 dni | Bratislava</p>
                      </div>
                    </div>
                    <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors">
                      Registrovať
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Calendar className="w-8 h-8 text-teal-600" />
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800">Revit architektúra</h3>
                        <p className="text-gray-600">8.-12. apríl 2025 | 5 dní | Košice</p>
                      </div>
                    </div>
                    <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors">
                      Registrovať
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Calendar className="w-8 h-8 text-teal-600" />
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800">Civil 3D pre infraštruktúru</h3>
                        <p className="text-gray-600">20.-24. máj 2025 | 5 dní | Bratislava</p>
                      </div>
                    </div>
                    <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors">
                      Registrovať
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'custom' && (
                <div className="text-center py-12">
                  <Users className="w-16 h-16 text-teal-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Školiace programy na mieru</h3>
                  <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Ponúkame prispôsobené školiace programy pre váš tím, dodávané na vašom mieste alebo online. 
                    Kontaktujte nás, aby sme prediskutovali vaše špecifické potreby a vytvorili prispôsobené učebné osnovy.
                  </p>
                  <button className="bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors">
                    Požiadať o školenie na mieru
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Preview */}
      <section id="blog" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Najnovšie z nášho blogu</h2>
            <p className="text-xl text-gray-600">
              Tipy, trendy a novinky zo sveta CAD technológií
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors flex items-center">
                    Čítať viac <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors">
              Zobraziť všetky články
            </button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="kontakt" className="py-20 px-6 bg-teal-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Potrebujete pomoc s výberom správnych CAD nástrojov?</h2>
          <p className="text-xl mb-8 opacity-90">
            Kontaktujte našich expertov pre personalizované odporúčania a riešenia prispôsobené vašim potrebám.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-white text-teal-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold">
              Rezervovať bezplatnú konzultáciu
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-teal-600 transition-colors text-lg font-semibold">
              Kontaktovať nás
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-3" />
              <div className="font-semibold mb-1">Adresa</div>
              <div className="opacity-90">Bratislava, Slovensko</div>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-3" />
              <div className="font-semibold mb-1">Telefón</div>
              <div className="opacity-90">+421 2 1234 5678</div>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-3" />
              <div className="font-semibold mb-1">Email</div>
              <div className="opacity-90">info@smartcad.sk</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-teal-500 rounded-sm flex items-center justify-center">
                  <div className="w-5 h-5 bg-white rounded-sm opacity-80"></div>
                </div>
                <span className="text-xl font-bold">
                  smart<span className="text-teal-400">CAD</span>
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Váš dôveryhodný partner pre CAD softvér, hardvér a školiace riešenia na Slovensku.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Produkty</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">AutoCAD</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Revit</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Civil 3D</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CAD pracovné stanice</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Plotre</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Služby</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Školenia</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Konzultácie</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Podpora</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Inštalácia</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Údržba</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Zostaňte informovaní o najnovších CAD novinkách a školiacich príležitostiach.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Váš email"
                  className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button className="bg-teal-500 px-4 py-2 rounded-r-lg hover:bg-teal-600 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 SmartCAD. Všetky práva vyhradené.
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Ochrana súkromia</a>
              <a href="#" className="hover:text-white transition-colors">Podmienky služby</a>
              <a href="#" className="hover:text-white transition-colors">Cookie zásady</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;