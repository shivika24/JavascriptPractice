console.log("************SET**************");
            let arr=[9,1,5,7,1]; //set doen't contains duplicate values
            let s1 = new Set(arr);
            s1.add('10')
            s1.add(11)
            s1.add({a:1,b:true})
            s1.delete(11);
            console.log(s1.size);
            //s1.clear();
            s1.forEach(function(val){
                console.log(val)
            })
            //console.log(s1);

            let set1 = new Set([1, 2, 3])
            let set2 = new Set([2, 3, 4, 5, 6])
            console.log(new Set([...set1].filter(x => set2.has(x))))   //intersection between sets
            console.log(new Set([...set2].filter(x => !set1.has(x))))  //difference between sets


            //Map
            //keys in map can be objects,functions,numbers,string
            console.log("************MAP**************");
            let m1 = new Map([['a1','hello'],['b2','bye']]);
            console.log(m1.get('a1'))
            m1.set('c3','how are you');
            console.log(m1)
            m1.delete('a1');
            console.log(m1)
            console.log(m1.size)
            console.log(m1.has('b2'))

            m1.set(NaN,"not a no.");
            console.log(m1.get(NaN))
            let otherNaN = Number('foo')
            console.log(m1.get(otherNaN))

            for(let x of m1.keys())
            {
                console.log(x)
            }
            // for(let x of m1.values())
            // {
            //     console.log(x)
            // }
            for(let [key,value] of m1)
            {
                console.log(key+" "+value)
            }
            for(let [key,value] of m1.entries())
            {
                console.log(key+" "+value)
            }
            m1.forEach(function(key,value){
                console.log(key+" "+value)
            })

            let kvArray = [['key1', 'value1'], ['key2', 'value2']]
            let myMap = new Map(kvArray)
            console.log([...myMap])           //To transform a map into 2D key value array
            console.log(Array.from(myMap))

            //Merging maps
            let first = new Map([
                        [1, 'one'],
                        [2, 'two'],
                        [3, 'three'],
                        ])
            let second = new Map([
                        [1, 'uno'],
                        [2, 'dos']
                        ])

            let merged = new Map([...first, ...second])
            console.log(merged)
            let merged1 = new Map([...second,...first])
            console.log(merged1)

            //WeakSet
            console.log("************WEAK SET**************");
            let carws = new WeakSet();
            let car1 = {
                make : 'honda',
                model : 'civic'
            }
            carws.add(car1)
            let car2 = {
                make : 'toyota',
                model : 'camry'
            }
            carws.add(car2)
            carws.delete(car1)
            console.log(carws)

            //WEAK MAP
            console.log("************WEAK MAP**************");
            let carwm = new WeakMap();
            let key1 = {
                id:1
            }
            let car11 = {
                make : 'honda',
                model : 'civic'
            }
            carwm.set(key1,car11)
            console.log(carwm)