import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./projectmodal.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  imgSrc: string;
  code: string;
  projectLink: string;
  tech: string[];
  modalContent: JSX.Element;
}

export const ProjectModal = ({
                               modalContent,
                               projectLink,
                               setIsOpen,
                               imgSrc,
                               isOpen,
                               title,
                               code,
                               tech,
                             }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const body = document.querySelector("body");
    if (isOpen) {
      body!.style.overflowY = "hidden";
    } else {
      body!.style.overflowY = "scroll";
    }

    return () => {
      setIsMounted(false);
    };
  }, [isOpen]);

  const content = (
      <div className={styles.modal} onClick={() => setIsOpen(false)}>
        <button className={styles.closeModalBtn}>
          <MdClose />
        </button>

        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className={styles.modalCard}
        >
          <Image
              priority
              src={imgSrc}
              alt={`An image of the ${title} project.`}
              width={500}
              height={400}
              className={styles.modalImage}
          />
          <div className={styles.modalContent}>
            <h4>{title}</h4>
            <div className={styles.modalTech}>{tech.join(" - ")}</div>

            <div className={styles.suppliedContent}>{modalContent}</div>

            <div className={styles.modalFooter}>
              <p className={styles.linksText}>
                Project Links<span>.</span>
              </p>
              <div className={styles.links}>
                <Link target="_blank" rel="nofollow" href={code}>
                  <AiFillGithub /> source code
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
  );

  if (!isOpen || !isMounted) return null;

  // @ts-ignore
    return ReactDOM.createPortal(content, document.getElementById("root"));
};
