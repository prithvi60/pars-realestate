import { TestMail } from "../../service/aws-ses";
export default async function checkUserAPI(request, response) {
  // Receivers mail can be pars mail
  const result = await TestMail("prithvin19@gmail.com");
  response.json(result);
}
