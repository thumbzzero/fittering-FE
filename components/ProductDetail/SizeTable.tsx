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
    <table>
      <thead>
        <tr>
          {sizeData.map((size, index) => {
            if (index === 0) {
              return size.map((info, index) => {
                if (info.data !== undefined) {
                  return (
                    <th key={index}>
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
              if (info.data !== undefined) {
                return (
                  <td key={index}>
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
