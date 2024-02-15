import { NextRequest, NextResponse } from 'next/server'


export default function middleware(request: NextRequest){
    return NextResponse.redirect(new URL('/dashboard/courses-and-questions', request.url))
}

export const config = {
    matcher: ['/login', '/dashboard']
}
