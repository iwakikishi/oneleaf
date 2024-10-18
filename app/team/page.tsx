import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Kazuyo',
    role: 'Owner & Lead Stylist',
    image: '/images/kazuyo_shichiri.jpg',
    description:
      "Kazuyo has been a Master Hairstylist in Japan with more than 20 years of experience working in Tokyo's leading hair salons. She bases each style on drawing out a person's inner beauty, creating balance with their structural features, and listening to the customers' vision on who they want to become as their best selves. The experience will be relaxed and fun as we work together to find the beautiful energy you want to project into the world.",
    specialties: ['Color Specialist', 'Precision Cutting', 'Japanese Hair Straightening'],
  },
  {
    name: 'Daisy',
    role: 'Senior Stylist',
    image: '/images/daisy.webp',
    description:
      'Meet Daisy, our emerging artist who strives to bring her client’s vision to life. Whether it’s a balayage, highlights, vivid color, or haircut, she will undoubtedly work her magic behind the chair!',
    specialties: ['Balayage', 'Updos', "Men's Grooming"],
  },
];

export default function TeamPage() {
  return (
    <main className='min-h-screen bg-gradient-to-b from-[#fffaeb] to-white py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-4xl font-bold text-center text-green-900 mb-12 font-montserrat'>Meet Our Team</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {teamMembers.map((member) => (
            <Card key={member.name} className='overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <CardContent className='p-0'>
                <div className='relative h-80'>
                  <Image src={member.image} alt={member.name} fill className='object-cover' />
                </div>
                <div className='p-6'>
                  <h2 className='text-2xl font-semibold text-green-800 mb-2 font-poppins'>{member.name}</h2>
                  <p className='text-sm text-gray-600 mb-4 font-poppins'>{member.role}</p>
                  <p className='text-gray-700 mb-4 font-poppins'>{member.description}</p>
                  <div>
                    <h3 className='text-lg font-semibold text-green-700 mb-2 font-poppins'>Specialties:</h3>
                    <ul className='list-disc list-inside text-gray-700 font-poppins'>
                      {member.specialties.map((specialty) => (
                        <li key={specialty}>{specialty}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}