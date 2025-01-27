import { Body, Container, Head, Heading, Html, Preview, Text } from "@react-email/components";
import type * as React from "react";

interface ConsultationConfirmationEmailProps {
  name: string;
  date: string;
  consultationType: string;
  phone: string;
  event: string;
  message: string;
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
    <Body className="bg-white font-sans">
      <Container className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <Heading className="text-3xl font-bold text-gray-800 mb-4">Consultation Confirmation</Heading>
        
        <Text className="text-lg text-gray-700 mb-2">Dear {name},</Text>
        
        <Text className="text-lg text-gray-700 mb-4">
          Your consultation is confirmed for <strong>{date}</strong>. We look forward to meeting you for a{" "}
          <strong>{consultationType}</strong> session.
        </Text>
        
        {/* Event Details */}
        <Text className="text-lg text-gray-700 mb-2">
          <strong>Event Details:</strong>
        </Text>
        <Text className="text-lg text-gray-700 mb-4">{event}</Text>
        
        {/* Optional message from customer */}
        {message && (
          <Text className="text-lg text-gray-700 mb-4">
            <strong>Message from you:</strong> {message}
          </Text>
        )}
        
        <Text className="text-lg text-gray-700 mb-4">
          If you have any questions, please feel free to reach out at <strong>{phone}</strong>.
        </Text>
        
        <Text className="text-sm text-gray-500 mt-6">
          Thank you for choosing Confatch Styling! We look forward to your session.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ConsultationConfirmationEmail;
