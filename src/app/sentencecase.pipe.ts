import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'sentencecase' })
export class SentenceCasePipe implements PipeTransform {
  transform(value: any) {
    if (!value) return
    return value[0].toUpperCase() + value.substring(1, value.length)
  }
}