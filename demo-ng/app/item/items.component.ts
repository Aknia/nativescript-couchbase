import { Component, OnInit, ViewContainerRef } from "@angular/core";

import { ItemService } from "./item.service";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { ItemAddModalComponent } from "./item-add-modal.component";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Array<any>;

    public constructor(private itemService: ItemService, private modalDialogService: ModalDialogService, private viewContainerRef: ViewContainerRef) { }

    public ngOnInit(): void {
        this.items = this.itemService.getValues();
    }

    public openAddModal() {
        const options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef,
            context: {},
            fullscreen: false
        };

        this.modalDialogService.showModal(ItemAddModalComponent, options)
            .then((item) => {
                if (!item) { return };

                this.itemService.addValue(item);

                this.items = this.itemService.getValues();
            })
        ;
    }

    public deleteItem(item) {
        this.itemService.deleteValue(item);

        this.items = this.itemService.getValues();
    }
}