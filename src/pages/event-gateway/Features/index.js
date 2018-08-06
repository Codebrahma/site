import React from 'react';

import {
  Flex,
  Box,
  Heading,
  P
} from 'serverless-design-system/src';

import gatewayFeature1 from '../../../assets/images/event-gateway-feature1.png';
import gatewayFeature2 from '../../../assets/images/event-gateway-feature2.png';
import gatewayFeature3 from '../../../assets/images/event-gateway-feature3.png';
import gatewayFeature4 from '../../../assets/images/event-gateway-feature4.png';
import gatewayFeature5 from '../../../assets/images/event-gateway-feature5.png';
import gatewayFeature6 from '../../../assets/images/event-gateway-feature6.png';

// TODO: Add counter based number for each image
const FeatureItem = ({ header, img, content }) => (
  <Box width={[1, 1, 1/2]} pr="100px" pb="70px">
    <img src={img} mb={2}/>
    <Heading.h3 fontFamily="SoleilBk">{header}</Heading.h3>
    <P>{content}</P>
  </Box>
);

const featureItemsData = [
  {
    header: 'API Gateway',
    img: gatewayFeature1,
    content: 'Easily subscribe FaaS functions to HTTP endpoints. Setup multiple Serverless services under a single domain, even across AWS accounts.',
  },
  {
    header: 'Pub/Sub',
    img: gatewayFeature2,
    content: 'Take advantage of pub/sun functionality but utilizing custom events. This allows you to process the same event with multiple systems.',
  },
  {
    header: 'Connector Functions',
    img: gatewayFeature3,
    content: 'Automatically route events to external systems like Kinesis, Firehose, SQS, etc.',
  },
  {
    header: 'Platform Agnostic',
    img: gatewayFeature4,
    content: 'All your cloud services are now compatible with one another; share cross-cloud functions and events with AWS Lambda, Microsoft Azure, IBM OpenWhisk and Google Cloud Platform.',
  },
  {
    header: 'Streaming Events',
    img: gatewayFeature5,
    content: 'Data streams in you application become events. Centralize events from any cloud provider to get a bird’s eye view of all the data flowing through your cloud.',
  },
  {
    header: 'Shareable events',
    img: gatewayFeature6,
    content: 'Share events and functions to other parts of the application. Your teammates can find them and utilize them in their own services.',
  },
];

const Features = () => (
  <Flex flexDirection="column" px={50} mt={6}>
    <Heading.h2 align="center" fontFamily="SoleilSb" my={4}>Features</Heading.h2>
    <Flex flexDirection="row" flexWrap="wrap" mt={3}>
      {
        featureItemsData.map(({ header, img, content }) => (
          <FeatureItem
            header={header}
            content={content}
            img={img}
          />
        ))
      }
    </Flex>
  </Flex>
);

export default Features;