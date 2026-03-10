import { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Sensor = () => {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://192.168.31.27:8080/rasps");
        setSensorData(res.data);
      } catch (error) {
        console.error("Error fetching sensor data:", error);
      }
    };

    fetchData();
    //console.log(sensorData);

    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval); //뒷정리코드..
  }, []);

  if (sensorData.length === 0) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "80px" }}>
        아직 측정된 데이터가 존재하지 않습니다.💦
      </h1>
    );
  }

  const chartData = sensorData.slice(-30).map((i) => i);

  const averagePower =
    sensorData.reduce((acc, item) => acc + item.power, 0) / sensorData.length;
  console.log("평균 전력:", averagePower);

  const cgavigy = averagePower * 0.0005; // 탄소배출량 계산 (예시: 1W당 0.0005kg CO2)
  console.log("탄소배출량:", cgavigy);

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: 20 }}>
      <h1
        style={{ textAlign: "center", color: "yellowgreen", marginBottom: 30 }}
      >
        IoT 전력 모니터링 하기
      </h1>

      <div
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          padding: 20,
          marginBottom: 30,
          border: "2px solid forestgreen",
          outline: "none",
        }}
      >
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" /> {/*간격지정용*/}
            <Line
              dataKey="voltage"
              stroke="red"
              type="monotone"
              name="전압(V)"
              dot={false}
              activeDot={{ r: 8 }}
            />
            <Line
              dataKey="current"
              stroke="orange"
              type="monotone"
              name="전류(A)"
              dot={false}
            />
            <Line
              dataKey="power"
              stroke="cyan"
              type="monotone"
              name="전력(W)"
              dot={false}
            />
            <Line
              dataKey="frequency"
              stroke="green"
              type="monotone"
              name="주파수(Hz)"
              dot={false}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "lightyellow", border: "none" }}
              itemStyle={{ color: "black" }}
            />
            <Legend verticalAlign="top" height={36} />
            <Line
              dataKey="power_factor"
              stroke="blue"
              type="monotone"
              name="역률"
              dot={false}
            />
            <XAxis
              dataKey="timeStamp"
              tickFormatter={(value) => {
                const date = new Date(value);
                return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
              }}
            />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: 10,
            borderRadius: 5,
            border: "2px solid forestgreen",
            outline: "none",
            width: "48%",
            textAlign: "center",
          }}
        >
          <p style={{ fontWeight: 600 }}>평균 전력</p>
          <p>{averagePower.toFixed(2)} W</p>
        </div>
        <div
          style={{
            backgroundColor: "white",
            padding: 10,
            borderRadius: 5,
            border: "2px solid forestgreen",
            outline: "none",
            width: "48%",
            height: "max-content",
            textAlign: "center",
          }}
        >
          <p style={{ fontWeight: 600 }}>탄소배출량</p>
          <p>{cgavigy.toFixed(2)} kg</p>
        </div>
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "14px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "forestgreen" }}>
            {[
              "전압(VO)",
              "전류(A)",
              "전력(W)",
              "에너지",
              "주파수(Hz)",
              "역률",
              "시간",
            ].map((h) => {
              return (
                <th
                  key={h}
                  style={{
                    padding: "10px 12px",
                    textAlign: "left",
                    color: "white",
                    borderBoottom: "2px solid yellowgreen",
                  }}
                >
                  {h}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {sensorData.slice(0, 15).map((item, index) => {
            //slice로 자르는 방법은 권장X. SQL에서 해결하고 오시오
            return (
              <tr
                key={index}
                style={{
                  borderBottom: "1px solid yellowgreen",
                }}
              >
                <td style={{ color: "black", padding: "8px 12px" }}>
                  {item.voltage}
                </td>
                <td style={{ color: "black", padding: "8px 12px" }}>
                  {item.current}
                </td>
                <td style={{ color: "black", padding: "8px 12px" }}>
                  {item.power}
                </td>
                <td style={{ color: "black", padding: "8px 12px" }}>
                  {item.energy}
                </td>
                <td style={{ color: "black", padding: "8px 12px" }}>
                  {item.frequency}
                </td>
                <td style={{ color: "black", padding: "8px 12px" }}>
                  {item.powerFactor}
                </td>
                <td style={{ color: "black", padding: "8px 12px" }}>
                  {item.timeStamp}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Sensor;
