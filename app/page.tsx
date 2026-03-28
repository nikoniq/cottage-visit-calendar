import CottageVisitCalendarClient from '@/components/CottageVisitCalendarClient';
import { createServerSupabase } from '@/lib/supabase-server';
import { Booking } from '@/lib/types';

export const dynamic = 'force-dynamic';

export default async function Page() {
  let initialBookings: Booking[] = [];

  try {
    const supabase = createServerSupabase();
    const { data } = await supabase
      .from('bookings')
      .select('*')
      .order('arrival', { ascending: true });

    initialBookings = (data ?? []) as Booking[];
  } catch {
    initialBookings = [];
  }

  return (
    <CottageVisitCalendarClient
      initialBookings={initialBookings}
      sharedPassword={process.env.NEXT_PUBLIC_SHARED_PASSWORD ?? 'cottage2026'}
      adminPassword={process.env.ADMIN_PASSWORD ?? 'admin2026'}
    />
  );
}
