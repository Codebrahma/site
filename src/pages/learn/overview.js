import React from 'react'

import DefaultLayout from 'src/layouts/Default'

import Prefooter from 'src/components/pages/learn/Prefooter'
import Hero from 'src/components/pages/learn/overview/Hero'
import UseCase from 'src/components/pages/learn/overview/UseCase'
import ServerlessAppBenefits from 'src/components/pages/learn/overview/AppBenefits'
import ServerlessFrameworkBenefits from 'src/components/pages/learn/overview/FrameworkBenefits'
import AboutServerlessFramework from 'src/components/pages/learn/overview/AboutServerlessFramework'
import GetStarted from 'src/components/pages/learn/overview/GetStarted'

import { Divider } from 'src/fragments'

const Overview = () => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Hero/>
    <UseCase />
    <GetStarted />
    <ServerlessAppBenefits />
    <Divider />
    <AboutServerlessFramework />
    <ServerlessFrameworkBenefits/>
  </DefaultLayout>
)

export default Overview