import {Injectable} from '@angular/core';
import * as d3 from 'd3';
import {BaseType, Selection} from "d3";

@Injectable()
export class D3Service {

  private container: Selection<BaseType, {}, HTMLElement, any>;

  constructor() {
  }

  initTree(): void {
    var data = {
      "name": "A1",
      "children": [
        {
          "name": "B1",
          "children": [
            {
              "name": "C1",
              "value": 100
            },
            {
              "name": "C2",
              "value": 300
            },
            {
              "name": "C3",
              "value": 200
            }
          ]
        },
        {
          "name": "B2",
          "value": 200
        }
      ]
    };

    var treeLayout = d3.tree()
      .size([400, 200]);

    var root = d3.hierarchy(data);

    treeLayout(root);

// Nodes
    d3.select('svg g.nodes')
      .selectAll('circle.node')
      .data(root.descendants())
      .enter()
      .append('circle')
      .classed('node', true)
      .attr('cx', function(d:any) {return d.x;})
      .attr('cy', function(d:any) {return d.y;})
      .attr('r', 4);

// Links
    var dd =d3.select('svg g.links')
      .selectAll('line.link')
      .data(root.links())
      .enter()
      .append('line')
      .classed('link', true)
      .attr('x1', function(d:any) {return d.source.x;})
      .attr('y1', function(d:any) {return d.source.y;})
      .attr('x2', function(d:any) {return d.target.x;})
      .attr('y2', function(d:any) {return d.target.y;});


    this.container = d3.select('svg')
      .attr('width', 900)
      .attr('height', 300)
      .style('background', 'gray');
    //
    //
    // const jsonCircles = [
    //   {"x_axis": 30, "y_axis": 30, "radius": 20, "color": "green"},
    //   {"x_axis": 70, "y_axis": 70, "radius": 20, "color": "purple"},
    //   {"x_axis": 110, "y_axis": 100, "radius": 20, "color": "red"}];
    //
    // this.appendCircle(jsonCircles);
  }

  private appendCircle(data: any): void {
    this.container.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr("cx", (d: any) => d.x_axis)
      .attr("cy", (d: any) => d.y_axis)
      .attr("r", (d: any) => d.radius)
      .attr("fill", (d: any) => d.color)
      .text((d, i) => d[i]);
  }
}
