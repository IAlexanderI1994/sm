import styles from "../../styles/Home.module.css";
import {Title} from "./elements";

interface IHeading {
    tag: string
    text: string
}

const Heading = ({tag, text}: IHeading) => {

    return (
        <Title>{text}</Title>
    )
}

export default Heading