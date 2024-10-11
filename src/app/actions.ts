"use server";

import { headers } from "next/headers";

const rateLimitMap = new Map();

function IP() {
  const FALLBACK_IP_ADDRESS = "0.0.0.0";
  const forwardedFor = headers().get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
  }

  return headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
}

export async function rateLimitMiddleware() {
  const ip = IP();
  const limit = 100; // Updated limit to 100 requests
  const windowMs = 12 * 60 * 60 * 1000; // Updated time window to 12 hours (in milliseconds)

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, {
      count: 0,
      lastReset: Date.now(),
    });
  }

  const ipData = rateLimitMap.get(ip);

  // Reset the count if the time window has passed
  if (Date.now() - ipData.lastReset > windowMs) {
    ipData.count = 0;
    ipData.lastReset = Date.now();
  }

  // Check if the limit is exceeded
  if (ipData.count >= limit) {
    return 429; // Too Many Requests
  }

  ipData.count += 1;

  return 200; // OK
}
