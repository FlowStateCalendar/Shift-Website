import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // Get the pathname from the request URL
    const pathname = request.nextUrl.pathname;
    
    // Clone the request headers and add the pathname
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-pathname", pathname);
    
    // Return the response with the modified headers
    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}

// Configure which routes the middleware should run on
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};

