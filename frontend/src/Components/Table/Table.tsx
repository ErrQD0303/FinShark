type Props = {
  configs: any;
  data: any;
};

const Table = ({ configs, data }: Props) => {
  const renderedRows = data.map((company: any) => {
    return (
      <tr key={company.cik}>
        {configs.map((val: any) => {
          return (
            <td className="p-3" key={val.label}>
              {val.render(company)}
            </td>
          );
        })}
      </tr>
    );
  });
  const renderedHeaders = configs.map((config: any) => {
    return (
      <th
        className="p-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
        key={config.label}
      >
        {config.label}
      </th>
    );
  });

  return (
    <div className="overflow-x-scroll rounded-lg bg-white p-4 shadow sm:p-6 xl:p-8">
      <table>
        <thead className="m-5 min-w-full divide-y divide-gray-200">
          {renderedHeaders}
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </div>
  );
};

export default Table;
