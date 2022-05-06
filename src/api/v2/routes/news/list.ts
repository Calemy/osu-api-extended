import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (obj: {
    limit?: number,
    year?: number,
    cursorPublished?: string,
    cursorId?: number
  }): Promise<{
    cursor: {
      published_at: string;
      id: number;
    };
    news_posts: {
      id: number;
      author: string;
      edit_url: string;
      first_image: string;
      published_at: string;
      updated_at: string;
      slug: string;
      title: string;
      preview: string;
    }[];
    news_sidebar: {
      current_year: number;
      news_posts: {
        id: number;
        author: string;
        edit_url: string;
        first_image: string;
        published_at: string;
        updated_at: string;
        slug: string;
        title: string;
      }[];
      years: number[];
    };
    search: {
      limit: number;
      sort: string;
      year: string;
    };
  }>;
};


const name: types = async (obj) => {
  const data = await request(`news`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;