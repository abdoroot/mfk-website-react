import { BrowserRouter } from 'react-router-dom';
import RouterContent from './RouterContent'; // ⬅️ This will contain your routes

function App() {
  return (
    <BrowserRouter>
      <RouterContent />
    </BrowserRouter>
  );
}

export default App;
