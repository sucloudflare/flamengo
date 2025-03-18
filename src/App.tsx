import React, { useState, useEffect } from 'react';
import { Trophy, Star, Users, Beer, ShoppingBag, Store, Flame, Calendar, MapPin, Heart, Award, Shield, Clock, Flag } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('titulos');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white text-sm md:text-base">
      {/* Navigation */}
      <nav className={`fixed w-[calc(100%-3cm)] top-0 z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-black/90 backdrop-blur-lg' : 'bg-transparent'
      }`} style={{ margin: '20px', left: '1.5cm', right: '1.5cm' }}>
      <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
      <div className="flex items-center gap-2">
      <Flame className="w-8 h-8 text-red-500 animate-pulse-slow" />
      <span className="text-xl md:text-2xl font-football font-bold">Nação Rubro-Negra</span>
      </div>
      <div className="hidden md:flex items-center gap-6">
      <NavLink href="#comunidade">Comunidade</NavLink>
      <NavLink href="#titulos">Títulos</NavLink>
      <NavLink href="#idolos">Ídolos</NavLink>
      <NavLink href="#historia">História</NavLink>
      <NavLink href="#estatisticas">Estatísticas</NavLink>
      </div>
      </div>
      </div>
      </nav>

      {/* Hero Banner */}
      <div className="relative h-screen" style={{ margin: '20px' }}>
      <div 
      className="absolute inset-0 bg-hero-pattern bg-cover bg-center"
      style={{
      transform: `translateY(${scrollY * 0.5}px)`,
      }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-red-900/50 to-black">
      <div className="container mx-auto px-4 h-full flex items-center">
      <div className="max-w-3xl" style={{ marginTop: '2cm', margin: '20px' }}>
      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
      Nação Rubro-Negra
      <span className="block text-red-500 animate-pulse-glow text-xl md:text-3xl">Sobradinho-BA</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-200 mb-8 animate-slide-in">
      Onde a paixão pelo Mengão une gerações. Uma história de amor, tradição e glória.
      </p>
      <div className="flex gap-6">
      <button 
      className="bg-red-600 hover:bg-red-700 px-4 py-2 md:px-8 md:py-3 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
      onClick={() => document.body.style.fontSize = 'smaller'}
      >
      Mais sobre Fla
      </button>
      <button className="glass-card px-4 py-2 md:px-8 md:py-3 rounded-full font-semibold transition-all hover:bg-white/20">
      Nossa História
      </button>
      </div>
      </div>
      </div>
      </div>
      </div>

      {/* Latest Match Result */}
      <div className="bg-stadium-pattern bg-cover bg-center relative py-16" style={{ margin: '20px' }}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div className="container mx-auto px-4 relative">
      <div className="text-center mb-12">
      <h2 className="football-title text-red-500 text-lg md:text-xl">Último Jogo</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
      <div className="flex flex-col items-center">
        <img 
      src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg" 
      alt="Flamengo" 
      className="w-16 h-16 md:w-24 md:h-24 object-contain"
        />
        <p className="text-base md:text-lg font-bold mt-4">Flamengo</p>
      </div>
      <div className="score-display text-red-500 text-lg md:text-2xl flex items-center justify-center">
        0 - 0
      </div>
      <div className="flex flex-col items-center">
        <img 
      src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Fluminense_FC_escudo.png" 
      alt="flu" 
      className="w-16 h-16 md:w-24 md:h-24 object-contain"
        />
        <p className="text-base md:text-lg font-bold mt-4">Fluminense</p>
      </div>
      </div>
      <p className="text-xs md:text-base text-gray-400 mt-6 text-center">Campeonato Carioca - Final - 16/03/2025</p>
      </div>
      </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-b from-red-900 to-black relative overflow-hidden">
      <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <StatCard 
      icon={<Trophy className="w-8 h-8 md:w-10 md:h-10" />}
      number="38"
      label="Títulos Estaduais"
      description="Maior campeão do Rio"
      />
      <StatCard 
      icon={<Shield className="w-8 h-8 md:w-10 md:h-10" />}
      number="8"
      label="Brasileiros"
      description="Recordista nacional"
      />
      <StatCard 
      icon={<Award className="w-8 h-8 md:w-10 md:h-10" />}
      number="3"
      label="Libertadores"
      description="Glória eterna"
      />
      <StatCard 
      icon={<Flag className="w-8 h-8 md:w-10 md:h-10" />}
      number="1"
      label="Mundial"
      description="Campeão do mundo"
      />
      </div>
      </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
      {/* Community Section */}
      <section id="comunidade" className="mb-24">
      <SectionTitle 
      icon={<Users className="w-6 h-6 md:w-8 md:h-8" />} 
      title="Nossa Comunidade"
      subtitle="Conheça os rubro-negros que fazem a diferença em Sobradinho"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <FanCard
      name="Jean Carlos"
      description="Pai de 2 meninos e torcedor fanático desde criança. Não perde um jogo do Mengão!"
      icon={<Users className="w-5 h-5 md:w-6 md:h-6" />}
      location="Portelinha, Sobradinho"
      since="1985"
      image="https://images.unsplash.com/photo-1508341591423-4347099e1f19?auto=format&fit=crop&q=80&w=300"
      />
      <FanCard
      name="João Bala"
      description="Dono do Boteco do Mengão, o point oficial da Nação em Sobradinho. Promoção todo dia de jogo!"
      icon={<Beer className="w-5 h-5 md:w-6 md:h-6" />}
      location="Av. Jose Balbino, 123"
      since="1990"
      image="https://images.unsplash.com/photo-1485872299829-c673f5194813?auto=format&fit=crop&q=80&w=300"
      />
      <FanCard
      name="Tibério"
      description="Proprietário do Mercadinho Rubro-Negro. Aqui a paixão pelo Fla está em cada corredor!"
      icon={<ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />}
      location="Rua 06, S13"
      since="1978"
      image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
      />
      <FanCard
      name="Carlinhos"
      description="Dono do Depósito Mengão. Quando o Fla ganha, a cerveja fica mais barata!"
      icon={<Store className="w-5 h-5 md:w-6 md:h-6" />}
      location="Rua 02, 45A"
      since="1995"
      image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300"
      />
      </div>
      </section>

        {/* History Section */}
        <section id="historia" className="mb-24">
          <SectionTitle 
            icon={<Clock className="w-10 h-10" />} 
            title="Momentos Históricos"
            subtitle="Reviva as conquistas que marcaram gerações"
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-6">
              <iframe
                className="w-full aspect-video rounded-lg mb-4"
                src="https://www.youtube.com/embed/WUWM8JP5PrI?si=Lya2vFnHECNkW2o-"
                title="Final Libertadores 2019"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <h3 className="text-2xl font-bold mb-2">Final Libertadores 2019</h3>
              <p className="text-gray-300">A virada histórica contra o River Plate que trouxe a Glória Eterna de volta ao Mengão após 38 anos.</p>
            </div>
            <div className="glass-card p-6">
              <iframe
                className="w-full aspect-video rounded-lg mb-4"
                src="https://www.youtube.com/embed/iK4CV4hc_nk?si=XhRy0uEzvejzVKRj"
                title="Gols Históricos"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <h3 className="text-2xl font-bold mb-2">Gols Inesquecíveis</h3>
              <p className="text-gray-300">Os momentos mais marcantes da história do Mais Querido do Brasil, narrados por vozes que emocionaram gerações.</p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section id="estatisticas" className="mb-24">
          <SectionTitle 
            icon={<Award className="w-10 h-10" />} 
            title="Estatísticas Históricas"
            subtitle="Os números que comprovam nossa grandeza"
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Maiores Artilheiros</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span>Zico</span>
                  <span className="text-red-500 font-bold">509 gols</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Gabigol</span>
                  <span className="text-red-500 font-bold">145 gols</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Nunes</span>
                  <span className="text-red-500 font-bold">119 gols</span>
                </li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Mais Jogos</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span>Júnior</span>
                  <span className="text-red-500 font-bold">857 jogos</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Zico</span>
                  <span className="text-red-500 font-bold">731 jogos</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Andrade</span>
                  <span className="text-red-500 font-bold">580 jogos</span>
                </li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Títulos por Década</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span>2020s</span>
                  <span className="text-red-500 font-bold">6 títulos</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>2010s</span>
                  <span className="text-red-500 font-bold">12 títulos</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>1980s</span>
                  <span className="text-red-500 font-bold">15 títulos</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" /> Localização
              </h3>
              <p className="text-gray-400">Sobradinho, Bahia</p>
              <p className="text-gray-400">Centro, Rua Principal, 123</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" /> Próximos Jogos
              </h3>
              <ul className="text-gray-400 space-y-2">
                <li>Flamengo x Botafogo - 14/04</li>
                <li>Palmeiras x Flamengo - 21/04</li>
                <li>Flamengo x São Paulo - 28/04</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5" /> Próximos Títulos
              </h3>
              <ul className="text-gray-400 space-y-2">
                <li>Super Mundial - 14/06</li>
                <li>Libertadores - Fase de Grupos</li>
                <li>Brasileiro - Em andamento</li>
              </ul>
            </div>
            <div>
  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
    <Heart className="w-5 h-5" /> Hino do Mengão
  </h3>
  
  {/* Player de áudio MP3 */}
  
  
  {/* Player do Spotify */}
  <iframe
    style={{ borderRadius: '12px' }}
    src="https://open.spotify.com/embed/track/0IcXPtfEmnvEFovvjMSyXa?utm_source=generator"
    width="100%"
    height="152"
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>
</div>

          </div>
          <div className="text-center text-gray-500 border-t border-gray-800 pt-8">
            <p className="mb-2">© 2024 Nação Rubro-Negra de Sobradinho-BA</p>
            <p className="text-sm">Uma vez Flamengo, sempre Flamengo!</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, children }) {
  return (
    <a 
      href={href} 
      className="text-white hover:text-red-400 transition-colors font-medium text-lg"
    >
      {children}
    </a>
  );
}

