import "./Sidebar.css";
import { useContext, useEffect } from "react";
import { MyContext } from "./MyContext.jsx";
import { v1 as uuidv1 } from "uuid";
import logo from "./assets/blacklogo.png";


function Sidebar() {

    const {
        allThreads,
        setAllThreads,
        currThreadId,
        setNewChat,
        setPrompt,
        setReply,
        setCurrThreadId,
        setPrevChats
    } = useContext(MyContext);



    const getAllThreads = async () => {

        try {

            const response = await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/api/thread`
            );

            const res = await response.json();


            const filteredData = res.map(thread => ({
                threadId: thread.threadId,
                title: thread.title
            }));


            setAllThreads(filteredData);


        } catch (err) {

            console.log("Thread fetch error:", err);

        }

    };




    useEffect(() => {

        getAllThreads();

    }, [currThreadId]);






    const createNewChat = () => {

        setNewChat(true);
        setPrompt("");
        setReply(null);
        setCurrThreadId(uuidv1());
        setPrevChats([]);

    };






    const changeThread = async (newThreadId) => {

        setCurrThreadId(newThreadId);


        try {

            const response = await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/api/thread/${newThreadId}`
            );


            const res = await response.json();


            setPrevChats(res);
            setNewChat(false);
            setReply(null);


        } catch (err) {

            console.log("Change thread error:", err);

        }

    };







    const deleteThread = async (threadId) => {


        try {


            await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/api/thread/${threadId}`,
                {
                    method: "DELETE"
                }
            );



            setAllThreads(prev =>
                prev.filter(
                    thread => thread.threadId !== threadId
                )
            );



            if (threadId === currThreadId) {

                createNewChat();

            }



        } catch (err) {

            console.log("Delete thread error:", err);

        }

    };







    return (

        <section className="sidebar">


            <button onClick={createNewChat}>


                <img
                    src={logo}
                    alt="ChatNova logo"
                    className="logo"
                />


                <span>
                    <i className="fa-solid fa-pen-to-square"></i>
                </span>


            </button>





            <ul className="history">


                {
                    allThreads?.map((thread) => (

                        <li
                            key={thread.threadId}

                            onClick={() =>
                                changeThread(thread.threadId)
                            }


                            className={
                                thread.threadId === currThreadId
                                    ? "highlighted"
                                    : ""
                            }

                        >


                            {thread.title}



                            <i
                                className="fa-solid fa-trash"


                                onClick={(e) => {

                                    e.stopPropagation();

                                    deleteThread(
                                        thread.threadId
                                    );

                                }}

                            ></i>



                        </li>

                    ))
                }


            </ul>





            <div className="sign">

                <p>
                    By ChatNova &hearts;
                </p>

            </div>



        </section>

    );

}


export default Sidebar;