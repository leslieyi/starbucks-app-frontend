import { useParams } from "react-router-dom";

function MainContainer() {
  const params = useParams();

  return (
    <div class="ui three column divided grid">
  
      {/* <div class="row">
        <div class="column">
          <p>Hello from Maincontainer</p>
        </div>
        <div class="column">
          <p>Hello from</p>
        </div>
        <div class="column">
          <p>Photos</p>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <p>whatever</p>
        </div>
        <div class="column">
          <p>wthis</p>
        </div>
        <div class="column">
          <p>that</p>
        </div>
      </div> */}
    </div>
  );
}

export default MainContainer;
