import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit{

  @Input("myForEm") numbers:number[] | undefined
  @Input("myForUsando") texto:string | undefined

  constructor() {
   
   }
  ngOnInit(): void{
    console.log(this.numbers)
    console.log(this.texto)
}
}