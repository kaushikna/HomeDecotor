import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './Home';
import Home2 from './Home2';

import TagManager from 'react-gtm-module'
import TermsOfUse from './TermsOfUse';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';
import ProntoWraps from "./ProntoWraps";
import ProntoWraps2 from './ProntoWraps2';


const tagManagerArgs = {
  gtmId: 'GTM-T4RSX5L'
}

TagManager.initialize(tagManagerArgs)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="lp2" element={<Home2 />} />
        <Route path="/termsofuse" element={<TermsOfUse />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/homelane-terms-conditions" element={<TermsAndConditions />} />
        <Route path="/wraps" element={<ProntoWraps />} />
        <Route path="/wraps2" element={<ProntoWraps2 />} />
      </Routes>
    </Router>
  );
}

export default App;
