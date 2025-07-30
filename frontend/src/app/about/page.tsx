export default function About() {
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-2">About Wood Cabin Rentals</h1>
        <p className="text-center mb-8">Your gateway to the best accommodations in the region</p>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="mb-4">
              Wood Cabin Rentals was founded in 2025 with a simple mission: to connect travelers with
              authentic local accommodations while supporting the community. What started as a small family 
              business has grown into the region's premier rental platform, specializing in unique 
              lodging experiences that highlight the natural beauty of our area.
            </p>
            <p className="mb-4">
              Our platform was initially created to serve visitors for the Mons Ultra Trail, but we quickly
              expanded to accommodate guests year-round. We work closely with local property owners to
              ensure that each listing meets our high standards for quality, comfort, and authenticity.
            </p>
            <p>
              As proud members of the community, we're committed to sustainable tourism practices and
              supporting the local economy. When you book with Wood Cabin Rentals, you're not just finding
              a place to stay – you're becoming part of our story.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Accommodations</h3>
              <p>We personally vet each property to ensure it meets our high standards for comfort, cleanliness, and amenities.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p>Our dedicated customer service team is available around the clock to assist both guests and property owners.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p>We provide insider knowledge about the area, helping guests discover the best trails, restaurants, and activities.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="mb-6">
              Wood Cabin Rentals is powered by a dedicated team of local professionals who are passionate
              about hospitality and our beautiful region. Our team combines tech expertise with deep knowledge
              of the local area to create a seamless booking experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mb-4"></div>
                <h3 className="text-xl font-semibold">John Smith</h3>
                <p className="text-blue-600">Founder & CEO</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mb-4"></div>
                <h3 className="text-xl font-semibold">Maria Garcia</h3>
                <p className="text-blue-600">Property Manager</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }