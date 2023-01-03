
import React  from "react";
import SolutionCard from "../common/SolutionCard";
import "./LandingPage.css";
import VectormarketingCardLogo from "../../assets/Vector-marketing.png";
import VectorgovernmentCardLogo from "../../assets/Vector-government.png";
import  DesigndevelopmentCardLogo from "../../assets/designdevelopment.png";
import VectorfinanceCardLogo from "../../assets/Vector-finance.png";
import VectorcustomerCardLogo from "../../assets/Vector-customer.png";
import VectorbusinessCardLogo from "../../assets/Vector-business.png";
import HumanresearchCardLogo from "../../assets/humanResearch.png";
import ProjectmanagementCardLogo from "../../assets/project.png"; 
import { DarkmodeContext } from "../../contex/darkmode/index";
  
  



import { Grid } from "@mui/material";
const dataList = [
  {
    title: "Marketing & Communication",
    description: "237 Jobs Available",
    icon: VectormarketingCardLogo,
  },
  {
    title: "Design & Development",
    description: "237 Jobs Available",
    icon: DesigndevelopmentCardLogo,
  },
  {
    title: "Human Research & Development",
    description: "237 Jobs Available",
    icon: HumanresearchCardLogo,
  },
  {
    title: "Finance Management",
    description: "237 Jobs Available",
    icon: VectorfinanceCardLogo,
  },
  {
    title: "Government Jobs",
    description: "237 Jobs Available",
    icon: VectorgovernmentCardLogo,
  },
  {
    title: "Business & Consulting",
    description: "237 Jobs Available",
    icon: VectorbusinessCardLogo,
  },
  {
    title: "Customer Support Care",
    description: "237 Jobs Available",
    icon: VectorcustomerCardLogo,
  },
  {
    title: "Project Management",
    description: "237 Jobs Available",
    icon: ProjectmanagementCardLogo,
  },
];

export default function OnPlatform() {
  const [state, dispatch] = React.useContext(DarkmodeContext);
  
  return (
    <div 
    style={{
      color: state.shades.secondary,
        backgroundColor: state.shades.primary,
     
    }}
    className="onePlateform-container">
      <h1>
        One Plateform many <span>Solution</span>
      </h1>
      <Grid container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}


      >
        {dataList.map((e, i) => (
          <SolutionCard
            title={e.title}
            description={e.description}
            icon={e.icon}
            key={i}
          />
        ))}
      </Grid>
    </div>
  );
}

