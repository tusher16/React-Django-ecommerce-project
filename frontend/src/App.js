import { Container } from 'react-bootstrap';
import FontAwesomeIcon from "@fortawesome/react-fontawesome";


import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Modal from './components/Modal/Modal';
import Main from './components/Main/Main';

import HomeScreen from './components/screens/HomeScreen';

function App() {
  return (
    <div>
        <Header />
        <main className="py-3"> 
          <Container>
             <HomeScreen />
          </Container>
        </main>
        <Footer />
    </div>
  );
}

export default App;
