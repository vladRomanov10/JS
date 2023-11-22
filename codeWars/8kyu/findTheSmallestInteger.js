class SmallestIntegerFinder {
    findSmallestInt(args) {
        let numOfAdv = 0;
        for (let i = 0; i < args.length; i++) {
            for (let z = 0; z < args.length; z++) {
                if (args[i] > args[z]) {   
                    numOfAdv++;
                }
            }
            if (numOfAdv == 0) {
                return args[i];
            }
            numOfAdv = 0;
    }
  }
}