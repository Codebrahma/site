import React from 'react'

import DefaultLayout from 'src/layouts/Default'
import Hero from 'src/components/pages/event-gateway/Hero'
import UseCase from 'src/components/pages/event-gateway/UseCase'
import Features from 'src/components/pages/event-gateway/Features'
import Prefooter from 'src/components/pages/event-gateway/Prefooter'

const EventGateway = () => (
  <DefaultLayout prefooter={Prefooter} transparentHeader>
    <Hero />
    <UseCase />
    <Features />
  </DefaultLayout>
)

export default EventGateway
