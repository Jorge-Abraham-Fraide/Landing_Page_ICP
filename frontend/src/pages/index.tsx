import { AuthButton, useRestActor } from "@bundly/ares-react";
import WebSite from "./WebSite";

export default function IcConnectPage() {
    const backend = useRestActor("backend");

    async function testFunction() {
        try {
            const response = await backend.post("/test", { hello: "world" }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            console.log({ response });
        } catch (error) {
            console.error({ error });
        }
    }

    async function whoAmI() {
        try {
            const response = await backend.get("/whoami");

            console.log(response);
        } catch (error) {
            console.error({ error });
        }
    }

    return (
        <div>
            <WebSite />
        </div>
    );
}
