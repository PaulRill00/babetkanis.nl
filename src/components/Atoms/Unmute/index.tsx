import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

interface IUnmuteProps {
  muted: boolean;
  setMuted: (muted: boolean) => void;
}

const Unmute: React.FC<IUnmuteProps> = ({ muted, setMuted }) => {
  return (
    <div className="unmute-btn" onClick={() => setMuted(!muted)}>
      <FontAwesomeIcon icon={muted ? faVolumeUp : faVolumeMute} />
    </div>
  );
};

export default React.memo(Unmute);
