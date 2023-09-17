type Props = {
  sizeData: (
    | {
        label: string;
        data: string | undefined;
      }
    | {
        label: string;
        data: number | undefined;
      }
  )[][];
};

export default function SizeTable({ sizeData }: Props) {
  return (
    <table className="mx-auto border mt-6 border-border-gray text-center text-xs xs:text-sm overflow-auto">
      <thead>
        <tr>
          {sizeData.map((size, index) => {
            if (index === 0) {
              return size.map((info, index) => {
                if (info.data !== null && info.data !== undefined) {
                  return (
                    <th
                      key={index}
                      className="py-2 bg-gray-100 border border-border-gray font-semibold"
                    >
                      {info.label}
                    </th>
                  );
                }
              });
            }
          })}
        </tr>
      </thead>
      <tbody>
        {sizeData?.map((size, index) => (
          <tr key={index}>
            {size.map((info, index) => {
              if (info.data !== null && info.data !== undefined) {
                return (
                  <td
                    key={index}
                    className={
                      (index === 0 ? 'bg-gray-100 w-[4rem] font-semibold' : 'w-[10rem]') +
                      ' py-2 border border-border-gray'
                    }
                  >
                    {info.data}
                  </td>
                );
              }
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
