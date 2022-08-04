import { Col } from "react-bootstrap";
import Image from "next/image";
import styles from '../styles/Home.module.css'
import Link from "next/link";

const ProjectCard = ({ title, description, imgUrl }) => {
  return (


    <>
      <div className={styles.proj_imgbx}>
      
        <Link href={'./projects/' + title} >
          <div className={styles.proj_imgbx_link}>
          <Image src={imgUrl} className={styles.proj_img} />
            <div className={styles.proj_txtx}>
              <h4>
                {title}
              </h4>
            </div>
          </div>
        </Link>
      </div>
    </>



  )
}

export default ProjectCard