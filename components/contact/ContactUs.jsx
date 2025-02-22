const ContactUs = () => {
    return (
      <section className="bg-blue-50 py-12 pt-56">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
          <p className="text-black mt-2">
            Email, call, or complete the form to learn how Icon Gym can help you.
          </p>
  
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Contact Details */}
            <div>
              <h3 className="text-lg text-black font-semibold">Customer Support</h3>
              <p className="text-black">Available 24/7 for your concerns.</p>
              <p className="mt-2 text-black">📧 support@icongym.com</p>
              <p className="text-black">📞 +1-234-567-890</p>
  
              <h3 className="text-lg text-black font-semibold mt-6">Feedback & Media</h3>
              <p className="text-black">We appreciate your feedback!</p>
              <p className="mt-2 text-black ">📧 media@icongym.com</p>
            </div>
  
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-black">Get in Touch</h3>
              <form className="mt-4">
                <input type="text" placeholder="First Name" className="w-full p-3 border rounded-md mt-2" />
                <input type="text" placeholder="Last Name" className="w-full p-3 border rounded-md mt-2" />
                <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md mt-2" />
                <input type="text" placeholder="Phone Number" className="w-full p-3 border rounded-md mt-2" />
                <textarea placeholder="How can we help?" className="w-full p-3 border rounded-md mt-2" rows="4"></textarea>
                <button className="bg-blue-600 text-black w-full py-3 rounded-md mt-4">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactUs;
  