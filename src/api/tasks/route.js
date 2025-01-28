import { NextResponse } from "next/server";

// Replace with your Todoist API key
const TODOIST_API_KEY = process.env.TODOIST_API_KEY;

export async function GET() {
  try {
    // Define the Todoist API endpoint for retrieving tasks
    const url = "https://api.todoist.com/rest/v2/tasks";

    // Fetch tasks from the Todoist API
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TODOIST_API_KEY}`, // Add your API key here
        "Content-Type": "application/json",
      },
    });

    // Check if the response is OK (status 200)
    if (!response.ok) {
      throw new Error(`Failed to fetch tasks: ${response.statusText}`);
    }

    // Parse the JSON response
    const tasks = await response.json();

    // Return the tasks as JSON
    return NextResponse.json(tasks);
  } catch (error) {
    // Handle errors and return a proper error response
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
