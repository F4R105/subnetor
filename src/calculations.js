export default function (noOfSubnets) {
    
    if(noOfSubnets == 1) {
        return {
            hosts: 256,
            cidr: 24,
            binary: 0,
            noOfNetworks: 1,
            networks: []
        }
    }

    if(noOfSubnets == 2) {
        return {
            hosts: 128,
            cidr: 25,
            binary: 128,
            noOfNetworks: 2,
            networks: []
        }
    }
    
    if(noOfSubnets <= 4) {
        return {
            hosts: 64,
            cidr: 26,
            binary: 192,
            noOfNetworks: 4,
            networks: []
        }
    }
    
    if(noOfSubnets <= 8) {
        return {
            hosts: 32,
            cidr: 27,
            binary: 224,
            noOfNetworks: 8,
            networks: []
        }
    }
    
    if(noOfSubnets <= 16) {
        return {
            hosts: 16,
            cidr: 28,
            binary: 240,
            noOfNetworks: 16,
            networks: []
        }
    }

    if(noOfSubnets <= 32) {
        return {
            hosts: 8,
            cidr: 29,
            binary: 248,
            noOfNetworks: 32,
            networks: []
        }
    }

    if(noOfSubnets <= 64) {
        return {
            hosts: 4,
            cidr: 30,
            binary: 252,
            noOfNetworks: 64,
            networks: []
        }
    }


    if(noOfSubnets <= 128) {
        return {
            hosts: 2,
            cidr: 31,
            binary: 254,
            noOfNetworks: 128,
            networks: []
        }
    }

    if(noOfSubnets < 256) {
        return {
            hosts: 0,
            cidr: 32,
            binary: 256,
            noOfNetworks: 256,
            networks: []
        }
    }
}