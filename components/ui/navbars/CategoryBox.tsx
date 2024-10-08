'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useCallback, Suspense } from 'react';
import qs from 'query-string';

interface CategoryBoxProps {
  label: string;
  icon: React.ReactElement;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ label, icon, selected }) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get('category') === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: '/',
        query: updatedQuery,
      },
      { skipNull: true },
    );

    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`
        flex
        flex-col
        items-center
        justify-center
        gap-2
        p-3
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${selected ? 'border-b-neutral-800' : 'border-transparent'}
        ${selected ? 'text-neutral-800' : 'text-neutral-500'}
      `}
    >
      <div className="flex items-center justify-center w-6 h-6">{icon}</div>
      <div className="font-medium text-sm text-center">{label}</div>
    </div>
  );
};

const CategoryBoxWithSuspense = (props: CategoryBoxProps) => (
  <Suspense fallback={<div>Loading...</div>}>
    <CategoryBox {...props} />
  </Suspense>
);

export default CategoryBoxWithSuspense;
