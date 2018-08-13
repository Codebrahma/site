import React from 'react'
import {
  Flex,
  Heading,
  Image,
  InlineBlock,
  List,
  ListItem,
} from 'serverless-design-system/src'

import NavLink from 'src/components/NavLink'
import { platform } from 'src/constants/urls'
import frameworkIcon from 'src/assets/images/bolt.png'
import gatewayIcon from 'src/assets/images/group-6.png'
import dashboardIcon from 'src/assets/images/icon-dashboard.png'

const platformMenuConfig = [
  {
    imgProps: {
      src: frameworkIcon,
      maxHeight: '52px',
      ml: '8px',
      mr: '43px',
    },
    text: 'framework',
    to: platform.framework,
    crossDomain: false,
    completed: true,
  },
  {
    imgProps: {
      src: gatewayIcon,
      maxHeight: '40px',
      mr: '30px',
    },
    text: 'event gateway',
    to: platform.eventGateway,
    crossDomain: false,
    completed: true,
  },
  {
    imgProps: {
      src: dashboardIcon,
      maxHeight: '40px',
      mr: '30px',
    },
    text: 'dashboard',
    to: platform.dashboard,
    crossDomain: false,
    completed: true,
  },
]

const Platform = () => (
  <List m={0} ml={[4, 4, 0]} p={0}>
    {platformMenuConfig.map(
      ({ imgProps, text, to, crossDomain, completed }, index) => (
        <NavLink
          key={index}
          to={to}
          crossDomain={crossDomain}
          completed={completed}
        >
          <ListItem.noStyleType key={text}>
            <Flex.relative
              mb={platformMenuConfig.length - 1 === index ? 0 : 2}
              justifyContent='center'
            >
              <Image {...imgProps} />
              <InlineBlock minWidth='155px'>
                <Heading.h6
                  fontFamily='Serverless'
                  fontSize='1.5rem'
                  lineHeight={0.7}
                  letterSpacing='5'
                  m={0}
                >
                  serverless
                </Heading.h6>
                <Heading.h6
                  fontFamily='Serverless'
                  fontSize='2rem'
                  lineHeight={1.7}
                  letterSpacing={0.8}
                  m={0}
                >
                  {text}
                </Heading.h6>
              </InlineBlock>
            </Flex.relative>
          </ListItem.noStyleType>
        </NavLink>
      )
    )}
  </List>
)

export default Platform