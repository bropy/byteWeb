import { Inter } from "next/font/google";
import Navbar from '../components/layout/Navbar';
import Content from '../components/index/Content';
import Footer from '../components/layout/Footer';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}