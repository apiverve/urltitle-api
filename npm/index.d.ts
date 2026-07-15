declare module '@apiverve/urltitle' {
  export interface urltitleOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface urltitleResponse {
    status: string;
    error: string | null;
    data: URLTitleData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface URLTitleData {
      title: null | string;
      h1:    (null | string)[];
  }

  export default class urltitleWrapper {
    constructor(options: urltitleOptions);

    execute(callback: (error: any, data: urltitleResponse | null) => void): Promise<urltitleResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: urltitleResponse | null) => void): Promise<urltitleResponse>;
    execute(query?: Record<string, any>): Promise<urltitleResponse>;
  }
}
