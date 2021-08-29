import React from "react";
import CenteredHero from "../../Centered-Hero/Cenetered-Hero";
import TextImageColumnsHero from "../../Text-Image-Columns-Hero/Text-Image-Columns-Hero";
import * as pageOptions from "./home-page.json";

class HomePage extends React.Component {
  render() {
    console.log(
      "pageOptions: " + JSON.stringify(pageOptions.pageDivisions[0].options)
    );

    return (
      <div>
        <TextImageColumnsHero options={pageOptions.pageDivisions[0].options} />
        <CenteredHero options={pageOptions.pageDivisions[1].options} />
        <TextImageColumnsHero options={pageOptions.pageDivisions[0].options} />
        <h1>Dynamic generation</h1>
        {pageOptions.pageDivisions.map((pageDivision) => {
          switch (pageDivision.divisionName) {
            case "Text-Image-Columns-Hero":
              return  <TextImageColumnsHero options={pageDivision.options} />
            case "Centered-Hero":
                return <CenteredHero options={pageDivision.options} />
            default:
              break;
          }
          return <h1>Error: React Class Home Page: Unknown Division Name</h1>;
        })}

  
      </div>
    );
  }
}



export default HomePage;
