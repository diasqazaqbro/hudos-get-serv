import { mongooseConnect } from "@/lib/mongoose";
import { Partners } from "@/models/Partners";

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

    res.json(await Partners.find());
  }

  if (method === "PUT") {
    const { accent, title, desc } = req.body;
    await Partners.updateOne({
      accent,
      title,
      desc,
    });
    res.json(true);
  }
}
