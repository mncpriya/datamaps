define(['jquery', 'underscore', 'app/views/MapUsOnly'], function ($, _, Map) {

    var plots = new Backbone.Collection([
        {fillKey: 'DEM', size: 10, longitude: -97.42, latitude: 30.42, text: 'hi'},
        {fillKey: 'REP', size: 20, longitude: -74.14, latitude: 41.31, text: 'hey'}
    ]);

    /* Scope (continent) */

   new Map({
        el: $("#container1"),
        scope: 'usa',
        plots: plots,
        plot: {
            popupTemplate: _.template('<div class="hoverinfo">oh man <%= data.text %></div>')
        },
        geography: {
            popupOnHover: false,
            highlightOnHover: false
        },
        fills: {
            'DEM': '#306596',
            'REP': '#CC4731',
            defaultFill: '#EDDC4E'
        },
        data: {
            'NY': {
                fillKey: 'DEM'
            }
        }
    }).render();

    return null;
    new Map({
      el: $('#container1'),
      scope: 'usa',
      geography: {
          highlightBorderColor: '#222',
          highlightBorderWidth: 5,
          highlightOnHover: true,
          popupTemplate: _.template('<div class="hoverinfo"><strong>hi<%= geography.properties.name %></strong> <% if (data.electoralVotes) { %><hr/>  Electoral Votes: <%= data.electoralVotes %> <% } %></div>')
      },
      plots: plots,

      fills: {
        'REP': '#CC4731',
        'DEM': '#306596',
        'HEAVY_DEM': '#667FAF',
        'LIGHT_DEM': '#A9C0DE',
        'HEAVY_REP': '#CA5E5B',
        'LIGHT_REP': '#EAA9A8',
        defaultFill: '#EDDC4E'
      },
      data:{
        "AZ": {
            "fillKey": "REP",
            "electoralVotes": 5
        },
        "CO": {
            "fillKey": "LIGHT_DEM",
            "electoralVotes": 5
        },
        "DE": {
            "fillKey": "DEM",
            "electoralVotes": 32
        },
        "FL": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 29
        },
        "GA": {
            "fillKey": "REP",
            "electoralVotes": 32
        },
        "HI": {
            "fillKey": "DEM",
            "electoralVotes": 32
        },
        "ID": {
            "fillKey": "REP",
            "electoralVotes": 32
        },
        "IL": {
            "fillKey": "DEM",
            "electoralVotes": 32
        },
        "IN": {
            "fillKey": "REP",
            "electoralVotes": 11
        },
        "IA": {
            "fillKey": "LIGHT_DEM",
            "electoralVotes": 11
        },
        "KS": {
            "fillKey": "REP",
            "electoralVotes": 32
        },
        "KY": {
            "fillKey": "REP",
            "electoralVotes": 32
        },
        "LA": {
            "fillKey": "REP",
            "electoralVotes": 32
        },
        "MD": {
            "fillKey": "DEM",
            "electoralVotes": 32
        },
        "ME": {
            "fillKey": "DEM",
            "electoralVotes": 32
        },
        "MA": {
            "fillKey": "DEM",
            "electoralVotes": 32
        },
        "MN": {
            "fillKey": "DEM",
            "electoralVotes": 32
        },
        "MI": {
            "fillKey": "DEM",
            "electoralVotes": 32
        },
        "MS": {
            "fillKey": "REP",
            "electoralVotes": 32
        },
        "MO": {
            "fillKey": "REP",
            "electoralVotes": 13
        },
        "MT": {
            "fillKey": "REP",
            "electoralVotes": 32
        },
        "NC": {
            "fillKey": "LIGHT_REP",
            "electoralVotes": 32
        },
        "NE": {
            "fillKey": "REP",
            "electoralVotes": 32
        },
        "NV": {
            "fillKey": "HEAVY_DEM",
            "electoralVotes": 32
        },
        "NH": {
            "fillKey": "LIGHT_DEM",
            "electoralVotes": 32
        },
        "NJ": {
            "fillKey": "DEM",
            "electoralVotes": 32
        },
        "NY": {
            "fillKey": "DEM",
            "electoralVotes": 32
        },
        "ND": {
            "fillKey": "REP",
            "electoralVotes": 32
        },
        "NM": {
            "fillKey": "DEM",
            "electoralVotes": 32
        },
        "OH": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 32
        },
        "OK": {
            "fillKey": "REP",
            "electoralVotes": 32
        },
        "OR": {
            "fillKey": "DEM",
            "electoralVotes": 32
        },
        "PA": {
            "fillKey": "DEM",
            "electoralVotes": 32
        },
        "RI": {
            "fillKey": "DEM",
            "electoralVotes": 32
        },
        "SC": {
            "fillKey": "REP",
            "electoralVotes": 32
        },
        "SD": {
            "fillKey": "REP",
            "electoralVotes": 32
        },
        "TN": {
            "fillKey": "REP",
            "electoralVotes": 32
        },
        "TX": {
            "fillKey": "REP",
            "electoralVotes": 32
        },
        "UT": {
            "fillKey": "REP",
            "electoralVotes": 32
        },
        "WI": {
            "fillKey": "DEM",
            "electoralVotes": 32
        },
        "VA": {
            "fillKey": "LIGHT_DEM",
            "electoralVotes": 32
        },
        "VT": {
            "fillKey": "DEM",
            "electoralVotes": 32
        },
        "WA": {
            "fillKey": "DEM",
            "electoralVotes": 32
        },
        "WV": {
            "fillKey": "REP",
            "electoralVotes": 32
        },
        "WY": {
            "fillKey": "REP",
            "electoralVotes": 32
        },
        "CA": {
            "fillKey": "DEM",
            "electoralVotes": 32
        },
        "CT": {
            "fillKey": "DEM",
            "electoralVotes": 32
        },
        "AK": {
            "fillKey": "REP",
            "electoralVotes": 32
        },
        "AR": {
            "fillKey": "REP",
            "electoralVotes": 32
        },
        "AL": {
            "fillKey": "REP",
            "electoralVotes": 32
        }
}
    }).render();

});