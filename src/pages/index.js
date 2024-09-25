import Navbar from '../components/layouts/Navbar';
import Content from '../components/index/Content';
import Footer from '../components/layouts/Footer';

import mainStyle from '../styles/MainStyle.module.css';


export default function Home() {
  return (
    <div className={mainStyle.style}>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}