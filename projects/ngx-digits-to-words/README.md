@vlah.io/ngx-digits-to-words

Digits to words helper library.

### Usage (code example)

```
    <div vlahioDigitsToWordsRO [digits]="digits"></div>
    <div vlahioDigitsToWordsRO [digits]="digits" [currency]="'USD'"></div>
    <div vlahioDigitsToWordsRO [digits]="digits" [currency]="'EUR'"></div>
    <div vlahioDigitsToWordsRO [digits]="digits" [currency]="'RON'"></div>

    <div vlahioDigitsToWordsEN [digits]="digits"></div>
    <div vlahioDigitsToWordsEN [digits]="digits" [currency]="'USD'"></div>
    <div vlahioDigitsToWordsEN [digits]="digits" [currency]="'EUR'"></div>
    <div vlahioDigitsToWordsEN [digits]="digits" [currency]="'RON'"></div>
```

```
    constructor(private digitsService: DigitsToWordsRomanianService) {}

    ron(nr: number): string {
        return this.digitsService.parse(nr);
    }

    eur(nr: number): string {
        return this.digitsService.parse(nr, 'EUR');
    }

    usd(nr: number): string {
        return this.digitsService.parse(nr, 'USD');
    }
```

```
    constructor(private digitsService: DigitsToWordsEnglishService) {}

    ron(nr: number): string {
        return this.digitsService.parse(nr);
    }

    eur(nr: number): string {
        return this.digitsService.parse(nr, 'EUR');
    }

    usd(nr: number): string {
        return this.digitsService.parse(nr, 'USD');
    }
```

For more details read [here](https://github.com/vlah-io/ngx-digits-to-words/blob/master/INSTALLATION.md).
