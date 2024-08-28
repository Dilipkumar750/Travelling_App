import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Route, Routes } from 'react-router-dom';
import BusBookHome from './Components/BusBooking/BusBookHome';
import BusDetails from './Components/BusBooking/BusDetails';
import BusPayment from './Components/BusBooking/BusPayment';
import BusSeats from './Components/BusBooking/BusSeats';
import BusTicket from './Components/BusBooking/BusTicket';
import BusViewTicket from './Components/BusBooking/BusViewTicket';
import FlightBookHome from './Components/Flight_Booking/FlightBookHome';
import FlightBusiness from './Components/Flight_Booking/FlightBusiness';
import FlightTicket from './Components/Flight_Booking/FlightTicket';
import FlightDetails from './Components/Flight_Booking/FlightDetails';
import FlightEconomy from './Components/Flight_Booking/FlightEconomy';
import FlightPayment from './Components/Flight_Booking/Payment';
import FlightViewTicket from './Components/Flight_Booking/FlightViewTicket';
import HotelBookHome from './Components/HotelBooking/HotelBookHome';
import HotelDeatils from './Components/HotelBooking/HotelDeatils';
import HotelPayment from './Components/HotelBooking/HotelPayment';
import HotelRooms from './Components/HotelBooking/HotelRooms';
import HotelViewTicket from './Components/HotelBooking/HotelViewTicket';
import Payment from './Components/HotelBooking/Payment';
import RoomsAvailability from './Components/HotelBooking/RoomsAvailability';
import TrackTrain from './Components/TrainBooking/TrackTrain';
import TrainBookHome from './Components/TrainBooking/TrainBookHome';
import TrainDate from './Components/TrainBooking/TrainDate';
import TrainDetails from './Components/TrainBooking/TrainDetails';
import TrainPayment from './Components/TrainBooking/TrainPayment';
import TrainSeat from './Components/TrainBooking/TrainSeat';
import TrainTicket from './Components/TrainBooking/TrainTicket';
import TrainUpdate from './Components/TrainBooking/TrainUpdate';
import TrainViewTicket from './Components/TrainBooking/TrainViewTicket';
import Plan from './Components/Home/Plan';
import Travel from './Components/Home/Travel';
import Welcome from './Components/Home/Welcome';
import BookTickets from './Pages/Admin/BookTickets';
import Explore from './Pages/Admin/Explore';
import HomePage from './Pages/Admin/HomePage';
import Travels from './Pages/Admin/Travels';
import AddExplore from './Pages/User/AddExplore';
import UserHomePage from './Pages/User/UserHomepage';
import Services from './Pages/User/Services';
import Login from './Pages/Login';
import Notifications from './Pages/Notifications';
import Profile from './Pages/Profile';
import Settings from './Pages/Settings';
import SideBar from './Pages/SideBar';
import Signup from './Pages/Signup';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import PendingRequests from './Pages/Admin/PendingRequests';
import Done from './Components/Done';
import AddAccomadation from './Pages/User/AddAccomadation';
import 'swiper/css';
import FlightList from './Components/Flight_Booking/FlightList';
import TrainList from './Components/TrainBooking/TrainList';

 
function App(){
  return (
    <>
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/BusBookHome' element={<BusBookHome/>}/>
      <Route path='/BusDetails' element={<BusDetails/>}/>
      <Route path='/BusPayment' element={<BusPayment/>}/>
      <Route path='/BusSeats' element={<BusSeats/>}/>
      <Route path='/BusTicket' element={<BusTicket/>}/>
      <Route path='/BusViewTicket' element={<BusViewTicket/>}/>
      <Route path='/FlightBookHome' element={<FlightBookHome/>}/>
      <Route path='/FlightList' element={<FlightList/>}/>
      <Route path='/FlightBusiness' element={<FlightBusiness/>}/>
      <Route path='/FlightTicket' element={<FlightTicket/>}/>
      <Route path='/FlightDetails' element={<FlightDetails/>}/>
      <Route path='/FlightEconomy' element={<FlightEconomy/>}/>
      <Route path='/FlightPayment' element={<FlightPayment/>}/>
      <Route path='/FlightViewTicket' element={<FlightViewTicket/>}/>
      <Route path='/HotelBookHome' element={<HotelBookHome/>}/>
      <Route path='/HotelDeatils' element={<HotelDeatils/>}/>
      <Route path='/HotelPayment' element={<HotelPayment/>}/>
      <Route path='/HotelRooms' element={<HotelRooms/>}/>
      <Route path='/HotelViewTicket' element={<HotelViewTicket/>}/>
      <Route path='/Payment' element={<Payment/>}/>
      <Route path='/RoomsAvailability' element={<RoomsAvailability/>}/>
      <Route path='/TrackTrain' element={<TrackTrain/>}/>
      <Route path='/TrainList' element={<TrainList/>}/>
      <Route path='/TrainBookHome' element={<TrainBookHome/>}/>
      <Route path='/TrainDate' element={<TrainDate/>}/>
      <Route path='/TrainDetails' element={<TrainDetails/>}/>
      <Route path='/TrainPayment' element={<TrainPayment/>}/>
      <Route path='/TrainSeat' element={<TrainSeat/>}/>
      <Route path='/TrainTicket' element={<TrainTicket/>}/>
      <Route path='/TrainUpdate' element={<TrainUpdate/>}/>
      <Route path='/TrainViewTicket' element={<TrainViewTicket/>}/>
      <Route path='/Plan' element={<Plan/>}/>
      <Route path='/Travel' element={<Travel/>}/>
      <Route path='/BookTickets' element={<BookTickets/>}/>
      <Route path='/Explore' element={<Explore/>}/>
      <Route path='/HomePage' element={<HomePage/>}/>
      <Route path='/Travels' element={<Travels/>}/>
      <Route path='/AddExplore' element={<AddExplore/>}/>
      <Route path='/UserHomePage' element={<UserHomePage/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Notifications' element={<Notifications/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/Settings' element={<Settings/>}/>
      <Route path='/SideBar' element={<SideBar/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Header' element={<Header/>}/>
      <Route path='/Footer' element={<Footer/>}/>
      <Route path='/PendingRequests' element={<PendingRequests/>}/>
      <Route path='/Done' element={<Done/>}/>
      <Route path='/AddAccomadation' element={<AddAccomadation/>}/>
    </Routes>
    </>
  )
}

export default App