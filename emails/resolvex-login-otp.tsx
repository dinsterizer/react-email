import { Body, Container, Head, Heading, Html, Img, Link, Preview, Text, Tailwind } from '@react-email/components';
import * as React from 'react';

export default ({ otp = '{{OTP}}', homeUrl = '{{HOME_URL}}' }: { otp: string; homeUrl: string }) => (
    <Html>
        <Head />
        <Preview>The OTP provided for your login request</Preview>
        <Tailwind>
            <Body
                className="bg-white"
                style={{
                    fontFamily:
                        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                }}
            >
                <Container>
                    <Heading className="text-2xl text-gray-700">Login</Heading>
                    <Text className="text-gray-700">Please copy and paste this OTP to login.</Text>
                    <code className="block rounded-md tracking-widest w-11/12 text-center font-mono text-lg py-4 bg-gray-100 text-gray-900">
                        {otp}
                    </code>
                    <Text>Safely ignore this email if you did not request a login.</Text>
                </Container>

                <Container className="mt-12">
                    <svg width="115" height="24" viewBox="0 0 115 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_7519_482)">
                            <mask
                                id="mask0_7519_482"
                                style={{
                                    maskType: 'alpha',
                                }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                            >
                                <path
                                    d="M22.8 0H1.2C0.537258 0 0 0.537258 0 1.2V22.8C0 23.4627 0.537258 24 1.2 24H22.8C23.4627 24 24 23.4627 24 22.8V1.2C24 0.537258 23.4627 0 22.8 0Z"
                                    fill="black"
                                />
                            </mask>
                            <g mask="url(#mask0_7519_482)">
                                <path d="M24 0H0V24H24V0Z" fill="#18181B" />
                                <path d="M12 6H6V12H12V6Z" fill="white" />
                                <path d="M6 12H0V18H6V12Z" fill="white" />
                                <path d="M24 18H18V24H24V18Z" fill="white" />
                                <path d="M18 0H12V6H18V0Z" fill="white" />
                                <path d="M24 0H18V6H24V0Z" fill="white" />
                                <path d="M18 12H12V18H18V12Z" fill="white" />
                            </g>
                        </g>
                        <path
                            d="M29.32 19V5H35.4C36.28 5 37.0467 5.15333 37.7 5.46C38.3533 5.76667 38.86 6.2 39.22 6.76C39.58 7.32 39.76 7.98 39.76 8.74V8.98C39.76 9.82 39.56 10.5 39.16 11.02C38.76 11.54 38.2667 11.92 37.68 12.16V12.52C38.2133 12.5467 38.6267 12.7333 38.92 13.08C39.2133 13.4133 39.36 13.86 39.36 14.42V19H36.72V14.8C36.72 14.48 36.6333 14.22 36.46 14.02C36.3 13.82 36.0267 13.72 35.64 13.72H31.96V19H29.32ZM31.96 11.32H35.12C35.7467 11.32 36.2333 11.1533 36.58 10.82C36.94 10.4733 37.12 10.02 37.12 9.46V9.26C37.12 8.7 36.9467 8.25333 36.6 7.92C36.2533 7.57333 35.76 7.4 35.12 7.4H31.96V11.32ZM46.5567 19.28C45.5701 19.28 44.6967 19.0733 43.9367 18.66C43.1901 18.2333 42.6034 17.64 42.1767 16.88C41.7634 16.1067 41.5567 15.2 41.5567 14.16V13.92C41.5567 12.88 41.7634 11.98 42.1767 11.22C42.5901 10.4467 43.1701 9.85333 43.9167 9.44C44.6634 9.01333 45.5301 8.8 46.5167 8.8C47.4901 8.8 48.3367 9.02 49.0567 9.46C49.7767 9.88667 50.3367 10.4867 50.7367 11.26C51.1367 12.02 51.3367 12.9067 51.3367 13.92V14.78H44.1167C44.1434 15.46 44.3967 16.0133 44.8767 16.44C45.3567 16.8667 45.9434 17.08 46.6367 17.08C47.3434 17.08 47.8634 16.9267 48.1967 16.62C48.5301 16.3133 48.7834 15.9733 48.9567 15.6L51.0167 16.68C50.8301 17.0267 50.5567 17.4067 50.1967 17.82C49.8501 18.22 49.3834 18.5667 48.7967 18.86C48.2101 19.14 47.4634 19.28 46.5567 19.28ZM44.1367 12.9H48.7767C48.7234 12.3267 48.4901 11.8667 48.0767 11.52C47.6767 11.1733 47.1501 11 46.4967 11C45.8167 11 45.2767 11.1733 44.8767 11.52C44.4767 11.8667 44.2301 12.3267 44.1367 12.9ZM57.6997 19.28C56.4064 19.28 55.3464 19 54.5197 18.44C53.693 17.88 53.193 17.08 53.0197 16.04L55.3397 15.44C55.433 15.9067 55.5864 16.2733 55.7997 16.54C56.0264 16.8067 56.2997 17 56.6197 17.12C56.953 17.2267 57.313 17.28 57.6997 17.28C58.2864 17.28 58.7197 17.18 58.9997 16.98C59.2797 16.7667 59.4197 16.5067 59.4197 16.2C59.4197 15.8933 59.2864 15.66 59.0197 15.5C58.753 15.3267 58.3264 15.1867 57.7397 15.08L57.1797 14.98C56.4864 14.8467 55.853 14.6667 55.2797 14.44C54.7064 14.2 54.2464 13.8733 53.8997 13.46C53.553 13.0467 53.3797 12.5133 53.3797 11.86C53.3797 10.8733 53.7397 10.12 54.4597 9.6C55.1797 9.06667 56.1264 8.8 57.2997 8.8C58.4064 8.8 59.3264 9.04667 60.0597 9.54C60.793 10.0333 61.273 10.68 61.4997 11.48L59.1597 12.2C59.053 11.6933 58.833 11.3333 58.4997 11.12C58.1797 10.9067 57.7797 10.8 57.2997 10.8C56.8197 10.8 56.453 10.8867 56.1997 11.06C55.9464 11.22 55.8197 11.4467 55.8197 11.74C55.8197 12.06 55.953 12.3 56.2197 12.46C56.4864 12.6067 56.8464 12.72 57.2997 12.8L57.8597 12.9C58.6064 13.0333 59.2797 13.2133 59.8797 13.44C60.493 13.6533 60.973 13.9667 61.3197 14.38C61.6797 14.78 61.8597 15.3267 61.8597 16.02C61.8597 17.06 61.4797 17.8667 60.7197 18.44C59.973 19 58.9664 19.28 57.6997 19.28ZM68.788 19.28C67.8013 19.28 66.9146 19.08 66.128 18.68C65.3413 18.28 64.7213 17.7 64.268 16.94C63.8146 16.18 63.588 15.2667 63.588 14.2V13.88C63.588 12.8133 63.8146 11.9 64.268 11.14C64.7213 10.38 65.3413 9.8 66.128 9.4C66.9146 9 67.8013 8.8 68.788 8.8C69.7746 8.8 70.6613 9 71.448 9.4C72.2346 9.8 72.8546 10.38 73.308 11.14C73.7613 11.9 73.988 12.8133 73.988 13.88V14.2C73.988 15.2667 73.7613 16.18 73.308 16.94C72.8546 17.7 72.2346 18.28 71.448 18.68C70.6613 19.08 69.7746 19.28 68.788 19.28ZM68.788 17.04C69.5613 17.04 70.2013 16.7933 70.708 16.3C71.2146 15.7933 71.468 15.0733 71.468 14.14V13.94C71.468 13.0067 71.2146 12.2933 70.708 11.8C70.2146 11.2933 69.5746 11.04 68.788 11.04C68.0146 11.04 67.3746 11.2933 66.868 11.8C66.3613 12.2933 66.108 13.0067 66.108 13.94V14.14C66.108 15.0733 66.3613 15.7933 66.868 16.3C67.3746 16.7933 68.0146 17.04 68.788 17.04ZM76.3141 19V5H78.8341V19H76.3141ZM83.7066 19L80.5466 9.08H83.2266L85.5266 17.16H85.8866L88.1866 9.08H90.8666L87.7066 19H83.7066ZM96.8106 19.28C95.824 19.28 94.9506 19.0733 94.1906 18.66C93.444 18.2333 92.8573 17.64 92.4306 16.88C92.0173 16.1067 91.8106 15.2 91.8106 14.16V13.92C91.8106 12.88 92.0173 11.98 92.4306 11.22C92.844 10.4467 93.424 9.85333 94.1706 9.44C94.9173 9.01333 95.784 8.8 96.7706 8.8C97.744 8.8 98.5906 9.02 99.3106 9.46C100.031 9.88667 100.591 10.4867 100.991 11.26C101.391 12.02 101.591 12.9067 101.591 13.92V14.78H94.3706C94.3973 15.46 94.6506 16.0133 95.1306 16.44C95.6106 16.8667 96.1973 17.08 96.8906 17.08C97.5973 17.08 98.1173 16.9267 98.4506 16.62C98.784 16.3133 99.0373 15.9733 99.2106 15.6L101.271 16.68C101.084 17.0267 100.811 17.4067 100.451 17.82C100.104 18.22 99.6373 18.5667 99.0506 18.86C98.464 19.14 97.7173 19.28 96.8106 19.28ZM94.3906 12.9H99.0306C98.9773 12.3267 98.744 11.8667 98.3306 11.52C97.9306 11.1733 97.404 11 96.7506 11C96.0706 11 95.5306 11.1733 95.1306 11.52C94.7306 11.8667 94.484 12.3267 94.3906 12.9ZM102.874 19L106.974 11.94L102.914 5H105.914L108.694 10.06H109.054L111.834 5H114.834L110.774 11.94L114.874 19H111.874L109.054 13.82H108.694L105.874 19H102.874Z"
                            fill="black"
                        />
                        <defs>
                            <clipPath id="clip0_7519_482">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <Text>
                        <Link href="https://resolvex.ai" target="_blank">
                            ResolveX.ai
                        </Link>
                        , forge vital customer connections
                    </Text>
                </Container>
            </Body>
        </Tailwind>
    </Html>
);
