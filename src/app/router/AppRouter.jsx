import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { SessionPage, HomePage, ServicesPage, ContactPage, CartPage, ProfilePage, BookingsPage, TimetablePage, TrainingPage, TournamentsPage } from "../pages";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectToken, selectTokenExpiresAt } from "../../store/slices/token";
import { useEffect } from "react";

export const AppRouter = () => {
  
  const dispatch = useDispatch();
  const location = useLocation();
  const redirectPath = new URLSearchParams(location.search).get('redirect');

  const token = useSelector(selectToken);
  const tokenExpiresAt = useSelector(selectTokenExpiresAt);
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


  return (
    <Routes>
    
      {/* Private Routes */}
      <Route
        path="/perfil"
        element={ isAuthenticated ? <ProfilePage /> : <Navigate to="/session" /> }
      />

      <Route
        path="/carro"
        element={ isAuthenticated ? <CartPage /> : <Navigate to="/session" /> }
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

      <Route path="/servicios/reservas" element={ <BookingsPage /> } />

      <Route path="/servicios/reservas/horarios" element={ <TimetablePage /> } />

      <Route path="/servicios/escuelita" element={ <TrainingPage /> } />

      <Route path="/servicios/torneos" element={ <TournamentsPage /> } />

      {/* <Route path="/*" element={ <Navigate to="/" /> } /> */}

    </Routes>
  )
}