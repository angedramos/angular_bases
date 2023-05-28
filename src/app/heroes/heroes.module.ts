import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";

//git checkout -- . -> regresa a la version del proyecto que estaba antes del ultimo commit
//git branch -M main -> renombre la rama en la que estamos

@NgModule({
    declarations:[
        HeroComponent,
        ListComponent
    ],
    exports:[
        HeroComponent,
        ListComponent
    ],
    imports:[
        CommonModule
    ]
})
export class HeroesModule{}