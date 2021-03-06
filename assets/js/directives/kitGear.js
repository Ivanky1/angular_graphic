module.exports = ['d3Factory', 'kitSystemShapeDrawerFactory',
    function(d3Factory, drawer){

        // DDO - Directive Definition Object
        return {
            scope: true,
            restrict: 'A',
            priority: 2,

            // $scope - модель директивы
            // $element - DOM-элемент с директивой, обернут jqLite
            // $attrs - массив атрибутов на DOM-элементе
            link: function($scope, $element, $attrs){
                d3Factory.d3().then(function(d3) {
                    $scope.shape.moniker = 'core.gear';

                    $scope.shape.svg.shapeObject = drawer.drawGearWheel(
                        d3,
                        $scope.shape.svg.d3Object,
                        $scope.editor.features.pixelsPerMmX,
                        $scope.editor.features.pixelsPerMmY,
                        8,
                        5,
                        9,
                        2,
                        {innerRadius: 2.5, outerRadius: 5},
                        {innerRadius: 2.5, outerRadius: 8 }
                    );

                    var speed = 0.05;
                    var start = Date.now();
                    d3.timer(function() {
                        $scope.shape.svg.shapeObject.attr('transform', 'rotate('+(Date.now() - start)*speed +')');
                    })


                })
            }
        }
    }
];


