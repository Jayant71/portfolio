document.addEventListener('DOMContentLoaded', () => {
    // Initialize D3.js animation
    const svg = d3.select('body').append('svg')
        .attr('width', window.innerWidth)
        .attr('height', window.innerHeight)
        .style('position', 'absolute')
        .style('top', 0)
        .style('left', 0)
        .style('z-index', -1);

    const circles = svg.selectAll('circle')
        .data(d3.range(100).map(() => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            r: Math.random() * 20 + 5
        })))
        .enter().append('circle')
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .attr('r', d => d.r)
        .style('fill', 'rgba(79, 70, 229, 0.6)');

    function animateCircles() {
        circles.transition()
            .duration(2000)
            .attr('cx', () => Math.random() * window.innerWidth)
            .attr('cy', () => Math.random() * window.innerHeight)
            .on('end', animateCircles)
            .ease(d3.easeLinear); // Add easing to smooth transitions
    }

    animateCircles();
});