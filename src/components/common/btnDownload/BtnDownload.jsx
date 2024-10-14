import "./BtnDownload.css";
import DownloadIcon from "@mui/icons-material/Download";

export const BtnDownload = ({ src, title, downloadTitle }) => {
  return (
    <a href={src} download={downloadTitle}>
      <button>
        Download {title} <DownloadIcon className="downloadIcon" />
      </button>
    </a>
  );
};
