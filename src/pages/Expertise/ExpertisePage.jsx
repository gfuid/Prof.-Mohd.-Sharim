import { PageHero } from '../../components/PageHero'
import { Expertise } from '../../components/Expertise'
import { Achievements } from '../../components/Achievements'

export function ExpertisePage() {
  return (
    <>
      <PageHero
        title="Expertise"
        crumb="Expertise"
        subtitle="WHO-GMP compliance, QMS implementation, regulatory audits, validation, CAPA, and GMP documentation."
      />
      <Expertise />
      <Achievements />
    </>
  )
}

export default ExpertisePage
