'use client';

import { FILTER_ID } from '@/constants/filterId';

type Props = {
  setFilterId: React.Dispatch<React.SetStateAction<number>>;
};

export default function FilterIdDropdown({ setFilterId }: Props) {
  const handleFilterIdChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterId(Number(e.target.value));
  };

  return (
    <select
      className="block mt-3 ml-auto text-sm border p-1 rounded"
      onChange={handleFilterIdChange}
    >
      {FILTER_ID.map((filter) => (
        <option key={filter.id} value={filter.id}>
          {filter.name}
        </option>
      ))}
    </select>
  );
}
