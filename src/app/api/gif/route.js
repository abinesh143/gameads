import { NextResponse } from "next/server";
import games from "../../../games.json";
import { rateLimitMiddleware } from "../actions";

export async function GET(request) {
  const checkStatus = await rateLimitMiddleware(request);
  if (checkStatus === 429) {
    return NextResponse.json({message : 'Too Many Requests'}, { status: 429 });
  }
  return NextResponse.json({games: games.games, message: 'success'}, { status: 200 });
}
