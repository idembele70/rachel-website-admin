import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethod";

export default function Home() {
  const [userData, setUserData] = useState([])
  const MONTHS = useMemo(() => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Agu", "Sep", "Oct", "Nov", "Dec"]
    , [])
  useEffect(() => {
    (async () => {
      try {
        const { data } = await userRequest.get("/users/stats")

        data.sort((a, b) => a.year - b.year).map(
          item => setUserData(
            prev => [...prev, { name: MONTHS[item._id - 1], "Active User": item.total }]
          )
        )
      } catch (error) {
      }
    })()
  }, [MONTHS])
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
