# Hyper Example App

This is an example Hyper app, built with Next.js.

It shows:

- how to receive the ID of an account after app installation is completed
- how to use the API to update an account's metadata


## Run this example

1. Create a new app in the [developers console](https://hyper.co/developers)

2. Set the Redirect URL to `http://localhost:3000/callback`

3. Set the environment variables:

```
cp .env.local.example .env.local
```

Set the `CLIENT_ID` and `CLIENT_SECRET` accordingly to the values you see in the integration console if you edit your integration.

4. Install all dependencies

```
npm install
```

5. Start the app

```
npm run dev
```

6. Add it to a project

Now your example app is running on `http://localhost:3000`. Click on "View in Marketplace" to see your integration with all details like others will see it. You're now able to install your app on an account. Once you click "install" you see a popup that will use the defined Redirect URL `http://localhost:3000/callback`. The app is now installed.



## How this integration works

1. The user clicks "add" and selects the scope
2. The user sees the callback popup with your defined Redirect URL
3. The Redirect URL will be called with query parameters that we can use:
   - `code`: The authorization code to receive an `access_token` in order to interact with the API
   - `account`: The ID of the account
4. Once the user sees the page `/setup` we exchange the provided `code` for an `access_token`. See the docs for [exchanging code for an access token](https://vercel.com/docs/integrations#using-the-vercel-api/getting-an-access-token/exchanging-the-code-for-an-access-token)
5. After the `code` was exchanged, we can use the `access_token` for our calls to the Hyper API. See the docs for [available endpoints](https://vercel.com/docs/api#endpoints). In this case we're querying the [Projects endpoint](https://vercel.com/docs/api#endpoints/projects/get-projects) to get a list of all projects for the user or the team
6. The user sees a list of projects. This would be the step to provide additional information and allow the user to link projects to your own resources.
7. The user clicks on "Redirect me back to Hyper" to close the popup and complete the installation on Hyper. In your real app, this should be done automatically after you collected all information you need, to save the user some clicks.



## Credits

This documentation was largely copied from Vercel's [Example Integration](https://github.com/vercel/example-integration).
