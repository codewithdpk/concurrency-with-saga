import React from "react";
import { useSelector } from "react-redux";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Icon,
  Table,
} from "semantic-ui-react";

const BreedTable = () => {

  // @ts-ignore
  const breeds = useSelector((state) => state.breeds);

  return (
    <Table celled striped>
      <TableHeader>
        <TableRow>
          <TableHeaderCell colSpan="3">Breeds</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {Object.keys(breeds.data).map((key) => {
          return (
            <TableRow key={key}>
              <TableCell collapsing>
                <Icon name="folder" /> {key}
              </TableCell>
              <TableCell> - </TableCell>
              <TableCell collapsing textAlign="right">
                10 hours ago
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default BreedTable;
