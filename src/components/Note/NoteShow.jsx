import React from "react";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

import Button from "../ui/Button";
import LinkAnchor from "../ui/LinkAnchor";

import styles from "./NoteShow.module.scss";

function NoteShow() {
  return (
    <div className={styles["note"]}>
      <h2 className={`heading-2 ${styles["note__title"]}`}>
        Note Title <span className={styles["note__access"]}>public</span>
      </h2>
      <p className={styles["note__author"]}>
        created by <em>Author</em> on <em>21-July-2024</em>
      </p>
      <div className={styles["note__tags"]}>
        <span className={styles["note__tag"]}>Hello</span>
        <span className={styles["note__tag"]}>world</span>
      </div>
      <div className={styles["note__dates"]}>
        <p className={styles["note__date"]}>
          Started At: <em>21-July-2024</em>
        </p>
        <p className={styles["note__date"]}>
          Completed At: <em>21-July-2024</em>
        </p>
      </div>
      <p className={styles["note__content"]}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit per ad blandit,
        sapien ac quam accumsan himenaeos libero est id vulputate. Orci torquent
        ante condimentum montes nascetur dignissim ridiculus in tristique, erat
        class penatibus commodo blandit quisque auctor vivamus facilisi, hac
        gravida vestibulum venenatis aenean fringilla phasellus duis. Tortor
        justo elementum quam quisque nullam porta montes sapien id risus ut,
        commodo curabitur fermentum nibh facilisis enim vel sagittis imperdiet
        quis, scelerisque conubia mattis nostra praesent diam viverra integer
        condimentum parturient. Fringilla molestie pulvinar primis et nec
        blandit convallis fermentum ligula, velit enim lobortis ultricies
        egestas leo non dignissim suscipit, eleifend aenean vehicula lectus
        proin sapien nisi himenaeos.
      </p>
      <div className={styles["note__btn-box"]}>
        <LinkAnchor to="/notebook/someId/note/someId/edit" variant="secondary">
          <FaRegEdit />
        </LinkAnchor>
        <Button variant="danger">
          <FaRegTrashAlt />
        </Button>
      </div>
      <LinkAnchor to="/notebook/someId/note">
        &larr; Back to Notebook 1
      </LinkAnchor>
    </div>
  );
}

export default NoteShow;
