import { useDispatch } from 'react-redux';
import { logout } from '../../../store/slices/session';
import './ProfilePage.css';
import { useNavigate } from 'react-router-dom';

export const ProfilePage = ({ user }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  }

  const editProfile = () => {
    console.log("Editar")
  }

  return (
    <div className="profile-container">
      <div className='logout-container'>
          <button className="logout-button" onClick= {handleLogout}>
            Cerrar sesión
          </button>
      </div>
      <h1 className='title-services'>Perfil</h1>
      <div className="line-container">
          <p className="line"></p>				
      </div>
      <div className='profile-content'>
        <h2>Mis datos</h2>
        <hr />
        <p className="profile-info">
          Nombre: <span className="profile-data">{user.first_name}</span>
        </p>
        <p className="profile-info">
          Apellido: <span className="profile-data">{user.last_name}</span>
        </p>
        <p className="profile-info">
          Edad: <span className="profile-data">{user.age}</span>
        </p>
        <p className="profile-info">
          Localidad: <span className="profile-data">{user.address}</span>
        </p>
        <p className="profile-info">
          Email: <span className="profile-data">{user.email}</span>
        </p>
        <p className="profile-info">
          Teléfono: <span className="profile-data">{user.phone}</span>
        </p>
        <div className='editProfile-container'>
          <button className="editProfile-button" onClick={editProfile}>
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};
