import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Contact } from './pages/Contact/Contact'

// Admissions Pages
import { CollegeMappingPage } from './pages/Admissions/CollegeMappingPage'
import { ChoiceLockingPage } from './pages/Admissions/ChoiceLockingPage'
import { ExamSupportPage } from './pages/Admissions/ExamSupportPage'
import { AdmissionPackagesPage } from './pages/Admissions/AdmissionPackagesPage'

// Placements Pages
import { CvLinkedinPage } from './pages/Placements/CvLinkedinPage'
import { MockInterviewsPage } from './pages/Placements/MockInterviewsPage'
import { JobReferralsPage } from './pages/Placements/JobReferralsPage'
import { PlacementPackagesPage } from './pages/Placements/PlacementPackagesPage'

// Trainings Pages
import { PharmaTrainingPage } from './pages/Trainings/PharmaTrainingPage'
import { SoftSkillsPage } from './pages/Trainings/SoftSkillsPage'
import { ComputerExcelPage } from './pages/Trainings/ComputerExcelPage'
import { CrashCoursesPage } from './pages/Trainings/CrashCoursesPage'

function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-28 text-center lg:px-8">
      <p className="text-6xl font-extrabold text-[#2f6bfd]">404</p>
      <h1 className="mt-4 text-2xl font-bold text-[#0f1830]">Page not found</h1>
      <p className="mt-2 text-slate-500">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-xl bg-[#2f6bfd] px-7 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#2f6bfd]/25 transition-colors hover:bg-[#1e55e3]"
      >
        Back to Home
      </Link>
    </section>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },

      // Admissions Routes
      { path: 'admissions/college-mapping', element: <CollegeMappingPage /> },
      { path: 'admissions/choice-locking', element: <ChoiceLockingPage /> },
      { path: 'admissions/exam-support', element: <ExamSupportPage /> },
      { path: 'admissions/packages', element: <AdmissionPackagesPage /> },

      // Placements Routes
      { path: 'placements/cv-linkedin', element: <CvLinkedinPage /> },
      { path: 'placements/mock-interviews', element: <MockInterviewsPage /> },
      { path: 'placements/job-referrals', element: <JobReferralsPage /> },
      { path: 'placements/packages', element: <PlacementPackagesPage /> },

      // Trainings Routes
      { path: 'trainings/pharma-skills', element: <PharmaTrainingPage /> },
      { path: 'trainings/soft-skills', element: <SoftSkillsPage /> },
      { path: 'trainings/computer-excel', element: <ComputerExcelPage /> },
      { path: 'trainings/crash-courses', element: <CrashCoursesPage /> },

      // Aliases
      { path: 'services', element: <AdmissionPackagesPage /> },
      { path: 'pricing', element: <AdmissionPackagesPage /> },
      { path: 'faq', element: <CollegeMappingPage /> },

      { path: '*', element: <NotFound /> },
    ],
  },
])

export function App() {
  return <RouterProvider router={router} />
}

export default App
