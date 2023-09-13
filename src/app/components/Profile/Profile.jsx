export const Profile = () => {
    return (
        <div className="profile-background" id="profile-background">
            <div className="profile-container" id="profile-container">
                <div className="profile">
                <img src="../img/{{user.avatar}}" />
                <h1>
                    Franco Legnazzi
                </h1>
                <hr />
                <div className="profile-info">
                    <h3>
                        Email: francolegnazzi@hotmail.com
                    </h3>
                    <h3>
                        Tel: 1134893278
                    </h3>
                    <h3>
                        Dirección: Bolivar, Villa Ballester
                    </h3>
                    <h3>
                        Edad: 28 años
                    </h3>
                </div>
                    <a className="orders-link" href="../orders">
                        Mis ordenes de compra
                    </a>
                    <hr className="hr-bottom" />
                    <a className="btn-logout" id="btn-logout">
                        Cerrar sesión
                    </a>
                </div>
            </div>
        </div>
    )
}
