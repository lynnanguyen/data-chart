import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unSnakeCase'
})
export class UnSnakeCasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }

    return value
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

}
