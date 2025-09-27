import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    status: 'ok', 
    message: 'DCPH Digital API is working',
    timestamp: new Date().toISOString()
  });
}
