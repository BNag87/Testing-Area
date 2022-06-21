import React from "react";
import { TopBar } from "../../styles";
import { Sidebar } from "./C-Sidebar";

export const PageTopbar = () => {
    return(
        <>
        <TopBar>
            <Sidebar/>            
        </TopBar>
        </>
    )
}