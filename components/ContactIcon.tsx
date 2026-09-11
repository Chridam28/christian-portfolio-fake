export type ContactChannel = 'whatsapp' | 'email' | 'instagram';

export function ContactIcon({ channel }: { channel: ContactChannel }) {
  if (channel === 'email') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 6.5h15v11h-15z" />
        <path d="m5 7 7 5.5L19 7" />
      </svg>
    );
  }

  if (channel === 'instagram') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
        <circle cx="12" cy="12" r="3.2" />
        <circle cx="17.1" cy="6.9" r=".8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5.5 5.75h13v9.5h-7.25L7 18.5v-3.25H5.5z" />
    </svg>
  );
}
