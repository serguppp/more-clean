import { Button } from "@/components/button/button";
import { Navbar } from "@/components/button/navbar";
export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Button className="btn btn-primary">Elo</Button>
    </div>
  );
}
