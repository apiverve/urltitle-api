declare module '@apiverve/urltitle' {
  export interface urltitleOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface urltitleResponse {
    status: string;
    error: string | null;
    data: URLTitleData;
    code?: number;
  }


  interface URLTitleData {
      title: string;
      h1:    string[];
  }

  export default class urltitleWrapper {
    constructor(options: urltitleOptions);

    execute(callback: (error: any, data: urltitleResponse | null) => void): Promise<urltitleResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: urltitleResponse | null) => void): Promise<urltitleResponse>;
    execute(query?: Record<string, any>): Promise<urltitleResponse>;
  }
}
