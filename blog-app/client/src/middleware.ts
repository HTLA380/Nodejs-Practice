import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (
    (req.nextUrl.pathname.startsWith("/login") && !token) ||
    (req.nextUrl.pathname.startsWith("/register") && !token)
  ) {
    return;
  }

  if (
    (req.url.includes("/login") && token) ||
    (req.url.includes("/register") && token)
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!token) {
    return NextResponse.redirect(new URL("/register", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/blogs/:path*", "/login", "/register"],
};
