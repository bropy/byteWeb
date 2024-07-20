import { Inter } from "next/font/google";
import Navbar from '../components/layout/Navbar';
import Prompt from '../components/index/Prompt';
import Footer from '../components/layout/Footer';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <Navbar />
      <Prompt />
      <Footer />
    </div>
  );
}