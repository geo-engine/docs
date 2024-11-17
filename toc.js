// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="welcome.html"><strong aria-hidden="true">1.</strong> Welcome to Geo Engine Docs</a></li><li class="chapter-item expanded "><a href="geoengine/intro.html"><strong aria-hidden="true">2.</strong> The Geo Engine</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="geoengine/datasets.html"><strong aria-hidden="true">2.1.</strong> Datasets</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.2.</strong> Engine</div></li><li class="chapter-item expanded "><a href="geoengine/layers.html"><strong aria-hidden="true">2.3.</strong> Layers</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.4.</strong> Workflows</div></li></ol></li><li class="chapter-item expanded "><a href="pro/intro.html"><strong aria-hidden="true">3.</strong> Pro Features</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="pro/users.html"><strong aria-hidden="true">3.1.</strong> Users and Permissions</a></li></ol></li><li class="chapter-item expanded "><a href="api/intro.html"><strong aria-hidden="true">4.</strong> API</a></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">4.1.</strong> Datasets</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.2.</strong> Projects</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.3.</strong> Upload</div></li><li class="chapter-item expanded "><a href="api/workflows.html"><strong aria-hidden="true">4.4.</strong> Workflows</a></li></ol></li><li class="chapter-item expanded "><a href="datatypes/intro.html"><strong aria-hidden="true">5.</strong> Datatypes</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="datatypes/colorizer.html"><strong aria-hidden="true">5.1.</strong> Colorizer</a></li><li class="chapter-item expanded "><a href="datatypes/measurement.html"><strong aria-hidden="true">5.2.</strong> Measurement</a></li><li class="chapter-item expanded "><a href="datatypes/queryrectangle.html"><strong aria-hidden="true">5.3.</strong> QueryRectangle</a></li><li class="chapter-item expanded "><a href="datatypes/rasterbanddescriptor.html"><strong aria-hidden="true">5.4.</strong> RasterBandDescriptor</a></li><li class="chapter-item expanded "><a href="datatypes/rasterdatatype.html"><strong aria-hidden="true">5.5.</strong> RasterDataType</a></li><li class="chapter-item expanded "><a href="datatypes/timeinstance.html"><strong aria-hidden="true">5.6.</strong> TimeInstance</a></li><li class="chapter-item expanded "><a href="datatypes/timeinterval.html"><strong aria-hidden="true">5.7.</strong> TimeInterval</a></li><li class="chapter-item expanded "><a href="datatypes/timestep.html"><strong aria-hidden="true">5.8.</strong> TimeStep</a></li></ol></li><li class="chapter-item expanded "><a href="operators/intro.html"><strong aria-hidden="true">6.</strong> Operators</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="operators/band-neighborhood-aggregate.html"><strong aria-hidden="true">6.1.</strong> BandNeighborhoodAggregate</a></li><li class="chapter-item expanded "><a href="operators/bandwise-expression.html"><strong aria-hidden="true">6.2.</strong> BandwiseExpression</a></li><li class="chapter-item expanded "><a href="operators/columnrangefilter.html"><strong aria-hidden="true">6.3.</strong> ColumnRangeFilter</a></li><li class="chapter-item expanded "><a href="operators/expression.html"><strong aria-hidden="true">6.4.</strong> Expression</a></li><li class="chapter-item expanded "><a href="operators/gdalsource.html"><strong aria-hidden="true">6.5.</strong> GdalSource</a></li><li class="chapter-item expanded "><a href="operators/interpolation.html"><strong aria-hidden="true">6.6.</strong> Interpolation</a></li><li class="chapter-item expanded "><a href="operators/linesimplification.html"><strong aria-hidden="true">6.7.</strong> LineSimplification</a></li><li class="chapter-item expanded "><a href="operators/neighborhoodaggregate.html"><strong aria-hidden="true">6.8.</strong> NeighborhoodAggregate</a></li><li class="chapter-item expanded "><a href="operators/ogrsource.html"><strong aria-hidden="true">6.9.</strong> OgrSource</a></li><li class="chapter-item expanded "><a href="operators/pointinpolygon.html"><strong aria-hidden="true">6.10.</strong> PointInPolygon</a></li><li class="chapter-item expanded "><a href="operators/rasterization.html"><strong aria-hidden="true">6.11.</strong> Rasterization</a></li><li class="chapter-item expanded "><a href="operators/rasterscaling.html"><strong aria-hidden="true">6.12.</strong> RasterScaling</a></li><li class="chapter-item expanded "><a href="operators/rasterstacker.html"><strong aria-hidden="true">6.13.</strong> RasterStacker</a></li><li class="chapter-item expanded "><a href="operators/rastertypeconversion.html"><strong aria-hidden="true">6.14.</strong> RasterTypeConversion</a></li><li class="chapter-item expanded "><a href="operators/rastervectorjoin.html"><strong aria-hidden="true">6.15.</strong> RasterVectorJoin</a></li><li class="chapter-item expanded "><a href="operators/reprojection.html"><strong aria-hidden="true">6.16.</strong> Reprojection</a></li><li class="chapter-item expanded "><a href="operators/temporalrasteraggregation.html"><strong aria-hidden="true">6.17.</strong> TemporalRasterAggregation</a></li><li class="chapter-item expanded "><a href="operators/timeprojection.html"><strong aria-hidden="true">6.18.</strong> TimeProjection</a></li><li class="chapter-item expanded "><a href="operators/timeshift.html"><strong aria-hidden="true">6.19.</strong> TimeShift</a></li><li class="chapter-item expanded "><a href="operators/vectorexpression.html"><strong aria-hidden="true">6.20.</strong> VectorExpression</a></li><li class="chapter-item expanded "><a href="operators/vectorjoin.html"><strong aria-hidden="true">6.21.</strong> VectorJoin</a></li><li class="chapter-item expanded "><a href="operators/visualpointclustering.html"><strong aria-hidden="true">6.22.</strong> VisualPointClustering</a></li></ol></li><li class="chapter-item expanded "><a href="plots/intro.html"><strong aria-hidden="true">7.</strong> Plots</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="plots/boxplot.html"><strong aria-hidden="true">7.1.</strong> BoxPlot</a></li><li class="chapter-item expanded "><a href="plots/classHistogram.html"><strong aria-hidden="true">7.2.</strong> ClassHistogram</a></li><li class="chapter-item expanded "><a href="plots/featureattributevaluesoverTime.html"><strong aria-hidden="true">7.3.</strong> FeatureAttributeValuesOverTime</a></li><li class="chapter-item expanded "><a href="plots/histogram.html"><strong aria-hidden="true">7.4.</strong> Histogram</a></li><li class="chapter-item expanded "><a href="plots/meanrasterpixelvaluesovertime.html"><strong aria-hidden="true">7.5.</strong> MeanRasterPixelValuesOverTime</a></li><li class="chapter-item expanded "><a href="plots/piechart.html"><strong aria-hidden="true">7.6.</strong> PieChart</a></li><li class="chapter-item expanded "><a href="plots/scatterplot.html"><strong aria-hidden="true">7.7.</strong> ScatterPlot</a></li><li class="chapter-item expanded "><a href="plots/statistics.html"><strong aria-hidden="true">7.8.</strong> Statistics</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">8.</strong> OGC Access</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">8.1.</strong> WMS</div></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">9.</strong> Solutions</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">9.1.</strong> Geo Engine Pro</div></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
