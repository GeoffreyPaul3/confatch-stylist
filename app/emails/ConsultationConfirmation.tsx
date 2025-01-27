import { Body, Container, Head, Heading, Html, Preview, Text } from "@react-email/components"
import type * as React from "react"

interface ConsultationConfirmationEmailProps {
  name: string
  date: string
  consultationType: string
  phone: string
  event: string
  message: string
}

const ConsultationConfirmationEmail: React.FC<ConsultationConfirmationEmailProps> = ({
  name,
  date,
  consultationType,
  phone,
  event,
  message,
}) => (
  <Html>
    <Head />
    <Preview>Your Confatch Styling Consultation is Confirmed</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Consultation Confirmation</Heading>

        <Text style={text}>Dear {name},</Text>

        <Text style={text}>
          Your consultation is confirmed for <strong>{date}</strong>. We look forward to meeting you for a{" "}
          <strong>{consultationType}</strong> session.
        </Text>

        <Text style={text}>
          <strong>Event Details:</strong> {event || "No specific event details provided."}
        </Text>

        {message && (
          <Text style={text}>
            <strong>Additional Information:</strong> {message}
          </Text>
        )}

        <Text style={text}>
          If you have any questions, please feel free to reach out at <strong>{phone || "our contact number"}</strong>.
        </Text>

        <Text style={footer}>Thank you for choosing Confatch Styling! We look forward to your session.</Text>
      </Container>
    </Body>
  </Html>
)

export default ConsultationConfirmationEmail

// Styles
const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
}

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  padding: "17px 0 0",
  margin: "0",
}

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "16px 0",
}

const footer = {
  color: "#666",
  fontSize: "14px",
  fontStyle: "italic",
  marginTop: "24px",
}

