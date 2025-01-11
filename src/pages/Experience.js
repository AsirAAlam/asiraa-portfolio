import React from 'react'
import ExperienceItem from '../components/ExperienceItem'
import experiences from '../data/Experiences'
import Container from '@mui/material/Container'

export default function Experiences() {
  return (
    <Container className='pt-16'>
      <div className="mb-32">
        <ExperienceItem
          title={experiences[0].title}
          role={experiences[0].role}
          description={experiences[0].description}
        />
      </div>

      <ExperienceItem
        title={experiences[1].title}
        role={experiences[1].role}
        description={experiences[1].description}
      />
    </Container>
  )
}
