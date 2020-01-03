exports.check = (pth) {

    try {
        condmaxsearch = require(pth)
    } catch (e) {
        console.error(`Error seting up test: could not load module ${mpath}`);
        process.exit(1);
    }

}