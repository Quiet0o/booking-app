import { Button } from '@/components/ui/button';
import HostNavBar from '@/components/ui/navbars/HostNavBar';
import { Slider } from '@/components/ui/slider';
import { Plus, Minus, Search } from 'lucide-react';
export default async function Hosts() {
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

              <div className="bg-[#38ff84] rounded-2xl p-4 h-[600px] flex items-center justify-center relative">
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
          </div>
        </main>
      </div>
    </>
  );
}
