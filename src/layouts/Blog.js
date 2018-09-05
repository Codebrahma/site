import React from 'react'
import { withTheme } from 'styled-components'
import { Box, Column } from 'serverless-design-system/src'
import { BlogHeader as Header, Footer } from 'src/components'

const BlogLayout = ({ theme, children, prefooter, transparentHeader }) => (
  <Column width={1}>
    <Header transparent={transparentHeader} />
    <Box
      width={1}
      pt={[
        55,
        55,
        196
      ]}
      pb={[6, 6, 6, 250]}
    >
      {children}
    </Box>
    <Footer prefooter={prefooter} />
  </Column>
)

export default withTheme(BlogLayout)