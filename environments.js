import * as dotenv from "dotenv";

dotenv.config();

export const environments = {
  MNEMONIC: process.env.MNEMONIC,
  INFURA_API_URL: process.env.INFURA_API_URL,
};
