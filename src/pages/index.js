import Navbar from '../components/layout/Navbar';
import Content from '../components/index/Content';
import Footer from '../components/layout/Footer';

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