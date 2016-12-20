var flightInfo = {
  flight: 'SW642',
  depart: 'Los Angeles',
  arrive: 'San Francisco',
  printRes: function() {
    // we can refer to the chatroomUser object with this
    console.log(this.flight + '/' + this.depart + '/' + this.arrive)

    // or we could refer to it by name
    console.log(flightInfo.flight + '/' + flightInfo.depart + '/' + flightInfo.arrive)
  }
}