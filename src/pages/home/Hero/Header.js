import React from 'react'

import { Flex, Heading, HeroTitle, HeroMainTitle } from 'serverless-design-system/src'

const HeroHeader = () => (
  <Flex.column mt={2}>
    <HeroTitle>serverless</HeroTitle>
    <HeroMainTitle>platform</HeroMainTitle>
    <Heading.h3
      fontSize={[3, 3, 5]}
      align='center'
      color='white'
      fontFamily='SoleilBk'
      mx={2}
      my={[2, 2, 4]}
    >
      Everything you need to operationalize serverless development
    </Heading.h3>
  </Flex.column>
)

export default HeroHeader