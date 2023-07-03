import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

const SectionItem = ({ user }) => {
  return (
    <Container>
      <Table striped>
        <tbody>
          <tr>
            <td className="w-25">{user.id}</td>
            <td className="w-25">{user.name}</td>
            <td className="w-25">{user.lastName}</td>
            <td className="w-25">{user.age}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default SectionItem;
