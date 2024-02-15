
import { getToken } from "next-auth/jwt";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { TypeUser } from "@/app/api/auth/[...nextauth]";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname }: { pathname: string } = request.nextUrl;
  const token = await getToken({ req: request });
  const user: TypeUser | null = token?.user as TypeUser;


  const Redirect = () => {
    if (user.role == "Admin") {
      return NextResponse.redirect(new URL("/admin/Dashboard", request.url));
    } else if (user.role == "Teacher") {
      return NextResponse.redirect(new URL("/teacher/Dashboard", request.url));
    } else if (user.role == "Student") {
      return NextResponse.redirect(new URL("/student/Dashboard", request.url));
    } else {
      return NextResponse.redirect(
        new URL(
          "/login?error=Please login first to access this route",
          request.url
        )
      );
    }
  };
  const authRoutes = ["/login", "/register", "/forgot-password"];

  if (!!token && authRoutes.includes(pathname)) {
    return Redirect();
  }
  if (
    (!!token &&      pathname.startsWith("/admin") &&      user.role !== "Admin") ||
    (!!token &&
      pathname.startsWith("/teacher") &&
      user.role !== "Teacher") ||
    (!!token &&
      pathname.startsWith("/student") &&
      user.role !== "Student")
  ) {
    return Redirect();
  }

  if (!token) {
    if (
      pathname.includes("/api/admin") ||
      pathname.includes("/api/student") ||
      pathname.includes("/api/teacher")
    ) {
      return Response.json(
        { success: false, message: "authentication failed" },
        { status: 401 }
      );
    }
  } else {
    if (
      (pathname.startsWith("/api/admin") && user.role !== "Admin") ||
      (pathname.startsWith("/api/teacher") &&
        user.role !== "Teacher") ||
      (pathname.startsWith("/api/student") && user.role !== "Student")
    ) {
      console.log(pathname, user.role);
      return Response.json(
        { success: false, message: "authentication failed" },
        { status: 401 }
      );
    }
  }
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/forgot-password",
    "/admin/:path*",
    "/teacher/:path*",
    "/student/:path*",
    "/api/admin/:function*",
    "/api/teacher/:function*",
    "/api/student/:function*",
  ],
};