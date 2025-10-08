type serverProps = {
  endpoint: string;
  revalidate?: number;
  ssr?: boolean;
};

export async function useServerApi({
  endpoint,
  revalidate,
  ssr = false,
}: serverProps) {
  const baseURL = `${process.env.NEXT_PUBLIC_SITE_URL}${endpoint}`;

  const res = await fetch(baseURL, {
    cache: ssr ? "no-store" : "force-cache",
    ...(ssr ? {} : { next: { revalidate: revalidate ?? 3600 } }),
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint} — ${res.status}`);
  }

  return res.json();
}
