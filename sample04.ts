const addMark = <T> (message: T) => {
    return ('■' + message);
}
console.log(<string>addMark("messagae"));
console.log(<number>addMark(50));
