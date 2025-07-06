// app/api/connect/route.ts
import { NextResponse } from 'next/server';
import Airtable from 'airtable';

// Initialize Airtable Base
// IMPORTANT: These environment variables are accessed securely on the server-side.
// They are NOT exposed to the client (browser).
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID as string
);

// Define the name of your table in Airtable
const TABLE_NAME = 'Connect Form Submissions'; // Make sure this matches your Airtable table name

// Handle POST requests for form submissions
export async function POST(request: Request) {
  try {
    // Parse the request body to get form data
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, Email, and Message are required.' },
        { status: 400 }
      );
    }

    // Create a new record in your Airtable table
    await base(TABLE_NAME).create([
      {
        fields: {
          Name: name,
          Email: email,
          Message: message,
        },
      },
    ]);

    // Send a success response
    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting form to Airtable:', error);
    // Send an error response
    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}