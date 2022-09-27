import useClockStore from "../appStore";

export default function MoreInfo() {
    const morning = useClockStore((state: any) => state.morning);
    const timeZone = useClockStore((state: any) => state.timeZone);
    const dayOfYear = useClockStore((state: any) => state.dayOfYear);
    const dayOfWeek = useClockStore((state: any) => state.dayOfWeek);
    const weekNumber = useClockStore((state: any) => state.weekNumber);

    return (
        <div className={morning === true ? "moreInfo day" : "moreInfo night"}>
            <div className="moreInfo__left">
                <div className="moreInfo__left--timeZone">
                    <h6>Current Timezone</h6>
                    <h2>{timeZone}</h2>
                </div>
                <div className="moreInfo__left--dayOfYear">
                    <h6>Day of the Year</h6>
                    <h2>{dayOfYear}</h2>
                </div>
            </div>
            <hr />
            <div className="moreInfo__right">
                <div className="moreInfo__right--dayOfWeek">
                    <h6>Day of the Week</h6>
                    <h2>{dayOfWeek}</h2>
                </div>
                <div className="moreInfo__right--weekNumber">
                    <h6>Week Number</h6>
                    <h2>{weekNumber}</h2>
                </div>
            </div>
        </div>
    );
}
