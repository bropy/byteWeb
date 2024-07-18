import { Inter } from "next/font/google";
import Navbar from '../components/layout/Navbar';
import TestIndex from "../components/index/TestIndex";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <Navbar />
      <TestIndex/>
    </div>
  );
}