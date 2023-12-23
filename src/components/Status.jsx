import { Card } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Status = () => {
    const [data, setData] = useState(null);
    const [backlogTickets, setBacklogTickets] = useState(null);
    const [todo, settodo] = useState(null);
    const [inpogress, setInpogress] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers");
                const result = response.data;
                setData(result);
                console.log(result)

                // Filter tickets with status "Backlog"
                const backlogTickets = result.tickets.filter(ticket => ticket.status === 'Backlog');
                setBacklogTickets(backlogTickets);
                // Filter tickets with status "Todo"
                const Todo = result.tickets.filter(ticket => ticket.status === 'Todo');
                settodo(Todo);
                const Inpogress = result.tickets.filter(ticket => ticket.status === 'In progress')
                setInpogress(Inpogress)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <div>
                <h1>Status</h1>

                {data ? (
                    <div style={{ display: "flex", gap: "20px", flexDirection: "row" }}>


                        {backlogTickets && (
                            <div>
                                <h3>Backlog {backlogTickets.length} </h3>
                                <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
                                    {backlogTickets.map((backlogTicket) => (
                                        <Card key={backlogTicket.id} sx={{ width: "250px", padding: "10px" }}>
                                            <h4>{backlogTicket.id}</h4>
                                            <h4 style={{ width: "200px" }}>{backlogTicket.title}</h4>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}
                        {todo && (
                            <div>
                                <h3>Todo{todo.length}</h3>
                                <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
                                    {todo.map((tododata) => (
                                        <Card key={tododata.key} sx={{ width: "250px", padding: "10px" }}>
                                            <h4>{tododata.id}</h4>
                                            <h4 style={{ width: "200px" }}>{tododata.title}</h4>
                                        </Card>
                                    ))}
                                </div>
                            </div>

                        )}

                        {inpogress && (
                            <div>
                                <h3>Inpogress{inpogress.length}</h3>
                                <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
                                    {inpogress.map((tododata) => (
                                        <Card key={tododata.key} sx={{ width: "250px", padding: "10px" }}>
                                            <h4>{tododata.id}</h4>
                                            <h4>{tododata.title}</h4>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div><h4>Done 0</h4></div>
                        <div><h4>Cancelled 0</h4></div>
                    </div>
                ) : (
                    <p>Loading data...</p>
                )}
            </div>
        </div>
    )
}
export default Status