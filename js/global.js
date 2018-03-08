var mainTable = new Vue({
  el: "#main-table",
  data: {
      gridColumns: ['sall Control', 'read', 'Sound / Auto Call', 'Truck', 'Origin', 'Destination', 'Pickup', 'DH-O', 'DH-D', 'F/P', 'Length', 'Weight', 'Trip', 'Alarm', 'Actions'],
      rows: []      
    },
  methods: {
        addRow: function (index) {
          this.rows.splice(index + 1, 0, {});
        },
        removeRow: function (index) {
          this.rows.splice(index);
        }       
    }
});
var searchTable = new Vue({
  el: '#search-table',
  data: {
    gridColumns: ['rate', 'f', 'source', 'age', 'avail', 'truck', 'truck-O', 'DH-O', 'F/P', 'origin', 'trip', 'destination', 'DH-D', 'truck-D', 'length', 'weight', 'company', 'phone'],
    gridData: [
      { rate: 3150, f: 'Yes', source: 'DAT', age: '00:01', avail: '11/24', truck: 'V', 'truck-O': 'Belwood, IL', 'DH-O': 371, 'F/P': 'F', origin: 'Erie, PA', trip: 422, destination: 'Sealy, TX', DHD: '', truckD: '', length: '53 fr', weight: '43 klbs', company: 'Coyote Logistics', phone: '(773) 799 2118'},
      { rate: '', f: 'No', source: 'DAT', age: '00:02', avail: '11/25', truck: 'VR', 'truck-O': 'Belwood, IL', 'DH-O': 372, 'F/P': 'F', origin: 'St Clair, MI', trip: 423, destination: 'Orlando, FL', DHD: '', truckD: '', length: '41 fr', weight: '17 klbs', company: 'R & R Express', phone: '(412) 444 24 71'}
    ]
  },
  methods: {
    removeData: function (index) {
        this.gridData.splice(index);
    }
  }
});

