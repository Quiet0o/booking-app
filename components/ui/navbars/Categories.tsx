'use client';

import { Backpack, Globe, Mountain, Pin, Plane, Tent } from 'lucide-react';
import CategoryBoxWithSuspense from './CategoryBox';
import { useSearchParams, usePathname } from 'next/navigation';
import { Suspense } from 'react';

export const categories = [
  {
    label: 'Camping',
    icon: <Tent />,
    description: 'Discover amazing campgrounds',
  },
  {
    label: 'Climbing',
    icon: <Mountain />,
    description: 'Discover amazing climbing routes',
  },
  {
    label: 'Hiking',
    icon: <Backpack />,
    description: 'Discover amazing hiking trails',
  },
  {
    label: 'Skiing',
    icon: <Pin />,
    description: 'Discover amazing skiing routes',
  },
  {
    label: 'Sea kayaking',
    icon: <Pin />,
    description: 'Discover amazing kayaking routes',
  },
  {
    label: 'Sun bathing',
    icon: <Pin />,
    description: 'Discover amazing sun bathing routes',
  },
  {
    label: 'Plane',
    icon: <Plane />,
    description: 'Discover amazing planes',
  },
  {
    label: 'World trip',
    icon: <Globe />,
    description: 'Discover amazing world trips',
  },
  {
    label: 'Amazing',
    icon: <Globe />,
    description: 'Discover amazing world trips',
  },
  {
    label: 'Super',
    icon: <Globe />,
    description: 'Discover amazing world trips',
  },
  {
    label: 'Wonderful',
    icon: <Globe />,
    description: 'Discover amazing world trips',
  },
  {
    label: 'Passionate',
    icon: <Globe />,
    description: 'Discover amazing world trips',
  },
];

const Categories = () => {
  const params = useSearchParams();
  const pathname = usePathname();
  const category = params?.get('category');
  const isHomePage = pathname === '/';

  if (!isHomePage) {
    return null;
  }

  return (
    <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
      {categories.map((item, index) => (
        <CategoryBoxWithSuspense
          key={index}
          label={item.label}
          icon={item.icon}
          selected={category === item.label}
        />
      ))}
    </div>
  );
};

const CategoriesWithSuspense = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Categories />
  </Suspense>
);

export default CategoriesWithSuspense;
