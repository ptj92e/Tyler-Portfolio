import React from "react";
import Welcome from "../components/Welcome/Welcome";
import PersonalStatement from "../components/PersonalStatement/PersonalStatement";

function Home() {
    return(
        <div>
            <Welcome />
            <PersonalStatement />
        </div>
    )
}

export default Home;