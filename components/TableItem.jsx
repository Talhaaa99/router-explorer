const TableItem = ({ item }) => {
  return (
    <tr>
      <td>
        {item.fromAddress}
        {item.toAddress}
      </td>
      <td></td>
      <td>{item?.srcSymbol}</td>
      <td>{item?.destSymbol}</td>
      <td>{item?.date}</td>
      <td>Completed</td>
    </tr>
  );
};
export default TableItem;
