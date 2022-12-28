import { Database } from "fakebase";

const db = new Database("./data/");

export const Project = db.table("projects");
export const Consultant = db.table("consultants");
