import { QueryClient, QueryClientProvider } from "react-query";
import Users from "./component/User/Users";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Users />
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </>
  );
}

export default App;
