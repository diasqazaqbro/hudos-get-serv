import { mongooseConnect } from "@/lib/mongoose";
import { Settings } from "@/models/Settings";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    res.setHeader("Access-Control-Allow-Origin", "https://hudos.kz"); // Specify your actual domain
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    res.json(await Settings.find());
  }

  if (method === "PUT") {
    const { number } = req.body;
    await Settings.updateOne({
      number,
    });
    res.json(true);
  }
}
