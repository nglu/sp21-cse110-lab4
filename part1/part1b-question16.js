
for (carType in statistics) {
    if (carType.charAt(0) == "r" | statistics[carType] % 2 == 1) {
        console.log(carType);
    }
}
