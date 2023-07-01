import "@styles/global.css";

export const metadata = {
  title: "Promptopia",
  description: "Descubra e compartilhe AI Prompts de comando",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
