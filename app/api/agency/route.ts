// app/api/agency/route.ts
import { NextResponse } from 'next/server';
import Airtable from 'airtable';

// Initialize Airtable Base
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID as string
);

// Define the name of your table in Airtable
// IMPORTANT: Make sure this matches the table name you created for agency subscribers
const TABLE_NAME = 'Agency Requests'; 

// Handle POST requests for agency signups
export async function POST(request: Request) {
  try {
    // Parse the request body to get the email
    const body = await request.json();
    const { email } = body;

    // Basic validation
    if (!email) {
      return NextResponse.json(
        { message: 'Email is required.' },
        { status: 400 }
      );
    }

    // You can add 'Name' and 'Source' fields if you collect them.
    // For now, we'll just send Email and default Status.
    await base(TABLE_NAME).create([
      {
        fields: {
          Email: email,
          'Subscription Status': 'Subscribed', // Set default status
          // 'Source': 'Website Newsletter Page', // Uncomment and set if you add a source field
        },
      },
    ]);

    // Send a success response
    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting agency signup to Airtable:', error);
    // Send an error response
    return NextResponse.json(
      { message: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}