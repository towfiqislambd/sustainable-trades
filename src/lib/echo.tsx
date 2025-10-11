import Echo from "laravel-echo";
import Pusher from "pusher-js";

if (typeof window !== "undefined") {
  (window as any).Pusher = Pusher;
}

const authToken =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

const echo =
  typeof window !== "undefined"
    ? new Echo({
        broadcaster: "pusher",
        key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
        cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER!,
        forceTLS: true,
        authEndpoint: `${process.env.NEXT_PUBLIC_SITE_URL}/api/broadcasting/auth`,
        auth: {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        },
        enabledTransports: ["ws", "wss"],
      })
    : null;

export default echo;
