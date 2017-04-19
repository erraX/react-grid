/**
 * @file GridItem
 * @author niminjie(niminjie@baidu.com)
 *
 */

import _ from 'lodash'
import React, { Compnent, PropTypes } from 'react'
import cx from 'classnames'
import { autobind } from 'core-decorators'

class GridItem extends Component {

    className = 'GridItem'

    constructor(props) {
        this.state = {
            dragging: false,

            startX: 0,
            startY: 0,

            lastX: 0,
            lastY: 0,

            currentX: props.x,
            currentY: props.y,
        }
    }

    @autobind
    handleDragStart(evt) {
        this.setState({
            dragging: true,
            startX: evt.pageX,
            startY: evt.pageY,
            lastX: evt.pageX,
            lastY: evt.pageY,
        })
    }

    @autobind
    handleDragMove(evt) {
        const { dragging, lastX, lastY, currentX, currentY } = this.state

        if (!dragging) {
            return
        }

        const deltaX = evt.pageX - lastX
        const deltaY = evt.pageY - lastY

        this.setState({
            lastX: evt.pageX,
            lastY: evt.pageY,
            currentX: currentX + deltaX,
            currentY: currentY + deltaY,
        })
    }

    @autobind
    handleDragEnd(evt) {
        this.setState({
            dragging: false,
            startX: 0,
            startY: 0,
            lastX: 0,
            lastY: 0,
        })
    }

    render() {
        const { children, width, height } = this.props
        const { currentX, currentY } = this.state

        const itemStyle = {
            width,
            height,
            display: 'inline-block',
            position: 'absolute',
            transform: `translate(${currentX}, ${currentY}})`
        }

        return (
            <div
                className   = {this.className}
                onMouseDown = {this.handleDragStart}
                onMouseMove = {this.handleDragMove}
                onMouseUp   = {this.handleDragEnd}
                style       = {itemStyle}
            >
                {React.Children.only(children)}
            </div>
        )
    }
}
