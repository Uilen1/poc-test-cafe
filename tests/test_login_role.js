import { validateLogin } from "../controllers/login_controller";
import { standartUser } from "../utils/roles";

fixture('TESTANDO LOGIN UTILIZANDO ROLES')
    .beforeEach(async t => {
        await t.maximizeWindow();
    });

test('Logando com o usuario standard', async t => {
    await t.useRole(standartUser);
});