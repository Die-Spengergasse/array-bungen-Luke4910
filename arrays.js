function ArrayFunktionenTesten() {
    const arrIndexOf = [1, 2, 3, 4, 5];
    console.log('indexOf (normal):', arrIndexOf.indexOf(3));
  
    const arrIndexOfNonExist = [1, 2, 3, 4, 5];
    console.log('indexOf (nicht existierend):', arrIndexOfNonExist.indexOf(10));
  
    const arrPush = [1, 2, 3, 4, 5];
    arrPush.push(7);
    console.log('Array nach push(7):', arrPush);
  
    const arrPop = [1, 2, 3, 4, 5];
    const poppedElement = arrPop.pop();
    console.log('Array nach pop():', arrPop, 'Entferntes Element:', poppedElement);
  
    const arrShift = [1, 2, 3, 4, 5];
    const shiftedElement = arrShift.shift();
    console.log('Array nach shift():', arrShift, 'Entferntes Element:', shiftedElement);
  
    const arrIncludes = [1, 2, 3, 4, 5];
    console.log('includes(3):', arrIncludes.includes(3));
  
    const arrSlice = [1, 2, 3, 4, 5];
    console.log('slice(1, 3):', arrSlice.slice(1, 3));
  
    const arrSplice = [1, 2, 3, 4, 5];
    arrSplice.splice(1, 2);
    console.log('Array nach splice(1, 2):', arrSplice);
  
    const arrMap = [1, 2, 3, 4, 5];
    console.log('Array nach map:', arrMap.map((w) => `Hallo ${w}`));
  
    const arrFilter = [1, 2, 3, 4, 5];
    console.log('Array nach filter:', arrFilter.filter((el) => el > 2));
  
    const string = 'Enten sind coole Tiere';
    console.log('String nach split:', string.split(' '));
    console.log('Array nach join:', string.split(' ').join('-'));
  
    const arrSome = [1, 2, 3, 4, 5];
    console.log('some():', arrSome.some((el) => el > 3));
  
    const arrReverse = [1, 2, 3, 4, 5];
    arrReverse.reverse();
    console.log('Array nach reverse:', arrReverse);
  
    const arrReduce = [1, 2, 3, 4, 5];
    console.log('Array nach reduce:', arrReduce.reduce((acc, curr) => acc + curr, 0));
  
    const arrCopy = [1, 2, 3, 4, 5];
    console.log('Kopie des Arrays:', [...arrCopy]);
  }
  
  ArrayFunktionenTesten();
  