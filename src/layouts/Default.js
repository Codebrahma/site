import React from 'react';

import { Box, Flex } from 'serverless-design-system/src';
import { Header, Footer } from '../components';

export default ({ children, prefooter }) => (
  <Flex
    flexDirection='column'
    width={1}
  >
    <Header />
    <Box width={1}>
      { children }
    </Box>
    <Footer prefooter={prefooter} />
  </Flex>
);
