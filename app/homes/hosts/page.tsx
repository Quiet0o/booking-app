import { Button } from '@/components/ui/button';
import HostNavBar from '@/components/ui/navbars/HostNavBar';
import { Slider } from '@/components/ui/slider';
import { Plus, Minus, Search } from 'lucide-react';
import Image from 'next/image';

interface HostProps {
  name: string;
  location: string;
  imageUrl: string;
}

const Host: React.FC<HostProps> = ({ name, location, imageUrl }) => (
  <div className="flex flex-col items-center">
    <Image
      src={imageUrl}
      alt={`${name} from ${location}`}
      width={300}
      height={200}
      className="rounded-lg object-cover w-full h-48 mb-2"
    />
    <p className="text-sm font-semibold">{name}</p>
    <p className="text-xs text-gray-600">{location}</p>
  </div>
);

const HostList = [
  {
    name: 'Nani',
    location: 'Resident & Host Dallas, TX',
    imageUrl: 'https://placehold.co/200x300',
  },
  {
    name: 'Jeff and Amador',
    location: 'Residents & Hosts San Diego, CA',
    imageUrl: 'https://placehold.co/200x300',
  },
  {
    name: 'Buddy',
    location: 'Resident & Host Denver, CO',
    imageUrl: 'https://placehold.co/200x300',
  },
];

export default function Hosts() {
  return (
    <>
      <HostNavBar />
      <div className="pb-20 pt-20">
        <main className="flex-grow py-8">
          <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-12">
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl font-bold text-center">
                  <span className="text-[#FF385C]">Airbnb it.</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-semibold text-center">
                  You could earn
                </h2>
                <p className="text-5xl sm:text-6xl font-bold text-center">
                  11,920 zł
                </p>
                <p className="text-xl text-center">
                  7 nights at an estimated 1,703 zł a night
                </p>

                <Slider
                  defaultValue={[50]}
                  max={100}
                  step={1}
                  className="w-3/4 mx-auto cursor-pointer"
                />

                <p className=" text-gray-500 underline cursor-pointer text-center">
                  Learn how we estimate your earnings
                </p>

                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-96 h-16 mx-auto pl-4 rounded-full border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out"
                  >
                    <div className="flex items-center w-full">
                      <Search className="h-5 w-5 text-red-600 mr-2" />
                      <div className="text-left">
                        <div className="font-medium text-sm">Map area</div>
                        <div className="text-xs text-gray-500">
                          Entire place • 4 bedrooms
                        </div>
                      </div>
                    </div>
                  </Button>
                </div>
              </div>

              <div className="bg-[#38ff84] rounded-2xl h-[610px] w-18 flex items-center justify-center relative">
                <p className="text-lg text-gray-600">Map placeholder</p>
                <div className="absolute bottom-6 right-6 flex flex-col gap-2">
                  <button className="bg-white p-2 rounded-full shadow-md">
                    <Plus className="h-6 w-6" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-md">
                    <Minus className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>

            <section className="mt-28">
              <h1 className="text-5xl font-bold text-center mb-12">
                Airbnb it easily with Airbnb Setup
              </h1>
              <div className="relative">
                <Image
                  src="https://placehold.co/1280x490"
                  alt="Airbnb Setup"
                  width={1280}
                  height={490}
                  className="mx-auto"
                />
                {/* You would replace the placeholder with the actual image */}
              </div>
              <div className="grid w-[1280px] mx-auto grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    One-to-one guidance from a Superhost
                  </h3>
                  <p className="text-gray-600">
                    We'll match you with a Superhost in your area, who'll guide
                    you from your first question to your first guest—by phone,
                    video call, or chat.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    An experienced guest for your first booking
                  </h3>
                  <p className="text-gray-600">
                    For your first booking, you can choose to welcome an
                    experienced guest who has at least three stays and a good
                    track record on Airbnb.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Specialized support from Airbnb
                  </h3>
                  <p className="text-gray-600">
                    New Hosts get one-tap access to specially trained Community
                    Support agents who can help with everything from account
                    issues to billing support.
                  </p>
                </div>
              </div>
              <div className="max-w-4xl mt-28 mx-auto p-6 space-y-6">
                <h1 className="text-5xl font-bold text-center">
                  Need a place where you can host?
                </h1>
                <h2 className="text-5xl font-semibold text-center">
                  Try Airbnb-friendly apartments
                </h2>

                <div className="grid mt-10 grid-cols-1 md:grid-cols-3 gap-6">
                  {HostList.map((host) => (
                    <Host key={host.name} {...host} />
                  ))}
                </div>

                <p className="text-center text-lg">
                  We've partnered with apartment buildings across the US so you
                  can rent a place to live and host on Airbnb part-time. The
                  typical host earned{' '}
                  <span className="font-bold">$3650/year</span> and hosted 28
                  nights. *
                </p>

                <p className="text-xs text-gray-600 text-center">
                  *The typical Host earnings amount represents the median amount
                  of earnings for Hosts in US Airbnb-friendly apartment
                  buildings between Jan1 - Dec 31, 2023, according to internal
                  Airbnb data for revenue earned by Hosts.
                </p>

                <div className="flex justify-center">
                  <Button variant="outline" size="lg">
                    Explore cities
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
