import { NextResponse } from 'next/server';

type DemoRequest = {
  name?: string;
  company?: string;
  title?: string;
  email?: string;
  industry?: string;
  demoType?: string;
  message?: string;
};

const REQUIRED_FIELDS: Array<keyof DemoRequest> = [
  'name',
  'company',
  'title',
  'email',
  'industry',
  'demoType',
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: DemoRequest;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: 'Invalid demo request payload.' },
      { status: 400 },
    );
  }

  const missingField = REQUIRED_FIELDS.find((field) => !payload[field]?.trim());
  if (missingField) {
    return NextResponse.json(
      { message: 'Please complete all required fields.' },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(payload.email || '')) {
    return NextResponse.json(
      { message: 'Please enter a valid email address.' },
      { status: 400 },
    );
  }

  const demoRequest = {
    name: payload.name?.trim(),
    company: payload.company?.trim(),
    title: payload.title?.trim(),
    email: payload.email?.trim(),
    industry: payload.industry?.trim(),
    demoType: payload.demoType?.trim(),
    message: payload.message?.trim() || '',
    submittedAt: new Date().toISOString(),
  };

  console.info('Demo request received', demoRequest);

  return NextResponse.json({
    ok: true,
    message: 'Demo request received.',
  });
}
