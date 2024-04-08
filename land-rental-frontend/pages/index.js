import { Inter } from 'next/font/google'
import Display from '../Components/Display/Display'
import About from './Website/About'
import Contact from './Website/Contact'
import Youtube from '../Components/Practice/Youtube'
import Discount from '../Components/Discount/Discount'
import Shop from './Shop'
import ShopContextProvider from './shop-context'
import Service from './Website/Service'
import News from './Website/News'
import ShowLandPost from './Website/ShowLandPost'
import Footer from './Website/Footer'
import AdminDashboard1 from './Admin/AdminDashborad1'

// import Chat from './Chat'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    
    <div>
      {/* <Chat /> */}
    <Display />
    <Discount />
    <ShowLandPost />
    <Shop />
    {/* <AdminDashboard1 /> */}
 
    <About />
    <Service />

    <Contact />
    <News />
    <Footer />
    
    {/* <Youtube /> */}
    </div>
    
   
  );
};
    {/* <Youtube /> */}

 