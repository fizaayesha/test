import Menu from "./Components/Menu";
import SideBar from "./Components/SideBar";
import NavbarIcons from "./Components/NavbarIcons";
import styled from "styled-components";
import BoxAbove from "./Components/BoxAbove";
function App() {
  return (
    <div div className="App" style={{ background: "#f2f2f2" }}>
      <SideBar />
      <MainContentStyles>
        <NavbarIcons/>
        <BoxAbove />
        <Menu />
      </MainContentStyles>
    </div>
  );
}
const MainContentStyles = styled.main`
  background-color: #f2f2f2;
  margin-top: -2rem;
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`;
export default App;
