export interface Small {
  url: string;
  width: number;
  height: number;
}

export interface Large {
  url: string;
  width: number;
  height: number;
}

export interface Full {
  url: string;
  width: number;
  height: number;
}

export interface Thumbnails {
  small: Small;
  large: Large;
  full: Full;
}

export interface Image {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: Thumbnails;
}

export interface GadgetFields {
  Name: string;
  Description: string;
  Image: Image[];
}

export interface Gadget {
  id: string;
  fields: GadgetFields;
  createdTime: Date;
}

export interface Gadgets {
  records: Gadget[];
}
