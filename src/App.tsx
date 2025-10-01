import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import Preview from "./pages/Preview";
import ReadingDetail from "./pages/ReadingDetail";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";
import { PageTransitionProvider } from "./contexts/PageTransitionContext";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div
        className={`transition-opacity duration-500 ease-in-out`}
      >
        <BrowserRouter>
          <PageTransitionProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/preview" element={<Preview />} />
              <Route path="/preview/:id" element={<ReadingDetail />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransitionProvider>
        </BrowserRouter>
      </div>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
    </QueryClientProvider>
  );
};

export default App;
