import _ from 'lodash'

export default class DraggableCore {
    constructor({
        gridDom,
        onDragStart = _.noop,
        onDragMove = _.noop,
        onDragEnd = _.noop,
    } = {}) {
        this.gridDom = gridDom
        this.onDragStart = onDragStart
        this.onDragMove = onDragMove
        this.onDragEnd = onDragEnd
    }

    dragStart(evt, dragKey) {
        evt.preventDefault()

        // Calculate which element to start

        document.addEventListener('mousemove', this.dragMove)
        document.addEventListener('mouseup', this.dragEnd)
    }

    dragMove(evt) {
        evt.preventDefault()
        evt.stopPropagation()
    }

    dragEnd(evt) {
    }
}
