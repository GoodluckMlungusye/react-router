import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import Careers from "./pages/careers/Careers";
import CareerDetails from "./pages/careers/CareerDetails";
import CareersError from "./pages/careers/CareersError";

//layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";

//loaders
import { careersLoader } from "./loaders/CareersLoader";
import { careerDetailsLoader } from "./loaders/CareerDetailsLoader";

//formActions
import { contactAction } from "./formActions/ContactAction";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="help" element={<HelpLayout/>}>
        <Route path="faq" element={<Faq/>}/>
        <Route path="contact" element={<Contact/>} action={contactAction}/>
      </Route>
      <Route path="careers" element={<CareersLayout/>}  errorElement={<CareersError/>}>
        <Route index element={<Careers/>} loader={careersLoader}/>
        <Route path=":id" element={<CareerDetails/>}  loader={careerDetailsLoader}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
  </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App
