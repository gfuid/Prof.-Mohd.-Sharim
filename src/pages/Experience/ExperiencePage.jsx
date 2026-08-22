import { PageHero } from '../../components/PageHero'
import { ExperienceTimeline } from '../../components/ExperienceTimeline'
import { Stats } from '../../components/Stats'

export function ExperiencePage() {
  return (
    <>
      <PageHero
        title="Experience"
        crumb="Experience"
        subtitle="17+ years of quality leadership across five pharmaceutical organizations."
      />
      <Stats />
      <ExperienceTimeline />
    </>
  )
}

export default ExperiencePage
