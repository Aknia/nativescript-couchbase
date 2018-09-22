import { Component, OnInit } from "@angular/core";

import { ItemService } from "./item.service";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
    selector: "ns-add-modal",
    moduleId: module.id,
    templateUrl: "./item-add-modal.component.html",
})
export class ItemAddModalComponent implements OnInit {
    public item = {};

    public constructor(
        private params: ModalDialogParams,
        private itemService: ItemService
    ) { }

    public ngOnInit(): void {
    }

    public ok() {
        this.params.closeCallback(this.item);
    }

    public cancel() {
        this.params.closeCallback();
    }
}
