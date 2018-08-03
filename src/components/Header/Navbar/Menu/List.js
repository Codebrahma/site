import React from 'react';

import { Box, Button } from 'serverless-design-system/src';

import MenuTitle from './Title';
import MenuDescription from './Description';
import {
  PlatformDetailedMenu,
  DeveloperDetailedMenu,
  LearnDetailedMenu,
  ResourceDetailedMenu
} from './ExtendedMenu';

const PlatformMenu = () => (
  <Box>
    <MenuTitle name={'platform'} />
    <MenuDescription wrapperStyles={{ minWidth: [ 0, 0, '320px'] }}>
      <PlatformDetailedMenu />
    </MenuDescription>
  </Box>
);

const DeveloperMenu = () => (
  <Box>
    <MenuTitle name={'developers'} />
    <MenuDescription wrapperStyles={{ minWidth: [ 0, 0, '430px' ] }}>
      <DeveloperDetailedMenu />
    </MenuDescription>
  </Box>
)

const LearnMenu = () => (
  <Box>
    <MenuTitle name={'learn'} />
    <MenuDescription>
      <LearnDetailedMenu />
    </MenuDescription>
  </Box>
);

const ResourcesMenu = () => (
  <Box>
    <MenuTitle name={'resources'} />
    <MenuDescription>
      <ResourceDetailedMenu />
    </MenuDescription>
  </Box>
)

const EnterpriseMenu = () => (
  <Box>
    <MenuTitle name={'enterprise'} />
  </Box>
)

const SignupMenu = () => (
  <Box>
    <Button
      fontSize={'1.5rem'}
      px={2}
      py={2}
      border={'0'}
    >
      sign up
    </Button>
  </Box>
)

export default [
  PlatformMenu,
  DeveloperMenu,
  LearnMenu,
  ResourcesMenu,
  EnterpriseMenu,
  SignupMenu
];
