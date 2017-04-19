/**
 * @file GridItem
 * @author niminjie(niminjie@baidu.com)
 *
 */

import _ from 'lodash'
import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import { autobind } from 'core-decorators'

export default class GridItem extends Component {

    className = 'GridItem'

    constructor(props) {
        super(props)
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
        const { onDragStart } = this.props

        this.setState({
            dragging: true,
            startX: evt.pageX,
            startY: evt.pageY,
            lastX: evt.pageX,
            lastY: evt.pageY,
        })

        onDragStart(this.state)
    }

    @autobind
    handleDragMove(evt) {
        const { onDragMove } = this.props
        const { dragging, lastX, lastY, currentX, currentY } = this.state

        if (!dragging) {
            return
        }

        const deltaX = evt.pageX - lastX
        const deltaY = evt.pageY - lastY

        let targetElement = document.elementFromPoint(evt.clientX, evt.clientY);

        console.log(targetElement.getAttribute('data-key'));
        if (targetElement.getAttribute('data-key') !== this.props.children.key) {
            console.log(targetElement);
        }

        this.setState({
            lastX: evt.pageX,
            lastY: evt.pageY,
            currentX: currentX + deltaX,
            currentY: currentY + deltaY,
        })

        evt.preventDefault()
        evt.stopPropagation()

        onDragMove(this.state)
    }

    @autobind
    handleDragEnd(evt) {
        const { onDragEnd } = this.props

        this.setState({
            dragging: false,
            startX: 0,
            startY: 0,
            lastX: 0,
            lastY: 0,
        })

        onDragEnd(this.state)
    }

    getStyle(x, y) {
        const { width, height } = this.props
        const itemStyle = {}
        const transform = `translate3d(${x}px, ${y}px, 0)`

        // Fix size 
        itemStyle.width = width
        itemStyle.height = height

        // Makes position
        itemStyle.position = 'absolute'
        itemStyle.display = 'inline-block'

        itemStyle.zIndex = 2
        if (this.state.dragging) {
            itemStyle.zIndex = 1000
        }

        // Turn off animations for this item
        itemStyle.WebkitTransform = transform
        itemStyle.MozTransform = transform
        itemStyle.msTransform = transform
        itemStyle.transform = transform

        itemStyle.backgroundColor = 'red'

        itemStyle.WebkitUserDrag = 'none'
        itemStyle.WebkitUserSelect = 'none'

        // Allows mouseover to work
        // itemStyle.pointerEvents = 'none'

        return itemStyle
    }

    render() {
        const { children, width, height, idx } = this.props
        const { currentX, currentY } = this.state

        return (
            <div
                data-key    = {children.key}
                className   = {this.className}
                onMouseDown = {this.handleDragStart}
                onMouseMove = {this.handleDragMove}
                onMouseUp   = {this.handleDragEnd}
                style       = {this.getStyle(currentX, currentY)}
            >
                {React.Children.only(children)}
            </div>
        )
    }
}
