import styles from "./page.module.css";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";
import Head from 'next/head';
import Footer from "@/components/footer/Footer";




export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      <Head>
        <title key="title">Next App Store</title>
      </Head>
      <Navbar />
      <div className={styles.mainWrapper}>
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
