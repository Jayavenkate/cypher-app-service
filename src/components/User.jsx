// import { Card } from "@mui/material";
import { Card } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const User = () => {
    const [data, setData] = useState(null);
    const [Anoop, setAnoop] = useState(null);
    const [Yogesh, setYogesh] = useState(null);
    const [Suresh, setSuresh] = useState(null);
    const [Shankar, setshankar] = useState(null);
    const [Ramesh, setRamesh] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers");
                const result = response.data;
                setData(result);
                console.log(result)
                const backlogTickets = result.tickets.filter(ticket => ticket.userId === 'usr-1');
                setAnoop(backlogTickets);

                const Todo = result.tickets.filter(ticket => ticket.userId === 'usr-2');
                setYogesh(Todo);
                const Inpogress = result.tickets.filter(ticket => ticket.userId === 'usr-5')
                setSuresh(Inpogress);
                const Shankar = result.tickets.filter(ticket => ticket.userId === 'usr-3')
                setshankar(Shankar);
                const Ramesh = result.tickets.filter(ticket => ticket.userId === 'usr-4')
                setRamesh(Ramesh)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <div>
                <h1>user</h1>
                {data ? (
                    <div style={{ display: "flex", gap: "50px", flexDirection: "row" }}>


                        {Anoop && (
                            <div>
                                <h3> Anoop sharma{Anoop.length}</h3>
                                <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
                                    {Anoop.map((backlogTicket) => (
                                        <Card key={backlogTicket.id} sx={{ width: "250px", padding: "10px" }}>
                                            <h4>{backlogTicket.id}</h4>
                                            <h4 style={{ width: "200px" }}>{backlogTicket.title}</h4>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}

                        {Yogesh && (
                            <div>
                                <h3> Yogesh{Yogesh.length}</h3>
                                <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
                                    {Yogesh.map((backlogTicket) => (
                                        <Card key={backlogTicket.id} sx={{ width: "250px", padding: "10px" }}>
                                            <h4>{backlogTicket.id}</h4>
                                            <h4 style={{ width: "200px" }}>{backlogTicket.title}</h4>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}
                        {Suresh && (
                            <div>
                                <h3> Suresh{Suresh.length}</h3>
                                <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
                                    {Suresh.map((backlogTicket) => (
                                        <Card key={backlogTicket.id} sx={{ width: "250px", padding: "10px" }}>
                                            <h4>{backlogTicket.id}</h4>
                                            <h4 style={{ width: "200px" }}>{backlogTicket.title}</h4>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}

                        {Shankar && (
                            <div>
                                <h3> Shankar{Shankar.length}</h3>
                                <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
                                    {Shankar.map((backlogTicket) => (
                                        <Card key={backlogTicket.id} sx={{ width: "250px", padding: "10px" }}>
                                            <h4>{backlogTicket.id}</h4>
                                            <h4 style={{ width: "200px" }}>{backlogTicket.title}</h4>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}
                        {Ramesh && (
                            <div>
                                <h3> Ramesh{Ramesh.length}</h3>
                                <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
                                    {Ramesh.map((backlogTicket) => (
                                        <Card key={backlogTicket.id} sx={{ width: "250px", padding: "10px" }}>
                                            <h4>{backlogTicket.id}</h4>
                                            <h4 style={{ width: "200px" }}>{backlogTicket.title}</h4>
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
export default User