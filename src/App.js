import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";

import Table from "react-bootstrap/Table";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Table striped>
          <thead>
            <tr>
              <th className="w-25">#</th>
              <th className="w-25">First Name</th>
              <th className="w-25">Last Name</th>
              <th className="w-25">Age</th>
            </tr>
          </thead>
        </Table>
      </Container>
      <Section />
      <Footer />
    </div>
  );
}

export default App;
