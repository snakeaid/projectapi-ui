import {IDictionary} from "../../abstractions/idictionary";

export class ProductModel {
  constructor(public id: number, public name : string, public dateCreated : Date, public categoryId : number,
              public description? : string, public dateUpdated? : Date, public specificationData? : IDictionary) {}
}
