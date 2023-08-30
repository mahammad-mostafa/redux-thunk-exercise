import { Provider } from 'react-redux';
import Store from './store/store';
import Header from './components/header';
import Footer from './components/footer';
import List from './components/list';

function App() {
  return (
    <Provider store={Store}>
      <Header />
      <main>
        <List />
      </main>
      <Footer />
    </Provider>
  );
}

export default App;
