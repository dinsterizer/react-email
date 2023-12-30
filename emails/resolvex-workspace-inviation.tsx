import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Text,
    Tailwind,
    Button,
} from '@react-email/components';
import * as React from 'react';

export default ({
    workspaceName = '{{ORGANIZATION_NAME}}',
    inviter = '{{INVITER_NAME}}',
    invitationAcceptUrl = '{{INVITATION_ACCEPT_URL}}',
}: {
    workspaceName: string;
    inviter: string;
    invitationAcceptUrl: string;
}) => (
    <Html>
        <Head />
        <Preview>Invitation to join "{workspaceName}" on ResolveX.ai</Preview>
        <Tailwind>
            <Body
                className="bg-white"
                style={{
                    fontFamily:
                        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                }}
            >
                <Container>
                    <Heading className="text-2xl text-gray-700">
                        <span className="font-bold">{inviter}</span> invited you to join{' '}
                        <span className="inline-block min-w-max font-bold">"{workspaceName}"</span> on ResolveX.ai
                    </Heading>

                    <div className="flex justify-center py-8">
                        <Link href={invitationAcceptUrl} className="rounded-md bg-gray-900 text-white py-4 px-8">
                            Join now
                        </Link>
                    </div>

                    <Text className="text-gray-700">
                        Or copy and paste this link into your browser: <br />
                        <Link href={invitationAcceptUrl} className="text-blue-700">
                            {invitationAcceptUrl}
                        </Link>
                    </Text>
                </Container>

                <Container className="mt-12">
                    <Img src="https://resolvex.ai/full-logo.png" height={32} alt="logo" />
                    <Text className="text-gray-900">
                        <Link href="https://resolvex.ai" target="_blank" className="text-blue-700">
                            ResolveX.ai
                        </Link>
                        , forge vital customer connections
                    </Text>
                </Container>
            </Body>
        </Tailwind>
    </Html>
);
