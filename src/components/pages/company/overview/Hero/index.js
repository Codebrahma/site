import React from 'react'

import { Box, Text, ResponsiveStack } from 'serverless-design-system/src'
import { HeroWrapper } from 'src/fragments'
import HeroTabs from '../../../learn/HeroTabs'
import background from 'src/assets/images/company-overview-background.png'

const CompanyOverviewHero = () => (
  <HeroWrapper
    background={`url(${background})`}
    backgroundSize="contain"
  >
    <Box mb={[2, 2, 5]}>
      <HeroTabs />
    </Box>

    <ResponsiveStack
      mb={9}
      color="white"
    >
      <Box width={[1, 1, 1/2]}>
        <Text.p
          fontSize={[7, 7, 7, 8]}
          fontFamily="Soleil"
          lineHeight={1}
          letterSpacing={'-0.2'}
          m={0}
        >
          Company
        </Text.p>
      </Box>
      <Box
        width={[1, 1, 1/2]}
        pl={[0, 0, 4]}
        pr={[0, 0, 6]}
      >
        <Text.p
          fontSize={[2, 2, 4]}
          fontFamily="SoleilLt"
          lineHeight={3}
          letterSpacing={0}
          mt={[3, 3, 1]}
          mb={3}
        >
          We envision a world where developers can easily scale their cloud infrastructure on any platform from any device. At Serverless we are creating the tools for that.
        </Text.p>
      </Box>
    </ResponsiveStack>
  </HeroWrapper>
)

export default CompanyOverviewHero