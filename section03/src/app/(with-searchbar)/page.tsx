import ClientComponent from "./client-component";
import ServerComponent from "./server-component";

export default function Home() {
  return (
    <div>
      index page
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
