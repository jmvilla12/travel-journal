import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';
import './App.css';
import data from "./data"

export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
      
    )
  });
  return (

    <div className="App gridApp">
      <Navbar />
      <section className='cards-list'>
        {cards}
      </section>
      <Footer />
    </div>
  );
}

