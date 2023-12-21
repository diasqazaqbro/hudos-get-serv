import { mongooseConnect } from "@/lib/mongoose";
import { Faq } from "@/models/Faq";

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
    res.json(await Faq.find());
  }

  if (method === "PUT") {
    const {
      oneTitle,
      oneSupTitle,
      twoTitle,
      twoSupTitle,
      threeTitle,
      threeSupTitle,
    } = req.body;
    await Faq.updateOne({
      oneTitle,
      oneSupTitle,
      twoTitle,
      twoSupTitle,
      threeTitle,
      threeSupTitle,
    });
    res.json(true);
  }
}
