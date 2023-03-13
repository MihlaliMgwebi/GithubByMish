import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Users from "./component/User/Users";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Users />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
