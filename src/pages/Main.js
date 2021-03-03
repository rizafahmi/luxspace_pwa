import Header from '../components/Header.js';
import Hero from '../components/Hero.js';
import Browse from '../components/Browse.js';
import Arrived from '../components/Arrived.js';
import Clients from '../components/Clients.js';
import AsideMenu from '../components/AsideMenu.js';
import Footer from '../components/Footer.js';
import Offline from '../components/Offline.js';

function Main({ offlineStatus, items }) {
  return (
    <>
      {offlineStatus && <Offline />}
      <Header />
      <Hero />
      <Browse />
      <Arrived items={items} />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  )
}

export default Main;