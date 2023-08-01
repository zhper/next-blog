import { NextResponse } from "next/server";

export async function POST(req) {
  const {email, name, message} = await req.json()
  if (
    !email ||
    !email.includes('@') ||
    !name ||
    name.trim() === '' ||
    !message ||
    message.trim() === ''
  ) {
    return NextResponse.json('Invalide input data', {status: 422})
  }
  const newMessage = {
    email,
    name,
    message
  }
  console.log(newMessage)
  return NextResponse.json({message: newMessage}, {status: 201},)
}