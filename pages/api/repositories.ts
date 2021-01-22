import { NextApiRequest, NextApiResponse } from "next";
import fetchRepositories from "./utils/fetch";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const promises = [];
    const { languages, since } = req.query as { [key: string]: string };
    const langs = languages.split(",");
    langs.forEach((language) => {
      promises.push(fetchRepositories({ language, since }));
    });
    const data = (await Promise.all(promises)).flat().sort((a, b) => {
      return b.currentPeriodStars - a.currentPeriodStars;
    });
    if (data && data.length > 0) {
      res.status(200);
      res.setHeader("Content-Type", "application/json");
      res.send(data.slice(0, 25));
      // return success(data.slice(0, 25));
    } else {
      res.status(200);
      res.setHeader("Content-Type", "application/json");
      res.send([]);
      // return success([]);
    }
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send(err);
    // error(err);
  }
};
