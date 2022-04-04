import React, { useEffect, useRef, useState } from "react";
import Events from "../../Events/Events.js";
import Tickets from "../../Tickets/Tickets.js";
import Guestcode from "../../Guestcode/Guestcode.js";
import Footer from "../../Footer/Footer.js";
import TicketLook from "../TicketLook/TicketLook.js";

function HomeView() {
  const [buyTickets, setBuyTickets] = useState(false);

  console.log(buyTickets);

  return (
    <div>
      <Events buyTickets={buyTickets} setBuyTickets={setBuyTickets} />
      <Tickets buyTickets={buyTickets} setBuyTickets={setBuyTickets} />
      <Guestcode />
      <Footer />
      {/* <TicketLook /> */}
    </div>
  );
}

export default HomeView;
