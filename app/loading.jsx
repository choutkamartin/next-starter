import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = () => {
  return <FontAwesomeIcon icon={faSpinner} spin size="5x" />;
};

export default Loading;
