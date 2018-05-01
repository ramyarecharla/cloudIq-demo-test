module.exports = {

    selectRandomFromDropDown(dropDown) {
        let rand = this.randomIntMinMax(0, dropDown.value.length - 1);
        dropDown.value[rand].click();
    },

    randomIntMinMax(min,max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};

