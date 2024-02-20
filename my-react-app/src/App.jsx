import './App.css'
import { TimeServiceClient } from './jsclient/time/v1/time_service_grpc_web_pb';
import { GetCurrentTimeRequest } from './jsclient/time/v1/time_service_pb';

function App() {
  let time 
  const handleClick = () => {
    const client = new TimeServiceClient("http://localhost:8080", null, null);
      const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});
      enableDevTools([
        client,
      ]);

      client.getCurrentTime(new GetCurrentTimeRequest(), {}, (err, response) => {
        time = response.getCurrentTime();
      });
  }
console.log(time)
  return (
    <>
      <div>
      <input type="button" className="button" value="Refresh Time" onClick={handleClick}/>
      </div>
    </>
  )
}

export default App
