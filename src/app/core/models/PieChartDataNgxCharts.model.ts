export interface PieChartDataNgxCharts {
    id: number; // Je l'ajoute car cela me sera utile pour obtenir dynamiquement l'id et naviguer avec le router. (Utile pour le tableau)
    name: string;
    value: number;
}

/*** 
Example of datasets, given in documentation.

[
  {
    "name": "Germany",
    "value": 40632,
    "extra": {
      "code": "de"
    }
  },
  {
    "name": "United States",
    "value": 50000,
    "extra": {
      "code": "us"
    }
  },
  {
    "name": "France",
    "value": 36745,
    "extra": {
      "code": "fr"
    }
  },
  {
    "name": "United Kingdom",
    "value": 36240,
    "extra": {
      "code": "uk"
    }
  },
  {
    "name": "Spain",
    "value": 33000,
    "extra": {
      "code": "es"
    }
  },
  {
    "name": "Italy",
    "value": 35800,
    "extra": {
      "code": "it"
    }
  }
]

***/