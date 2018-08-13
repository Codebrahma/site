import React from 'react'

import { Box, Flex } from 'serverless-design-system/src'
import { Header, Footer } from 'src/components'

const DefaultLayout = ({ children, prefooter, transparentHeader }) => (
  <Flex flexDirection='column' width={1}>
    <Header transparent={transparentHeader} />
    <Box width={1}>{children}</Box>
    <Footer prefooter={prefooter} />
  </Flex>
)

export default DefaultLayout