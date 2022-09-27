import useClockStore from "../appStore";
import dayImg from "../assets/desktop/icon-sun.svg";
import nightImg from "../assets/desktop/icon-moon.svg";

export default function Clock() {
    const time = useClockStore((state: any) => state.time);
    const morning = useClockStore((state: any) => state.morning);
    const abbv = useClockStore((state: any) => state.timeZoneAbbv);
    const location = useClockStore((state: any) => state.location);

    return (
        <div className="clock">
            <div className="clock__top">
                <h4 className="clock__top--intro">
                    <img
                        src={morning === true ? dayImg : nightImg}
                        alt="icon"
                    />
                    good {morning === true ? "morning" : "evening"}, it's
                    currently
                </h4>
                <div className="clock__top--data">
                    <h1 className="clock__top--data-time">{time}</h1>
                    <span className="clock__top--data-abbv">{abbv}</span>
                </div>
            </div>

            <div className="clock__bottom">
                <h3>in {location}</h3>
            </div>
        </div>
    );
}
