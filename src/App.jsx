import Events from './Events.jsx';
import Courses from './Courses.jsx';
import Jobs from './Jobs.jsx';
import Blogs from './Blogs.jsx';
import Footer from './Footer.jsx';
import Slider from './Slider.jsx';
import Navi from './Navi.jsx';
import Career from './Career.jsx';
import Techcareer from './Techcareer.jsx';
import Mail from './Mail.jsx';
import Dictionary from './Dictionary.jsx';
import Carousel from './Carousel.jsx';

function App() {
  return(
    <main>
      <Navi/>
      <Slider/>
      <Events/>
      <Jobs/>
      <Courses/>
      <Career/>
      <Carousel/>
      <Techcareer/>
      <Blogs/>
      <Dictionary/>
      <Mail/>
      <Footer/>
    </main>
  );
}

export default App
