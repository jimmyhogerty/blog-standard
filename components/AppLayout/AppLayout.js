export const AppLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-[300px_1fr] h-screen max-h-screen">
      <div className="bg-pink-500">This is the app layout</div>
      <div className="bg-yellow-500">{children}</div>
    </div>
  );
};
