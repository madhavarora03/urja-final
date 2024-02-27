import Header from './components/Header';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <main className='w-full min-h-dvh'>
      <Header />
      <div>
        <Outlet />
      </div>
    </main>
  );
}
