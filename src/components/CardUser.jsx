import "../styles/CardUsers.css";

const CardUser = ({ user, deleteUser, path, setUserEdit }) => {
  const handleDelete = () => {
    deleteUser(path, user.id);
  };

  const handleEditUser = () => {
    setUserEdit(user);
  };

  return (
    <article className="card">
      <h2 className="card__title">
        {user?.first_name} {user?.last_name}
      </h2>
      <ul className="card__ul">
        <li className="card__li">
          <span className="card__label">CORREO</span>
          <span className="card__value">{user?.email}</span>
        </li>
        <li>
          <span className="card__label">CUMPLEAÑOS</span>
          <span className="card__value">{user?.birthday}</span>
        </li>
      
        <button className="card__btn" onClick={handleDelete}> <img className="card__btn__img" src="./delete.png" alt="" /></button>
        <button className="card__btn" onClick={handleEditUser}><img className="card__btn__img" src="./edit.png" alt="" /></button>
      </ul>
    </article>
  );
};

export default CardUser;
