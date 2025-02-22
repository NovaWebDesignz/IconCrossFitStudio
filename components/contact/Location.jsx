const Location = () => {
    return (
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-gray-900">Our Location</h2>
          <p className="text-gray-600 mt-2">Connecting Near and Far</p>
  
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Google Map */}
            <div className="h-64 w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345084326!2d-122.41941518468153!3d37.77492977975995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b39e8b1%3A0x5a843b9e40cdbb9d!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1623829129261!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
  
            {/* Address */}
            <div>
              <h3 className="text-lg font-semibold">Headquarters</h3>
              <p className="text-gray-600">Icon Gym Inc.</p>
              <p className="mt-2">123 Fitness St, Suite 100</p>
              <p>San Francisco, CA 94103</p>
              <p className="mt-2 text-gray-500">United States</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Location;
  