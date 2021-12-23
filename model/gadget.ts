export interface GadgetFields {
  Name: string;
}

export interface Gadget {
  id: string;
  fields: GadgetFields;
  createdTime: Date;
}

export interface Gadgets {
  records: Gadget[];
}
