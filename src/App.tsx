import { useEffect } from "react";
import { Button } from "./components/button";
import "./styles/CSS/styles.css";
import axios from "axios";
import useClockStore from "./appStore";
import Clock from "./components/clock";
import Quote from "./components/quote";
import MoreInfo from "./components/moreInfo";

const { REACT_APP_IP_BASE } = process.env;

function App() {
    const show = useClockStore((state: any) => state.show);
    const morning = useClockStore((state: any) => state.morning);
    const time = useClockStore((state: any) => state.time);
    const updateMorning = useClockStore((state: any) => state.updateMorning);
    const updateShow = useClockStore((state: any) => state.updateShow);
    const updateTime = useClockStore((state: any) => state.updateTime);
    const updateLocation = useClockStore((state: any) => state.updateLocation);
    const updateTimeZoneAbbv = useClockStore(
        (state: any) => state.updateTimeZoneAbbv
    );
    const updateDayOfWeek = useClockStore(
        (state: any) => state.updateDayOfWeek
    );
    const updateDayOfYear = useClockStore(
        (state: any) => state.updateDayOfYear
    );
    const updateTimeZone = useClockStore((state: any) => state.updateTimeZone);
    const updateWeekNumber = useClockStore(
        (state: any) => state.updateWeekNumber
    );

    function getVH() {
        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        let vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty("--vh", `${vh}px`);

        // We listen to the resize event
        window.addEventListener("resize", () => {
            // We execute the same script as before
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        });
    }

    function handleButton() {
        updateShow(!show);
    }

    function getTOD() {
        let newTime: any = String(time).slice(0, 2);
        newTime = Number(newTime || "");
        if (newTime < 12) {
            updateMorning(true);
        } else {
            updateMorning(false);
        }
    }
    async function getTime() {
        try {
            const res = await axios.get("https://worldtimeapi.org/api/ip");
            let currentTime = res.data.datetime;
            currentTime = currentTime.substring(11, 16);
            updateTime(currentTime);
            updateTimeZoneAbbv(res.data.abbreviation);
            updateTimeZone(res.data.timezone);
            updateDayOfWeek(res.data.day_of_week);
            updateDayOfYear(res.data.day_of_year);
            updateWeekNumber(res.data.week_number);
            getTOD();
        } catch (error) {
            console.error(error);
        }
    }

    async function getLocation() {
        try {
            const res = await axios.get(
                `https://api.ipbase.com/v2/info?apikey=9RZHrZjEYxQTnZMTjTVsY0S1zU806bpzW8r1CZ8n`
            );
            updateLocation(
                res.data.data.location.city.name +
                    ", " +
                    res.data.data.location.country.alpha2
            );
            console.log(res.data.data.location.city.name);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getVH();
        getTime();
        getLocation();
        setInterval(() => {
            getTime();
        }, 5000);
    }, []);

    return (
        <div className="App">
            <main className={morning === true ? "main day" : "main night"}>
                <div
                    className={
                        show === true ? "main__top hideQuote" : "main__top"
                    }
                >
                    <Quote />
                </div>
                <div
                    className={
                        show === true
                            ? "main__bottom showOverlay"
                            : "main__bottom"
                    }
                >
                    <div
                        className={
                            show === true
                                ? "main__bottom--top showOverlay"
                                : "main__bottom--top"
                        }
                    >
                        <Clock />
                        <Button onClick={handleButton} />
                    </div>
                    <MoreInfo />
                </div>
            </main>
        </div>
    );
}

export default App;
