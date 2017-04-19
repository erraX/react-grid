export default class LayoutManager {
    constructor(options) {
        this.update(options)
    }

    update({
        cols,
        rows,
        gridHeight,
        gridWidth,
        itemNum,
        itemHeight,
        itemWidth,
        itemMarginV,
        itemMarginH,
    } = {}) {
        this.cols = cols
        this.rows = rows
        this.gridHeight = gridHeight
        this.gridWidth = gridWidth
        this.itemNum = itemNum
        this.itemHeight = itemHeight
        this.itemWidth = itemWidth
        this.itemMarginV = itemMarginV
        this.itemMarginH = itemMarginH
    }

    get currentRows() {
        return Math.ceil(this.itemNum / this.cols)
    }

    get totalHeight() {
        if (this.currentRows === 0) {
            return 0
        }

        return this.currentRows * this.itemHeight + (this.currentRows - 1) * this.itemMarginV
    }

    getAxisByIdx(idx) {
        return [Math.floor(idx / this.cols), idx % this.cols]
    }

    getPositionByIdx(idx) {
        const [ row, col ] = this.getAxisByIdx(idx)

        return {
            x: (col + 1) * this.itemWidth + col * this.itemMarginH,
            y: (row + 1) * this.itemHeight + row * this.itemMarginV,
        }
    }

    getTransform(idx) {
        const { x, y } = this.getPositionByIdx(idx)
        return `translate3d(${x}px, ${y}px, 0)`
    }
}
