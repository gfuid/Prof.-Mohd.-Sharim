import { PageHero } from '../../components/PageHero'
import { EducationSection } from '../../components/EducationSection'

export function EducationPage() {
  return (
    <>
      <PageHero
        title="Education & Certifications"
        crumb="Education"
        subtitle="Ph.D. (Pharmacy), M.Pharm., B.Pharm., and professional quality certifications through ASQ."
      />
      <EducationSection />
    </>
  )
}

export default EducationPage
