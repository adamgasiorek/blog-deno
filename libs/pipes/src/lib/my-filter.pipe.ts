import {Injectable, Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'filter'
})
@Injectable()
export class MyFilterPipe implements PipeTransform {
  transform(items: any[], prop: any, args: any): any {
    if (!items || !prop) {
      return items;
    }
    return items.filter(item => item[prop] === args);
  }
}
