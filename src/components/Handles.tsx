import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import bio from "../data/Bio";

const iconStyle = {
  height: 40,
  width: 40,
  cursor: "pointer",
  backgroundColor: "transparent",
};
const aStyle = {
  display: "inline-block",
  zIndex: 1,
  backgroundColor: "transparent",
};

const githubURL = "https://github.com/AsirAAlam";
const linkedinURL = "https://www.linkedin.com/in/asiraalam/";
const emailURL = "mailto:" + bio.email;

function Handles() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <a className="linkIcon" href={githubURL} style={aStyle}>
        <GitHubIcon sx={iconStyle} />
      </a>

      <a className="linkIcon" href={linkedinURL} style={aStyle}>
        <LinkedInIcon sx={iconStyle} />
      </a>

      <a className="linkIcon" href={emailURL} style={aStyle}>
        <EmailIcon sx={iconStyle} />
      </a>

      <a
        className="linkIcon"
        href="/resume.pdf"
        style={aStyle}
        download="resume.pdf"
      >
        <SimCardDownloadIcon sx={iconStyle} />
      </a>
    </div>
  );
}

export default Handles;
