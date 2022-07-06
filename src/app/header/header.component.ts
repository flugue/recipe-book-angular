import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    collapsed = true;
    @Output() featureSelected = new EventEmitter<number>();

    onSelect(page: number){
        this.featureSelected.emit(page);
    }
}