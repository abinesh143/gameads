import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.formData();
  const photo = formData.get("photo");

  // const headersList = await headers()
  // const origin = headersList.get('origin')

  // if (origin !== 'http://localhost:3000' || origin !== 'https://freeappmaker.pro') {
  //   return NextResponse.json({ message : 'UnAuthorised'}, { status: 401});
  // }

  const headers = {
    "Access-Control-Allow-Origin": "*", // Replace with your client's URL
  };

  const data = new FormData();
  data.append("photo", photo);
  data.append("createIcon", true);

  const requestHeaders = {
    "x-rapidapi-key": "480a2b1bb5msh7ac270285e27d68p1b2610jsnadb2b3996063",
    "Content-Type": "multipart/form-data",
  };

  const response = await axios.post(
    "https://mojipop.p.rapidapi.com/api/FaceDetection/CreateAvatar",
    data,
    { headers: { ...requestHeaders } }
  );


  return NextResponse.json(response.data, { status: response.status, headers });
}
