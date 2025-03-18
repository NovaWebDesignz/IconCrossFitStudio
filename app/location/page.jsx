'use client';

import Head from 'next/head';

export default function Location() {
  return (
    <>
      <Head>
        <title>Our Locations - Icon CrossFit Fitness Studio</title>
        <meta name="description" content="Find our Icon CrossFit Fitness Studio branches near you." />
      </Head>

      <section className="location-header">
        <h1>🏋️‍♂️ Find Your Nearest Icon CrossFit Fitness Studio 🏋️‍♀️</h1>
        <p>Train with the best at any of our locations! Click on the maps below for directions. </p>
      </section>

      <section className="locations">
        <div className="location">
          <h2>📍 Icon CrossFit Fitness Studio</h2>
          <p>🔥 The ultimate fitness destination for all!</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0255126480383!2d80.1053483!3d12.906081000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f9b46523bc1%3A0x8b65807cb9020a5d!2sIcon%20CrossFit%20Fitness%20studio!5e0!3m2!1sen!2sin!4v1742302890536!5m2!1sen!2sin" loading="lazy"></iframe>
        </div>

        <div className="location">
          <h2>📍 Icon Women & Kids Fitness Studio</h2>
          <p>👩‍👦 Specially designed for women and kids to train in a comfortable environment.</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9564270716614!2d80.1064078!3d12.910522100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fb8cf1853a9%3A0xf7dbf2fde55e5188!2sIcon%20women%20and%20kids%20fitness%20studio!5e0!3m2!1sen!2sin!4v1742302919857!5m2!1sen!2sin" loading="lazy"></iframe>
        </div>

        <div className="location">
          <h2>📍 Icon CrossFit Mappedu</h2>
          <p>💪 Premium training center with expert coaches and advanced equipment.</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2780543481717!2d80.1430856!3d12.8898338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52590057a928ed%3A0x7fc6f8ff98cc38ac!2sICON%20CROSSFIT%20FITNESS%20STUDIO%20MAPPEDU!5e0!3m2!1sen!2sin!4v1742302933055!5m2!1sen!2sin" loading="lazy"></iframe>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Start Your Fitness Journey? 🚀</h2>
        <p>Come visit us at any of our locations and take the first step towards a healthier you! 🏆</p>
        <a href="/contact" className="cta-button">Contact Us</a>
      </section>

      <style jsx>{`
        .location-header {
          text-align: center;
          padding: 2rem;
          background: #121212;
          color: #fff;
        }

        .locations {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          padding: 2rem;
          background: #f5f5f5;
        }

        .location {
          background: #fff;
          padding: 1.5rem;
          border-radius: 10px;
          width: 90%;
          max-width: 800px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          text-align: center;
        }

        .location h2 {
          color: #d63031;
        }

        iframe {
          width: 100%;
          height: 350px;
          border-radius: 8px;
          margin-top: 1rem;
        }

        .cta {
          text-align: center;
          padding: 2rem;
          background: #d63031;
          color: #fff;
        }

        .cta-button {
          display: inline-block;
          margin-top: 1rem;
          padding: 10px 20px;
          background: #fff;
          color: #d63031;
          font-weight: bold;
          text-transform: uppercase;
          border-radius: 5px;
          text-decoration: none;
          transition: 0.3s ease-in-out;
        }

        .cta-button:hover {
          background: #f5f5f5;
        }
      `}</style>
    </>
  );
}
