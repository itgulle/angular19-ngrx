import { Injectable } from "@angular/core";
import { Users } from "../model/moq.data";
import { resolve } from "path";

@Injectable({
  providedIn: "root"
})

export class UserService {
  async getUsers() {
    await sleep(1000);
    return Users;
  }
}

async function sleep(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
