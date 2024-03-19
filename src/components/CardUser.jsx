const CardUser = ({ user, deleteUser, path, setUserEdit }) => {
  const handleDelete = () => {
    deleteUser(path, user.id);
  };

  const handleEditUser = () => {
    setUserEdit(user);
  };

  return (
    <article>
      <h2>
        {user?.first_name} {user?.last_name}
      </h2>
      <ul>
        <li>
          <span>CORREO</span>
          <span>{user?.email}</span>
        </li>
        <li>
          <span>CUMPLEAÑOS</span>
          <span>{user?.birthday}</span>
        </li>
        <button onClick={handleDelete}>DELETE</button>
        <button onClick={handleEditUser}>EDIT</button>
      </ul>
    </article>
  );
};

export default CardUser;
