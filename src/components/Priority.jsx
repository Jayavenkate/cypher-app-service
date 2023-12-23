// import { Card } from "@mui/material";
import { Card } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Priority = () => {
    const [data, setData] = useState(null);
    const [NoPriority, setNoPriority] = useState(null);
    const [Low, setLow] = useState(null);
    const [Medium, setMedium] = useState(null);
    const [High, setHigh] = useState(null);
    const [Urgent, setUrgent] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers");
                const result = response.data;
                setData(result);

                //
                const backlogTickets = result.tickets.filter(ticket => ticket.priority === 0);
                setNoPriority(backlogTickets);

                const Todo = result.tickets.filter(ticket => ticket.priority === 1);
                setLow(Todo);
                const Inpogress = result.tickets.filter(ticket => ticket.priority === 2)
                setMedium(Inpogress);
                const Shankar = result.tickets.filter(ticket => ticket.priority === 3)
                setHigh(Shankar);
                const Ramesh = result.tickets.filter(ticket => ticket.priority === 4)
                setUrgent(Ramesh)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <div>
                <h1>Priority</h1>
                {data ? (
                    <div style={{ display: "flex", gap: "50px", flexDirection: "row" }}>

                        {NoPriority && (
                            <div>
                                <h3> No Priority{NoPriority.length}</h3>
                                <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
                                    {NoPriority.map((backlogTicket) => (
                                        <Card key={backlogTicket.id} sx={{ width: "250px", padding: "10px" }}>
                                            <h4>{backlogTicket.id}</h4>
                                            <h4 style={{ width: "200px" }}>{backlogTicket.title}</h4>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}

                        {Low && (
                            <div>
                                <h3> Low{Low.length}</h3>
                                <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
                                    {Low.map((backlogTicket) => (
                                        <Card key={backlogTicket.id} sx={{ width: "250px", padding: "10px" }}>
                                            <h4>{backlogTicket.id}</h4>
                                            <h4 style={{ width: "200px" }}>{backlogTicket.title}</h4>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}
                        {Medium && (
                            <div>
                                <h3> Medium{Medium.length}</h3>
                                <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
                                    {Medium.map((backlogTicket) => (
                                        <Card key={backlogTicket.id} sx={{ width: "250px", padding: "10px" }}>
                                            <h4>{backlogTicket.id}</h4>
                                            <h4 style={{ width: "200px" }}>{backlogTicket.title}</h4>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}

                        {High && (
                            <div>
                                <h3> Shankar{High.length}</h3>
                                <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
                                    {High.map((backlogTicket) => (
                                        <Card key={backlogTicket.id} sx={{ width: "250px", padding: "10px" }}>
                                            <h4>{backlogTicket.id}</h4>
                                            <h4 style={{ width: "200px" }}>{backlogTicket.title}</h4>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}
                        {Urgent && (
                            <div>
                                <h3> Urgent{Urgent.length}</h3>
                                <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
                                    {Urgent.map((backlogTicket) => (
                                        <Card key={backlogTicket.id} sx={{ width: "250px", padding: "10px" }}>
                                            <h2>{backlogTicket.id}</h2>
                                            <h3 style={{ width: "200px" }}>{backlogTicket.title}</h3>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <p>Loading data...</p>
                )}

            </div>
        </div>
    )
}
export default Priority