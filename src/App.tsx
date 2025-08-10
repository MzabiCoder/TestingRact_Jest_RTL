import Skills from './components/skills/Skills'
import { Counter } from './components/counter/Counter'
import { AppProviders } from './providers/AppProviders'
import { MuiMode } from './components/mui/MuiMode'

const App = () => {
  const skills = ['html', 'css', 'js']
  return (
    <AppProviders>
      {/* <Skills skills={skills} /> */}
      {/* <Counter /> */}
      <MuiMode />
    </AppProviders>
  )
}

export default App
