import { Fragment } from "react"
import { Link } from "react-router-dom"
import { useState } from "react";

function HomePage(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return(
      <div>
        this is home page
      </div>
    )
}

export default HomePage