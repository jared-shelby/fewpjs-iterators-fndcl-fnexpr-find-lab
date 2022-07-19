function superbowlWin(arr) {
    let record = arr.find(obj => obj.result === "W");
    return !!record ? record.year : undefined;
}