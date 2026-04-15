// services/bookingService.ts
export async function bookCourt(payload: {
  venueId: number;
  courtId: number;
  userId: number;
  timeSlot: string;
  date: string;
}) {
  return fetch("/api/book", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
