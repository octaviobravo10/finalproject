import "./App.css";
import { Navigation } from "./components/navigation/navigation.component";
import { Routes, Route } from 'react-router';
import { CompilerHome } from './pages/compiler/compiler.page';
import { Tutorials } from './pages/tutorials/tutorials.page';
import { Feedback } from './pages/feedback/feedback.page';

function App() {
  return (
    <div className="main">
      <Navigation />
      <Routes>
        <Route path="/" element={<CompilerHome />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/contact" element={<Feedback />} />
      </Routes>
    </div>
  );
}

export default App;