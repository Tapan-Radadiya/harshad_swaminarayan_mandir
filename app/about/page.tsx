import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import presidentimage from "@/public/images/leaders/president.png"
import secretary from "@/public/images/leaders/Secretary.jpg"
import priest from "@/public/images/leaders/Priest.jpg"
export default function About() {
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="bg-primary text-on-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Our Temple</h1>
          <p className="text-xl max-w-3xl mx-auto">Learn about the history, mission, and values of Harshad Swaminarayan Mandir</p>
        </div>
      </div>

      {/* Temple History */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-primary mb-4">Our History</h2>
              <p className="text-gray-700 mb-4">
                Harshad Swaminarayan Mandir was established in 1995 by a group of devoted followers of
                Lord Swaminarayan. What began as a small prayer hall has now grown into a vibrant
                temple complex serving thousands of devotees.
              </p>
              <p className="text-gray-700 mb-4">
                The temple was inaugurated on May 15, 1995, with a grand ceremony attended by
                spiritual leaders and hundreds of devotees. Over the years, the temple has expanded
                its facilities to include a main prayer hall, community center, dining hall, and
                classrooms for religious education.
              </p>
              <p className="text-gray-700">
                Today, Harshad Swaminarayan Mandir stands as a testament to the devotion and hard work
                of our community members who have contributed their time, resources, and energy to
                create this sacred space.
              </p>
            </div>
            <div className="md:w-1/2 h-80 w-full bg-primary-light rounded-lg flex items-center justify-center">
              <span className="text-primary text-xl font-medium">Temple History Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-12 bg-primary-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">Our Mission & Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Spiritual Growth</h3>
              <p className="text-gray-700">
                We are committed to providing a nurturing environment for spiritual growth through
                regular worship, meditation, and scriptural study.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Service</h3>
              <p className="text-gray-700">
                We believe in serving the broader community through charitable activities, food
                distribution, and support for those in need.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cultural Preservation</h3>
              <p className="text-gray-700">
                We are dedicated to preserving and promoting Hindu culture, traditions, and values
                through education, arts, and celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Temple Leadership */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">Temple Leadership</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Replace with actual temple leaders */}
            <div className="text-center">
              <div className="h-64 w-64 mx-auto mb-4 rounded-full bg-primary-light flex items-center justify-center">
                <Image
                  src={priest}
                  alt='Priest Image'
                  className='object-cover'
                />
              </div>
              <h3 className="text-xl font-semibold">Ghanshyam Dada</h3>
              <p className="text-gray-600">Head Priest</p>
            </div>

            <div className="text-center">
              <div className="h-64 w-64 mx-auto mb-4 rounded-full bg-primary-light flex items-center justify-center">
                <Image
                  src={presidentimage}
                  alt='President Image'
                  className='object-cover'
                />
              </div>
              <h3 className="text-xl font-semibold">Sudhir Bhanderi</h3>
              <p className="text-gray-600">Temple President</p>
            </div>

            <div className="text-center">
              <div className="h-64 w-64 mx-auto mb-4 rounded-full bg-primary-light flex items-center justify-center">
                <Image
                  src={secretary}
                  alt='President Image'
                  className='object-cover'
                />
              </div>
              <h3 className="text-xl font-semibold">Das Dada</h3>
              <p className="text-gray-600">Temple Secretary</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}