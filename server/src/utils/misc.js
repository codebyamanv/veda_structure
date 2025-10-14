export const cookieOptions = {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    path: '/',
    // domain: '.vedastructure.com',
    maxAge: 7 * 24 * 60 * 60 * 1000,
}
