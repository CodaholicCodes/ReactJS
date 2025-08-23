import style from './App.module.css';
import Container from './Container.jsx';
function App() {
  return (
    <>

<Container>
    <h1 className='heading'>This is our app</h1>
<h1 className={style.heading}>hello "X AE A_XII"</h1>
</Container>
{/* <Container>
    <h1 className='heading'>This is our app</h1>
<h1 className={style.heading}>hello "X AE A_XII"</h1>
</Container> */}
    </>
  );
}

export default App
