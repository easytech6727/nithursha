import { NextRequest, NextResponse } from 'next/server';

// In-memory storage (replace with database in production)
let wishes: Array<{
  id: string;
  name: string;
  message: string;
  timestamp: string;
}> = [];

export async function GET() {
  return NextResponse.json({ wishes: wishes.slice(0, 50) });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, message } = body;

    if (!name || !message) {
      return NextResponse.json(
        { error: 'Name and message are required' },
        { status: 400 }
      );
    }

    // Validate input
    if (name.length > 50 || message.length > 500) {
      return NextResponse.json(
        { error: 'Input too long' },
        { status: 400 }
      );
    }

    // Create new wish
    const wish = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    wishes.unshift(wish);

    // Keep only last 100 wishes
    if (wishes.length > 100) {
      wishes = wishes.slice(0, 100);
    }

    return NextResponse.json({ wish, success: true });
  } catch (error) {
    console.error('Error processing wish:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
