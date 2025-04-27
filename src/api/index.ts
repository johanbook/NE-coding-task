const BASE_PATH = "https://www.googleapis.com/books/v1";

const request = async (url: string) => {
  const resp = await fetch(BASE_PATH + url);

  if (!resp.ok) {
    throw new Error(resp.statusText);
  }

  return await resp.json();
};

export interface IBook {
  id: string;
  volumeInfo: {
    authors?: string[];
    categories?: string[];
    description?: string;
    infoLink: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    pageCount: number;
    publisher: string;
    publishedDate: string;
    title: string;
    subtitle: string;
  };
}

export const getBooks = async (search: string): Promise<{ items: IBook[] }> => {
  return await request(`/volumes?q=tolkien+${search}&orderBy=relevance&maxResults=40`);
};
