import HomeMap from "../maps/home_map";


export async function validateLogin(t) {
    const homeMap = new HomeMap();

    console.log(await homeMap.mainTitle.exists);
    await t.expect(homeMap.mainTitle.exists)
        .ok('App logo not found, login might have failed', { timeout: 10000 });
}