import { Body, Container, Head, Heading, Html, Preview, Text } from "@react-email/components";
import type * as React from "react";

interface ConsultationConfirmationEmailProps {
  name: string;
  date: string;
  consultationType: string;
}

const ConsultationConfirmationEmail: React.FC<ConsultationConfirmationEmailProps> = ({
  name,
  date,
  consultationType,
}) => (
  <Html>
    <Head />
    <Preview>Your Confatch Styling Consultation is Confirmed</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Consultation Confirmation</Heading>
        <Text style={text}>Dear {name},</Text>
        <Text style={text}>
          Your consultation is confirmed for {date}. We look forward to meeting you for a {consultationType} session.
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily: "Arial, sans-serif",
};

const container = {
  padding: "20px",
};

const h1 = {
  color: "#333333",
  fontSize: "24px",
};

const text = {
  color: "#555555",
  fontSize: "16px",
};

export default ConsultationConfirmationEmail;
