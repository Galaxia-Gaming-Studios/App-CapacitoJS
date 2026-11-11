
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router";

import AppLayout from "./layouts/AppLayout";
import ChatPage from "./pages/ChatPage";
import SettingsPage from "./pages/SettingsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/chat/1" replace />} />
          <Route path="chat/:chatId" element={<ChatPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}