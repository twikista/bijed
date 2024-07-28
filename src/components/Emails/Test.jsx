import * as React from 'react'
import {
  Html,
  Head,
  Body,
  Container,
  Button,
  Text,
  Img,
  Preview,
  Tailwind,
  Section,
  Hr,
} from '@react-email/components'
import unibenLogo from '../../../public/uniben_logo.png'

export function Email({ name, url, link }) {
  return (
    <Html lang='en'>
      <Head>
        <title>BIJED - Password Reset</title>
      </Head>
      <Preview>This email contains instructions to reset your password</Preview>
      <Tailwind>
        <Body>
          <Container className='border-[5px] border-[#8d95ff] my-5 mx-5'>
            <Section className='w-full '>
              <Img
                src='https://res.cloudinary.com/draxxreg5/image/upload/v1721730767/bijed/uniben_logo_e3edhu.png'
                alt='uninen logo'
                width='120'
                height='120'
                className='rounded-full'
              />
              <Hr />
            </Section>
            <Text>Dear {name}</Text>
            <Button href={url}>Reset password</Button>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
