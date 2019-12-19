export class PrimaryUtils {
  static isDevelopment(): boolean {
    if (process.env.NODE_ENV !== "production") {
      return true;
    }

    return false;
  }

  static get graphqlUrl(): string {
    if (PrimaryUtils.isDevelopment) {
      return "http://localhost:4000/graphql";
    }

    return "https://aria-backend.herokuapp.com/graphql";
  }
}
