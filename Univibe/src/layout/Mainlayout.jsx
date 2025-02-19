import Content from "../component/Content/Content1";
import Content2 from "../component/Content/Content2";
import Nav from "../component/Nav/Nav";
import Promote from "../component/Promote/Promote";

function Mainlayout() {
  return (
  <section id = "main-layout">
    <Nav></Nav>
    <Promote></Promote>
    <Content></Content>
    <Content2></Content2>
  </section>);
}
export default Mainlayout