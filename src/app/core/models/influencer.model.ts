export interface Influencer {
  _id: string;
  name: string;
  email: string;
  platforms: {
    twitter: {
      channel: string;
      subscribers: number;
      category: string;
    };
    instagram: {
      channel: string;
      subscribers: number;
      category: string;
    };
  };
}
