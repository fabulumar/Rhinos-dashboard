import React from "react";
import {
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

import Layout from "../../Layout";
import {
  CardHeader,
  HeaderBadge,
  HeaderButton,
  CardBody,
  InfoTextWrapper,
  HighlightedText,
  TopTextWrapper,
  Card,
  StyledTable,
  Divider,
  FormWrapper,
  StyledColWrapper,
  LabelWrapper,
} from "./styles";

const tableData = {
  tableHeadings: ["#", "Produits", "Qté", "€ PU HT", "% TVA", "€ TVA", "€ TTC"],
  tableData: [
    {
      Produits: "Produit 1",
      Qté: 1,
      PU_HT: 140,
      TVA: 10,
      TVA_2: 14,
      TTC: 154,
    },
    {
      Produits: "Produit 2",
      Qté: 1,
      PU_HT: 20,
      TVA: 10,
      TVA_2: 2,
      TTC: 22,
    },
  ],
};

const Home = () => {
  return (
    <Layout>
      <Card>
        <CardHeader>
          Commande n°12345
          <HeaderBadge>En cours</HeaderBadge>
          <HeaderButton>Annuler la commande</HeaderButton>
        </CardHeader>
        <CardBody>
          <TopTextWrapper>
            <Col md={7}>
              <InfoTextWrapper>
                InfoTextWrapper:<br></br>
                <br></br>
                <HighlightedText>Jordane Parisi</HighlightedText>
                jordane.parisi@gmail.com<br></br>
                50 avenue de Rompsay 17000 LaRochelle
              </InfoTextWrapper>
            </Col>
            <Col>
              <InfoTextWrapper>
                Détails de la commande:<br></br>
                <br></br> Commande n°12345<br></br>
                12 / 10 / 2020<br></br>
                <HighlightedText>Facture n°12345</HighlightedText>
              </InfoTextWrapper>
            </Col>
          </TopTextWrapper>
          <Divider></Divider>
          <Container>
            <Row>
              <Col>
                <StyledTable bordered size="sm" responsive>
                  <thead>
                    <tr>
                      {tableData.tableHeadings.map((heading) => (
                        <th>{heading}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.tableData.map((cell, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>
                          <HeaderBadge>{cell.Produits}</HeaderBadge>
                        </td>
                        <td>{cell.Qté}</td>
                        <td>{cell.PU_HT}</td>
                        <td>{cell.TVA}%</td>
                        <td>{cell.TVA_2}</td>
                        <td>{cell.TTC}</td>
                      </tr>
                    ))}
                  </tbody>
                </StyledTable>
              </Col>
            </Row>
          </Container>
          <Divider></Divider>
          <Row>
            <StyledColWrapper md={{ span: 4, offset: 8 }}>
              <FormWrapper>
                <LabelWrapper>TOTAL HT</LabelWrapper>
                <InputGroup>
                  <InputGroup.Text>€</InputGroup.Text>
                  <FormControl
                    id="inlineFormInputGroup"
                    size="sm"
                    value="160,00"
                  />
                </InputGroup>
              </FormWrapper>
              <FormWrapper>
                <LabelWrapper>TOTAL TVA</LabelWrapper>
                <InputGroup>
                  <InputGroup.Text>€</InputGroup.Text>
                  <FormControl
                    id="inlineFormInputGroup"
                    size="sm"
                    value="16,00"
                  />
                </InputGroup>
              </FormWrapper>
              <FormWrapper>
                <LabelWrapper> TOTAL TTC</LabelWrapper>
                <InputGroup>
                  <InputGroup.Text>€</InputGroup.Text>
                  <FormControl
                    id="inlineFormInputGroup"
                    size="sm"
                    value="176,00"
                  />
                </InputGroup>
              </FormWrapper>
            </StyledColWrapper>
          </Row>
        </CardBody>
      </Card>
    </Layout>
  );
};

export default Home;