function StatCard({ icon, number, label, description }) {
  return (
    <div className="stat-card transform hover:scale-105 transition-all">
      <div className="flex flex-col items-center">
        <div className="text-red-500 mb-4">{icon}</div>
        <div className="text-5xl font-bold mb-2">{number}</div>
        <div className="text-xl font-semibold mb-1">{label}</div>
        <div className="text-sm text-gray-400">{description}</div>
      </div>
    </div>
  );
}

function SectionTitle({ icon, title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="text-red-500">{icon}</div>
        <h2 className="text-5xl font-football">{title}</h2>
      </div>
      {subtitle && (
        <p className="text-xl text-gray-400">{subtitle}</p>
      )}
    </div>
  );
}

function FanCard({ name, description, icon, location, since, image }) {
  return (
    <div className="glass-card transform hover:scale-105 transition-all">
      <div className="relative h-48 mb-4 rounded-t-2xl overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-red-500">{icon}</div>
          <h3 className="text-xl font-bold">{name}</h3>
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="text-sm text-gray-400">
          <p className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> {location}
          </p>
          <p className="flex items-center gap-2 mt-1">
            <Calendar className="w-4 h-4" /> Mengão desde {since}
          </p>
        </div>
      </div>
    </div>
  );
}

function TabButton({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 rounded-full transition-all text-lg ${
        active 
          ? 'bg-red-600 text-white shadow-lg shadow-red-500/30' 
          : 'bg-white/10 text-gray-300 hover:bg-white/20'
      }`}
    >
      {children}
    </button>
  );
}

function TitleCard({ title, years, image, description }) {
  return (
    <div className="glass-card overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-red-400 mb-3">{years}</p>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

function PlayerCard({ name, image, years, description, stats, achievements }) {
  return (
    <div className="glass-card overflow-hidden transform hover:scale-105 transition-all">
      <div className="player-image-hover">
        <img src={image} alt={name} className="w-full h-64 object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        <p className="text-red-400 text-sm mb-2">{years}</p>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="grid grid-cols-3 gap-4 text-center mb-4">
          <div>
            <div className="text-2xl font-bold text-red-500">{stats.goals}</div>
            <div className="text-xs text-gray-400">Gols</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-red-500">{stats.games}</div>
            <div className="text-xs text-gray-400">Jogos</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-red-500">{stats.titles}</div>
            <div className="text-xs text-gray-400">Títulos</div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <h4 className="text-sm font-semibold mb-2">Conquistas</h4>
          <ul className="text-sm text-gray-400">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-center gap-2 mb-1">
                <Star className="w-4 h-4 text-red-500" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;