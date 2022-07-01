import { post } from "../../../services/ApiRequest";

export function useSignup() { 
          const signup = async (data) => {
                    await post("/signup", data).then(resp => {
                              //return resp;
                              console.log(resp);
                    }).catch(err => {
                              console.log(err);
                    });
          }
          return{signup}
 }