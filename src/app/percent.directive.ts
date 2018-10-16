import { Directive } from '@angular/core'
import { NG_VALIDATORS, Validator, ValidatorFn, FormControl, ValidationErrors } from '@angular/Forms';

@Directive({
    selector: '[PercentDirective]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: PercentDirective, multi: true}
    ]
})
export class PercentDirective implements Validator{

    constructor(){};

    public validate(c: FormControl): ValidationErrors{
        if (c.value > 100 || c.value < 1)
            return { PercentDirective: {valid: false} }
        else
            return null; 
    }

}