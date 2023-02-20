import Header from './layouts/Header';
import LeftSidebar from './layouts/LeftSidebar';
import Main from './layouts/Main';
import './layouts/main.css'
import RightSidebar from './layouts/RightSidebar';
function App() {
  return (
    <div>
      <Header />
      <div className='sidebars'>
        <LeftSidebar />
        <Main />
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
