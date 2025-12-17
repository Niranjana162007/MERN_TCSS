export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold mb-4">Why ArtfulAbode?</h1>
          <p className="text-xl max-w-3xl">
            Discover the story behind India's most trusted home decor destination
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                ArtfulAbode was born from a simple belief: every home deserves to be beautiful, comfortable, and uniquely yours. Founded in 2020, we started as a small team passionate about bringing affordable, high-quality home decor to Indian families.
              </p>
              <p className="text-lg text-gray-600">
                Today, we've grown into a trusted platform serving thousands of customers across India, but our mission remains the same - to help you create spaces that inspire and comfort.
              </p>
            </div>
            <div className="bg-orange-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To make beautiful home decor accessible to everyone, while supporting local artisans and sustainable practices.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose ArtfulAbode?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assured</h3>
              <p className="text-gray-600">Every product is carefully curated and quality-tested before reaching you.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Artisan Support</h3>
              <p className="text-gray-600">We partner with local artisans to bring you authentic, handcrafted pieces.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-600">Quick and secure delivery across India with careful packaging.</p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-orange-600 mb-3">Sustainability</h3>
              <p className="text-gray-600 mb-6">We prioritize eco-friendly materials and sustainable production methods.</p>
              
              <h3 className="text-xl font-semibold text-red-600 mb-3">Authenticity</h3>
              <p className="text-gray-600">Every piece tells a story, crafted with traditional techniques and modern design.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">Affordability</h3>
              <p className="text-gray-600 mb-6">Beautiful homes shouldn't break the bank. We offer premium quality at fair prices.</p>
              
              <h3 className="text-xl font-semibold text-pink-600 mb-3">Customer First</h3>
              <p className="text-gray-600">Your satisfaction is our priority, with 24/7 support and easy returns.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}