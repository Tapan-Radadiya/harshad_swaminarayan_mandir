import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

// Mock data - in a real app, this would come from an API
interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  image?: string;
  category: string;
  location: string;
  organizer: string;
  fullDescription: string;
}

async function getEvent(slug: string) {
  // In a real app, fetch this data from an API
  const allEvents: Event[] = [
    {
      id: '1',
      title: 'Diwali Celebration',
      date: 'November 12, 2023',
      time: '6:00 PM - 10:00 PM',
      description: 'Join us for a special Diwali celebration with prayers, lighting of diyas, cultural performances, and prasad.',
      image: '/images/events/diwali.jpg',
      category: 'festival',
      location: 'Main Temple Hall',
      organizer: 'Temple Cultural Committee',
      fullDescription: 'Join us for a grand Diwali celebration at Harshad Swaminarayan Mandir. The festival of lights symbolizes the victory of light over darkness and good over evil.\n\nThe evening will begin with a special prayer ceremony (puja) dedicated to Goddess Lakshmi, followed by the lighting of hundreds of diyas throughout the temple premises. We will also have cultural performances including traditional dances and music by temple youth groups.\n\nThe celebration will conclude with a community dinner featuring traditional festive dishes. All devotees are welcome to participate in this joyous occasion.',
    },
    {
      id: '2',
      title: 'Weekly Bhajan Session',
      date: 'Every Sunday',
      time: '10:00 AM - 12:00 PM',
      description: 'Weekly devotional singing session led by our temple musicians.',
      image: '/images/events/bhajan.jpg',
      category: 'regular',
      location: 'Temple Prayer Hall',
      organizer: 'Temple Music Group',
      fullDescription: 'Our weekly bhajan sessions are a cornerstone of our temple\'s spiritual practice. Every Sunday, devotees gather to sing devotional songs in praise of the divine.\n\nThe session is led by our temple\'s experienced musicians who guide participants through traditional bhajans and kirtans. These sessions are open to everyone, regardless of musical experience or background.\n\nParticipating in bhajans is a powerful way to connect with the divine through the medium of music and collective devotion. The vibrations created by group singing help create a deeply meditative and uplifting atmosphere.',
    },
    {
      id: '3',
      title: 'Janmashtami Celebration',
      date: 'August 19, 2023',
      time: '7:00 PM - 12:00 AM',
      description: 'Celebrate the birth of Lord Krishna with prayers, bhajans, and midnight aarti.',
      image: '/images/events/janmashtami.jpg',
      category: 'festival',
      location: 'Main Temple Hall',
      organizer: 'Temple Management',
      fullDescription: 'Janmashtami celebrates the birth of Lord Krishna, the eighth avatar of Lord Vishnu. According to Hindu scriptures, Lord Krishna was born at midnight, and our celebration follows this tradition with a special midnight aarti.\n\nThe evening begins with devotional singing (bhajans) dedicated to Lord Krishna, followed by recitations from the Bhagavad Gita and stories from Krishna\'s life. Children will perform traditional dances depicting scenes from Krishna\'s childhood.\n\nAt midnight, we will conduct a special aarti to mark the birth moment, followed by the distribution of prasad. The temple will be elaborately decorated for this occasion, with a special cradle for baby Krishna.',
    },
    {
      id: '4',
      title: 'Yoga & Meditation Workshop',
      date: 'July 15, 2023',
      time: '9:00 AM - 11:00 AM',
      description: 'Learn yoga and meditation techniques from experienced practitioners.',
      image: '/images/events/yoga.jpg',
      category: 'workshop',
      location: 'Temple Community Hall',
      organizer: 'Temple Wellness Committee',
      fullDescription: 'This workshop offers a comprehensive introduction to yoga and meditation practices rooted in Hindu spiritual traditions. Participants will learn techniques that promote physical health, mental clarity, and spiritual growth.\n\nThe session will begin with gentle yoga asanas suitable for all levels, followed by pranayama (breathing exercises) and guided meditation. Our experienced instructors will provide individual attention and modifications as needed.\n\nParticipants should wear comfortable clothing and bring their own yoga mat if possible (we have a limited number of mats available). This workshop is open to all ages and experience levels.',
    },
    {
      id: '5',
      title: 'Monthly Satsang',
      date: 'First Saturday of every month',
      time: '5:00 PM - 7:00 PM',
      description: 'Monthly spiritual discourse followed by Q&A session with our head priest.',
      image: '/images/events/satsang.jpg',
      category: 'regular',
      location: 'Temple Prayer Hall',
      organizer: 'Temple Education Committee',
      fullDescription: 'Our monthly satsang is a gathering for spiritual discourse and community connection. Each session focuses on a specific theme or teaching from Hindu scriptures, presented by our head priest or visiting spiritual leaders.\n\nThe format includes a 45-minute discourse followed by a Q&A session where attendees can seek clarification or deeper insights. These sessions are designed to make ancient wisdom accessible and applicable to modern life.\n\nAfter the formal program, there is time for community interaction over light refreshments. This is a wonderful opportunity to deepen your spiritual understanding and connect with fellow devotees.',
    },
    {
      id: '6',
      title: 'Navratri Garba Night',
      date: 'October 15-23, 2023',
      time: '7:00 PM - 11:00 PM',
      description: 'Nine nights of traditional Garba and Dandiya dancing to celebrate Navratri.',
      image: '/images/events/navratri.jpg',
      category: 'festival',
      location: 'Temple Grounds',
      organizer: 'Temple Cultural Committee',
      fullDescription: 'Navratri is a nine-night festival celebrating the divine feminine energy, or Shakti. Each night at our temple is dedicated to one of the nine forms of Goddess Durga.\n\nThe celebration features traditional Garba and Dandiya Raas, folk dances from Gujarat that are performed in circles around a ceremonial lamp or image of the Goddess. Live musicians will provide authentic music for the dances.\n\nParticipants are encouraged to wear traditional attire - colorful chaniya choli for women and kurta pajama for men. The event is open to all ages and skill levels, with basic dance instruction provided for beginners.',
    },
  ];

  const event = allEvents.find((e) => e.id === slug);
  
  if (!event) {
    return null;
  }

  // Get related events (same category, excluding current event)
  const relatedEvents = allEvents
    .filter((e) => e.category === event.category && e.id !== event.id)
    .slice(0, 3);

  return { event, relatedEvents };
}

