import css from "./Contact.module.css";
import { IoPersonCircleSharp } from "react-icons/io5";

export const Contact = ({ item: { name, number, id }, onDelete }) => {
  return (
    <div className={css.contactsList}>
      <div className={css.contact}>
        <IoPersonCircleSharp />
        {name}
      </div>

      <div className={css.contactCard}>
        <p>{number}</p>
        <button className={css.delContactBtn} onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
