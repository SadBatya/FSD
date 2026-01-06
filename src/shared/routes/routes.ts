export const ROUTES = {
  main: "/",
  community: "community",
  category: (category: string) => `/${category}`,
  article: (alias: string) => `/article/${alias}`,
  profile: {
    index: "profile",
    edit: "profile/edit",
  },
} as const;
