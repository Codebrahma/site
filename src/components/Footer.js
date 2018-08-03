// TODO
// Identify how to include hard coded values in theme
// Negative pixel for icon top - possible to include in theme
// Make image load faster


import React from 'react';
import {
  Flex,
  Box,
  Button,
  Heading,
  Image,
  P,
  TextField,
  TextWithIcon
} from 'serverless-design-system/src';

// Renders Each item in the footer list
// If used >= 3 move to molecules. (Currently 2)
const FooterListItem = ({ content, color, pt }) => (
  <Box>
    <P
      color={color}
      fontSize={1}
      lineHeight={1}
      letterSpacing="letterSpacings.text"
      m={0}
      pt={1}
    >
      {content}
    </P>
  </Box>
);

// Renders each column in the footer list
const FooterListColumn = ({ header, listItems }) => (
  <Box
    width={['50%', '50%', '20%']}
    mb={[2, 2, 0]}
  >
    <FooterListItem 
      color="white"
      content={header}
      pt={1}
    />
    <Box>
    {
      listItems.map((listItem, index) => (
        <FooterListItem
          key={index}
          color="gray.3"
          content={listItem}
        />
      ))
    }
    </Box>
  </Box>
);

// Renders Company details
const CompanyDetails = () => (
  <Box width={1}>
    <Box width={[1, 1, 1/2]}>
      <P
        fontSize={0}
        lineHeight={3}
        opacity="0.5"
        m={0}
      >
        Made with love in San Francisco + Atlanta, Austria, Germany, Pakistan, Poland, Nebraska & Thailand
      </P>
    </Box>
    <Flex
      pt={4}
      flexDirection={['column', 'column', 'row']}
      alignItems={['left', 'left', 'center']}
    >
      <Box width={[1/2, 1/2, 1]}>
        <P m={0} fontSize={0} >
          Serverless, Inc. © 2018
        </P>
      </Box>
      <Flex color="gray.3" width={[1/2, 1/2, 1]}>
        <Box>
          <P fontSize={0}>terms of service</P>
        </Box>
        <Box ml={2}>
          <P fontSize={0}>privacy policy
          </P>
        </Box>
      </Flex>
    </Flex>
  </Box>
);

// Renders Next Steps Box
const NextSteps = () => (
  <Flex
    bg="serverlessRed"
    flexDirection={['column', 'column', 'row']}
    position="relative"
    top="-320px"
    mb="-290px"
  >
    <Box
      width={[1, 1, 1/2]}
      py={[3, 5, '150px']}
      px={[3, 5, '100px']}
      boxSizing="border-box"
      justifyContent="center"
      flexDirection="column"
    >
      <TextWithIcon
        iconSrc='https://serverless.com/_/src/assets/images/rectangle-19.a57a9c80ca655ee1f532968ba2b68a6b.png'
        iconHeight="100px"
        iconWidth="150px"
        iconTop="-30px"
        iconLeft='-80px'
        backgroundSize={[0, 0, 'initial']}
      >
        <Heading.h2>Next Steps</Heading.h2>
      </TextWithIcon>
      <P color="white">Check out all the different use cases for serverless applications. Take a peek at how the Serverless Framework compares to other software.</P>
      <P color="white">Or if you're ready, follow our step-by-step guide to start building a Serverless Application with your favorite language.</P>
    </Box>
    <Flex
      width={[1, 1, 1/2]}
      py={[5, 5, '150px']}
      px={[3, 3, '100px']}
      boxSizing="border-box"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      background="#fd5750 url(https://serverless.com/_/src/assets/images/pre-footer-bg-image.a8c67ce585f41329f72b928ddd55a4b0.png) no-repeat"
      backgroundSize="cover"
    >
      <Box pb={2}>
        <Button
          width="230px"
          border="2"
          color="white"
          >
            use cases
          </Button>
      </Box>
      <Box>
        <Button
          width="230px"
          border="2"
          hoverColor="white"
          color="white"
        >
          comparision
        </Button>
      </Box>
    </Flex>
  </Flex>
);

// Renders the subscribe column
const Subscribe = () => (
  <Flex
    flexDirection="column"
    width={[1, 1, 0.28]}
    order={['1', '1', '2']}
    pl={[0, 0, 3]}
  >
    <Box mb="40px">
      <P color="white">
        Join our newsletter and get the latest news about Serverless products and happenings. #noSpamWePromise
      </P>
    </Box>
    <Flex
      flexDirection={['column', 'column', 'row']}
      justifyContent="center"
    >
      <TextField
        color="white"
        bg="gray.3"
        border="none"
        fontSize={3}
        letterSpacing="textField"
        lineHeight={4}
        opacity="0.2"
        placeholder="email address"
        px={[1, 1, 1]}
        py={2}
        width={[1, 1, 0.6]}
        boxSizing="border-box"
      />
      <Button
        width={['35%', '35%', '40%']}
        px={[0, 0, 1]}
        py={2}
        textAlign="center"
        fontSize={3}
      >
        Sign up
      </Button>
    </Flex>
    <Box py={3}>
      <Image mr={3} src="https://serverless.com/_/src/assets/images/facebook.122045691ad327ec8d9806837bcb915d.png" />
      <Image mr={3} src="https://serverless.com/_/src/assets/images/instagram.695101eb8303515c136199da23982dd8.png" />
      <Image mr={3} src="https://serverless.com/_/src/assets/images/twitter.9da0b7cc2b72560a3cbfd4c1c92bbb42.png" />
    </Box>
  </Flex>
);

// Renders the Footer Icon
const FooterIcon = () => (
  <Box
    pt={[0, 0, 2]}
    pb={[0, 0, '100px']}
    width={1}
  >
    <Image
      width={[0, 0, '138px']}
      src="https://serverless.com/_/src/assets/images/logo.ce91bef30d19103f7a9be878a9b44465.png"
    />
  </Box>
);

// Renders the entire footer list items
const FooterListItems = () => (
  <Flex
    width={[1, 1, 0.65]}
    flexDirection="column"
    order={['2', '2', '1']}
  >
    <Flex
      width={1}
      flexWrap="wrap"
      px={[1, 1, 0]}
      mb={4}
    >
      <FooterListColumn
        header="platform"
        listItems={['framework', 'dashboard', 'event gateway', 'enterprise']}
      />
      <FooterListColumn
        header="developers"
        listItems={['docs', 'quick starts', 'examples & guides']}
      />
      <FooterListColumn
        header="learn"
        listItems={['why ?', 'use cases', 'comparisions']}
      />
      <FooterListColumn
        header="resources"
        listItems={['blog', 'forum', 'meetups', 'slack', 'workshops']}
      />
      <FooterListColumn
        header="company"
        listItems={['team', 'jobs', 'champions', 'contacts']}
      />
    </Flex>
    <CompanyDetails />
  </Flex>
);

// Self contained Root Renderer for footer
const FooterWrapper = () => (
  <Box
    bg="black"
    pt={[0, 0, '100px']}
    pb="100px"
  >
    <Flex
      flexDirection="row"
      m="auto"
      flexWrap="wrap"
      maxWidth={1}
    >
      <Image
        src="https://serverless.com/_/src/assets/images/glitch-effect.4b56a6820dd98967a1926d4eed0377f3.png"
        mt="-20px"
      />
      <Box
        width={1}
        px={[0, 0, 2]}
      >
        <NextSteps />
        <FooterIcon />
      </Box>
      <Flex
        width={1}
        px={2}
        flexWrap="wrap"
      >
        <FooterListItems />
        <Subscribe />
      </Flex>
    </Flex>
  </Box>
);

export default FooterWrapper;