export default async function EventDetail({ params }: { params: { slug: string } }) {
  const data = await getEvent(params.slug);
  
  if (!data || !data.event) {
    notFound();
  }
  
  const { event, relatedEvents } = data;

  return (
    <>
      <Navbar />
      
      {/* Event Header */}
      <div className="h-[400px] w-full bg-primary-dark flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
          <div className="flex items-center text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{event.date} • {event.time}</span>
          </div>
        </div>
      </div>
      
      {/* Event Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{event.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-medium capitalize">{event.category}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500">Organizer</p>
                    <p className="font-medium">{event.organizer}</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-2xl font-semibold mb-4">About This Event</h2>
                <div className="prose max-w-none text-gray-700">
                  {event.fullDescription.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Registration/RSVP Button */}
            <div className="text-center mb-12">
              <button className="bg-primary text-on-primary px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary-dark transition">
                Register for This Event
              </button>
            </div>
            
            {/* Related Events */}
            {relatedEvents.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">Related Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedEvents.map((relEvent) => (
                    <div key={relEvent.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                      {relEvent.image && (
                        <div className="h-40 w-full bg-primary-light flex items-center justify-center">
                          <span className="text-primary font-medium">Event Image</span>
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2">{relEvent.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{relEvent.date} • {relEvent.time}</p>
                        <Link href={`/events/${relEvent.id}`} className="text-primary hover:underline text-sm font-medium">
                          View Details →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}