import useClockStore from "../appStore";
import arrowUp from "../assets/desktop/icon-arrow-up.svg";
import arrowDown from "../assets/desktop/icon-arrow-down.svg";

interface Props {
    text?: React.ReactNode;
    onClick: () => void;
}
export const Button: React.FC<Props> = ({ text, onClick }) => {
    const show = useClockStore((state: any) => state.show);

    return (
        <button className="button" onClick={onClick}>
            <span className="button__text">{show ? "less" : "more"}</span>
            <img src={show ? arrowUp : arrowDown} alt="arrow" />
        </button>
    );
};
