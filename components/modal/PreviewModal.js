import { useEffect, useState } from "react";
import { Modal } from "antd";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const PreviewModal = ({ showModal, setShowModal, preview }) => {
  const [isLink, setIsLink] = useState(false);
  useEffect(() => {
    setIsLink(false);
    setTimeout(() => setIsLink(true), 1000);
  }, [showModal]);
  return (
    <>
      <Modal
        title="Course Preview"
        open={showModal}
        onCancel={() => setShowModal(!showModal)}
        widht={720}
        footer={null}
        destroyOnClose={true}
      >
        <div className="wrapper">
          <ReactPlayer
            url={isLink ? preview : "/"}
            playing={showModal}
            controls={true}
            width="100%"
            height="100%"
          />
        </div>
      </Modal>
    </>
  );
};

export default PreviewModal;
