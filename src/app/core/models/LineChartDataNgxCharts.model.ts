export interface LineChartSeriesData {
    value: number;
    name: number;
    athletes: number; // Je l'ajoute car cela est utile pour conserver l'information du le nombre d'athlètes. (Utile pour le tableau)
}

export interface LineChartDataNgxCharts {
    id: number; // Je l'ajoute car cela pourrait être utile pour obtenir dynamiquement l'id et naviguer avec le router. (Potentiel future utilité)
    name: string;
    series: LineChartSeriesData[];
}

/*** 
Example of datasets, given in documentation.

[
  {
    "name": "Kazakhstan",
    "series": [
      {
        "value": 3120,
        "name": "2016-09-21T16:36:25.719Z"
      },
      {
        "value": 6835,
        "name": "2016-09-20T10:50:25.454Z"
      },
      {
        "value": 2750,
        "name": "2016-09-20T04:06:43.298Z"
      },
      {
        "value": 6862,
        "name": "2016-09-14T03:25:54.938Z"
      },
      {
        "value": 6657,
        "name": "2016-09-23T12:39:43.059Z"
      }
    ]
  },
  {
    "name": "Guinea-Bissau",
    "series": [
      {
        "value": 4736,
        "name": "2016-09-21T16:36:25.719Z"
      },
      {
        "value": 2286,
        "name": "2016-09-20T10:50:25.454Z"
      },
      {
        "value": 2831,
        "name": "2016-09-20T04:06:43.298Z"
      },
      {
        "value": 6744,
        "name": "2016-09-14T03:25:54.938Z"
      },
      {
        "value": 3007,
        "name": "2016-09-23T12:39:43.059Z"
      }
    ]
  },
  {
    "name": "Argentina",
    "series": [
      {
        "value": 3621,
        "name": "2016-09-21T16:36:25.719Z"
      },
      {
        "value": 5814,
        "name": "2016-09-20T10:50:25.454Z"
      },
      {
        "value": 5737,
        "name": "2016-09-20T04:06:43.298Z"
      },
      {
        "value": 2285,
        "name": "2016-09-14T03:25:54.938Z"
      },
      {
        "value": 3256,
        "name": "2016-09-23T12:39:43.059Z"
      }
    ]
  },
  {
    "name": "Bulgaria",
    "series": [
      {
        "value": 2300,
        "name": "2016-09-21T16:36:25.719Z"
      },
      {
        "value": 2000,
        "name": "2016-09-20T10:50:25.454Z"
      },
      {
        "value": 5911,
        "name": "2016-09-20T04:06:43.298Z"
      },
      {
        "value": 2123,
        "name": "2016-09-14T03:25:54.938Z"
      },
      {
        "value": 6863,
        "name": "2016-09-23T12:39:43.059Z"
      }
    ]
  },
  {
    "name": "Rwanda",
    "series": [
      {
        "value": 3823,
        "name": "2016-09-21T16:36:25.719Z"
      },
      {
        "value": 3790,
        "name": "2016-09-20T10:50:25.454Z"
      },
      {
        "value": 4211,
        "name": "2016-09-20T04:06:43.298Z"
      },
      {
        "value": 3526,
        "name": "2016-09-14T03:25:54.938Z"
      },
      {
        "value": 6680,
        "name": "2016-09-23T12:39:43.059Z"
      }
    ]
  }
]

***/