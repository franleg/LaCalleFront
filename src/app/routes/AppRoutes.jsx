import { Routes, Route, Navigate } from "react-router-dom"
import { HomePage, ServicesPage, ContactPage, ProfilePage, BookingsPage, TimetablePage, TrainingPage, TournamentsPage, CartPage } from "../pages"

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <HomePage /> } />

        <Route path="/servicios" element={ <ServicesPage /> } />

        <Route path="/contacto" element={ <ContactPage /> } />

        <Route path="/perfil" element={ <ProfilePage /> } />

        <Route path="/carro" element={ <CartPage /> } />

        <Route path="/servicios/reservas" element={ <BookingsPage /> } />

        <Route path="/servicios/reservas/horarios" element={ <TimetablePage /> } />

        <Route path="/servicios/escuelita" element={ <TrainingPage /> } />

        <Route path="/servicios/torneos" element={ <TournamentsPage /> } />

        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
