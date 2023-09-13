import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { SessionPage, HomePage, ServicesPage, ContactPage, CartPage, ProfilePage, ReservationPage, TimetablePage, TrainingPage, TournamentsPage } from "../pages";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectToken, selectTokenExpiresAt, selectUser } from "../../store/slices/session";
import { useEffect } from "react";

export const AppRouter = () => {
  
  const dispatch = useDispatch();
  const location = useLocation();
  const redirectPath = new URLSearchParams(location.search).get('redirect');

  const token = useSelector(selectToken);
  const tokenExpiresAt = useSelector(selectTokenExpiresAt);
  const user = useSelector(selectUser);
  const isAuthenticated = Date.now() < new Date(tokenExpiresAt).getTime();

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(logout());
    }
  }, [dispatch, isAuthenticated]);

  console.log("Token:", token);
  console.log("Token Expires At:", tokenExpiresAt);
  console.log("Current Time:", Date.now());
  console.log("Is Authenticated:", isAuthenticated);  
  console.log("Usuario:", user);

  return (
    <Routes>
      {/* Private Routes */}
      <Route
        path="/perfil"
        element={ isAuthenticated ? <ProfilePage user = { user } /> : <Navigate to="/session" /> }
      />

      <Route
        path="/carro"
        element={ isAuthenticated ? <CartPage token= { token } /> : <Navigate to="/session" /> }
      />


      {/* Public Routes */}
      <Route
        path="/session"
        element={ isAuthenticated & !redirectPath ? <Navigate to="/" /> 
          : isAuthenticated & redirectPath ? <Navigate to={ redirectPath } /> 
          : <SessionPage /> }
      />

      <Route path="/" element={ <HomePage /> } />

      <Route path="/servicios" element={ <ServicesPage /> } />

      <Route path="/contacto" element={ <ContactPage /> } />

      <Route path="/servicios/reservas" element={ <ReservationPage /> } />

      <Route path="/servicios/reservas/horarios" element={ <TimetablePage /> } />

      <Route path="/servicios/escuelita" element={ <TrainingPage /> } />

      <Route path="/servicios/torneos" element={ <TournamentsPage /> } />

      {/* <Route path="/*" element={ <Navigate to="/" /> } /> */}

    </Routes>
  )
}