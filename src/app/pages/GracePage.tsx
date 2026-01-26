'use client';

export function GracePage() {
  const historicStories = [
    {
      title: 'The Origin of Tarapith',
      content: `Tarapith is one of the 51 Shakti Peethas, where the third eye (Tara) of Goddess Sati fell. According to Hindu mythology, when Lord Shiva was carrying the charred body of Sati, Lord Vishnu cut it into pieces with his Sudarshan Chakra to stop Shiva's destructive dance. The places where these body parts fell became sacred Shakti Peethas. Tarapith, meaning "Tara's place," is where the third eye fell, making it one of the most powerful spiritual centers.`
    },
    {
      title: 'Bamakhepa - The Mad Saint',
      content: `Bamakhepa (1837-1911) was one of the most revered saints of Tarapith. Known as the "mad saint" for his unconventional ways, he lived in the cremation ground near the temple and was completely devoted to Maa Tara. Legends say that Maa Tara herself appeared to him and granted him divine powers. He would often be seen talking to the deity as if she were a living person. His intense devotion and spiritual practices made him a living legend, and his samadhi (tomb) near the temple is still visited by thousands of devotees.`
    },
    {
      title: 'The Power of Maa Tara',
      content: `Maa Tara is the second of the ten Mahavidyas and represents the primordial energy that guides devotees through darkness. Her name means "star" in Sanskrit, symbolizing the light that dispels ignorance. She is known for her fierce yet compassionate nature. Despite her terrifying appearance with a garland of skulls, she is considered the most merciful of all Mahavidyas, always ready to protect her devotees from all forms of danger and obstacles.`
    },
    {
      title: 'The Sacred Yantra',
      content: `The Tara Yantra is a powerful geometric symbol used in tantric worship. It represents the divine energy of Maa Tara and is believed to grant spiritual protection, remove obstacles, and bestow wisdom upon devotees. The yantra is often worshipped with specific mantras and rituals, and is considered a direct connection to the divine mother's grace.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F0] to-[#F5E6D3]">
      {/* Hero Section with Image */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Tara-Maa-brass-statue.jpg"
            alt="Maa Tara"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            <h1 className="text-6xl md:text-7xl font-serif text-white mb-6 drop-shadow-2xl">
              Grace of Maa Tara Devi
            </h1>
            <div className="w-32 h-1 bg-[#F29F05] mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto drop-shadow-lg">
              The Divine Mother who guides us through darkness to spiritual enlightenment
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-serif text-[#D94436] mb-6">
                The Divine Mother
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Maa Tara is one of the ten Mahavidyas (Great Wisdom Goddesses) in Hindu tantra.
                She is the second of the ten Mahavidyas and is considered to be the form of the
                primordial energy, the Divine Mother who creates and destroys.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                The name "Tara" means "star" in Sanskrit, symbolizing the light that guides us
                through the darkness of ignorance. She is known as the goddess who helps devotees
                cross the ocean of material existence to reach spiritual enlightenment.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/tara-yantra-9057449665196_l.jpg"
                alt="Tara Yantra"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Temple Gallery Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-serif text-[#D94436] text-center mb-4">
            Sacred Tarapith Temple
          </h2>
          <div className="w-24 h-1 bg-[#F29F05] mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/images/tt-hills-sri-tara-tarini-devi-temple1.webp"
                  alt="Tarapith Temple"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-[#D94436] mb-3">Main Temple</h3>
                <p className="text-gray-700 leading-relaxed">
                  The main sanctum of Tarapith Temple houses the sacred idol of Maa Tara, 
                  attracting thousands of devotees daily who seek her divine blessings.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/temple1.jpeg"
                  alt="Temple Architecture"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-[#D94436] mb-3">Temple Architecture</h3>
                <p className="text-gray-700 leading-relaxed">
                  The temple's unique architecture reflects centuries of devotion and spiritual 
                  significance, standing as a testament to the power of faith.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            <h3 className="text-3xl font-serif text-[#D94436] mb-6">About Tarapith</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Tarapith is a major Hindu pilgrimage site located in Birbhum district of West
                Bengal, India. The temple is dedicated to Maa Tara and is one of the 51 Shakti
                Peethas, where various body parts of the Hindu goddess Sati fell to earth after
                her body was dismembered by Lord Vishnu's Sudarshan Chakra.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                The temple attracts thousands of devotees who come seeking the blessings of Maa
                Tara for protection, wisdom, and spiritual liberation. The temple is especially
                significant for tantric practitioners and is associated with the famous saint
                Bamakhepa, who was known for his intense devotion to Maa Tara.
              </p>
            </div>
          </div>
        </div>

        {/* Historic Stories Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-serif text-[#D94436] text-center mb-4">
            Historic Stories & Legends
          </h2>
          <div className="w-24 h-1 bg-[#F29F05] mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {historicStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D94436] to-[#F29F05] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-serif text-[#D94436]">
                    {story.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {story.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mantras Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-serif text-[#D94436] text-center mb-4">
            Sacred Mantras
          </h2>
          <div className="w-24 h-1 bg-[#F29F05] mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#D94436] to-[#B8860B] rounded-xl shadow-lg p-8 text-white text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">ॐ</span>
                </div>
                <h3 className="text-xl font-serif mb-4">Basic Mantra</h3>
              </div>
              <p className="text-3xl font-bold mb-3">ॐ ह्रीं स्त्रीं हूं फट्</p>
              <p className="text-lg opacity-90">Om Hreem Streem Hoom Fatt</p>
            </div>

            <div className="bg-gradient-to-br from-[#D94436] to-[#B8860B] rounded-xl shadow-lg p-8 text-white text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">ह्रीं</span>
                </div>
                <h3 className="text-xl font-serif mb-4">Extended Mantra</h3>
              </div>
              <p className="text-3xl font-bold mb-3">ह्रीं स्त्रीं हूं फट्</p>
              <p className="text-lg opacity-90">Hreem Streem Hoom Fatt</p>
            </div>

            <div className="bg-gradient-to-br from-[#D94436] to-[#B8860B] rounded-xl shadow-lg p-8 text-white text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">श्रीं</span>
                </div>
                <h3 className="text-xl font-serif mb-4">Power Mantra</h3>
              </div>
              <p className="text-3xl font-bold mb-3">श्रीं ह्रीं स्त्रीं हूं फट्</p>
              <p className="text-lg opacity-90">Shreem Hreem Streem Hoom Fatt</p>
            </div>
          </div>
        </div>

        {/* Spiritual Significance Section */}
        <div className="bg-gradient-to-r from-[#D94436] to-[#F29F05] rounded-2xl shadow-2xl p-8 md:p-12 text-white mb-16">
          <h2 className="text-4xl font-serif mb-8 text-center">Spiritual Significance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-serif mb-4 flex items-center">
                <span className="mr-3">🕉️</span>
                The Fierce Protector
              </h3>
              <p className="text-lg leading-relaxed opacity-95">
                Maa Tara is depicted with a fierce form, adorned with a garland of skulls,
                representing the destruction of ego and ignorance. Despite her fierce appearance,
                she is considered to be the most compassionate of all the Mahavidyas, always ready
                to protect and guide her devotees.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-serif mb-4 flex items-center">
                <span className="mr-3">✨</span>
                Divine Blessings
              </h3>
              <p className="text-lg leading-relaxed opacity-95">
                Devotees worship Maa Tara for various blessings including protection from danger,
                removal of obstacles, spiritual wisdom, and liberation from the cycle of birth and
                death. Her worship is believed to grant both material and spiritual prosperity.
              </p>
            </div>
          </div>
        </div>

        {/* Devotional Quote */}
        <div className="text-center bg-white rounded-2xl shadow-xl p-12">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#D94436] to-[#F29F05] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl text-white">ॐ</span>
              </div>
            </div>
            <p className="text-4xl md:text-5xl font-serif text-[#D94436] italic mb-6">
              "ॐ ह्रीं स्त्रीं हूं फट्"
            </p>
            <p className="text-2xl text-gray-600 mb-4 font-light">
              Om Hreem Streem Hoom Fatt
            </p>
            <p className="text-lg text-gray-500 mb-8">
              - Sacred Mantra of Maa Tara
            </p>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-700 text-lg leading-relaxed">
                May the divine grace of Maa Tara guide you through all obstacles and lead you to 
                spiritual enlightenment. Her compassion knows no bounds, and her protection is 
                eternal for those who seek her with true devotion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
