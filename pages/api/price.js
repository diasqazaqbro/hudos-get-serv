import { mongooseConnect } from "@/lib/mongoose";
import { Price } from "@/models/Price";

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

    res.json(await Price.find());
  }

  if (method === "PUT") {
    const {
      oneTitle,
      oneSupTitle,
      oneDesc,
      twoTitle,
      twoSupTitle,
      twoDesc,
      threeTitle,
      threeSupTitle,
      threeDesc,
      fourTitle,
      fourSupTitle,
      fourDesc,
    } = req.body;
    await Price.updateOne({
      oneTitle,
      oneSupTitle,
      oneDesc,
      twoTitle,
      twoSupTitle,
      twoDesc,
      threeTitle,
      threeSupTitle,
      threeDesc,
      fourTitle,
      fourSupTitle,
      fourDesc,
    });
    res.json(true);
  }
}
