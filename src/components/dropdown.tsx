import { FaArrowDown } from "react-icons/fa";

export default function Dropdown ({name}){
    return(
        <div className="desktop dropdown">
            <p>{name}</p>
            <img src="/src/assets/images/icon-arrow-down.svg" alt="" />
        </div>
    )
}