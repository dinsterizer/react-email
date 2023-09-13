import { Body, Container, Head, Heading, Html, Img, Link, Preview, Text, Tailwind } from '@react-email/components';
import * as React from 'react';

export default ({ otp = '{{OTP}}', homeUrl = '{{HOME_URL}}' }: { otp: string; homeUrl: string }) => (
    <Html>
        <Head />
        <Preview>The OTP provided for your login request</Preview>
        <Tailwind>
            <Body
                className="bg-white text-gray-900"
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
                    <Img src="https://resolvex.ai/logo.png" height={32} alt="logo" />
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
