$(document).ready(function() {
    // Hide all jackets initially
    $(".jacket").hide();

    // Swatch click events to show corresponding jackets
    $("#blackswatch").click(function() {
        $(".jacket").hide();  // Hide all jackets
        $("#blackjacket").show();  // Show black jacket
    });

    $("#blueswatch").click(function() {
        $(".jacket").hide();
        $("#bluejacket").show();
    });

    $("#redswatch").click(function() {
        $(".jacket").hide();
        $("#redjacket").show();
    });

    $("#purpleswatch").click(function() {
        $(".jacket").hide();
        $("#purplejacket").show();
    });

    $("#greenswatch").click(function() {
        $(".jacket").hide();
        $("#greenjacket").show();
    });

    // Enable dragging and dropping small patches (smpatch)
    $('.smpatch').on('dragstart', function (e) {
        e.originalEvent.dataTransfer.setData('text', $(this).attr('id')); // Set the patch ID
    });

    // Enable dragging and dropping back patches (backpatch)
    $('.backpatch').on('dragstart', function (e) {
        e.originalEvent.dataTransfer.setData('text', $(this).attr('id')); // Set the patch ID
    });

    // Allow dropping patches onto the jacket
    $('.jacket').on('dragover', function (e) {
        e.preventDefault(); // Allow drop
    }).on('drop', function (e) {
        e.preventDefault();
        const patchId = e.originalEvent.dataTransfer.getData('text');
        const $patch = $(`#${patchId}`).clone().addClass('draggable'); // Clone the patch

        // Get drop coordinates relative to the jacket
        const rect = this.getBoundingClientRect();
        const x = e.originalEvent.clientX - rect.left;
        const y = e.originalEvent.clientY - rect.top;

        $patch.css({
            left: x + 'px',
            top: y + 'px',
            position: 'absolute',
        }).draggable(); // Make the dropped patch draggable

        $(this).append($patch); // Add the patch to the jacket
    });

    // Allow repositioning of patches
    $(document).on('mousedown', '.draggable', function (e) {
        const $patch = $(this);
        const offset = $patch.offset();
        const offsetX = e.pageX - offset.left;
        const offsetY = e.pageY - offset.top;

        $(document).on('mousemove', function (event) {
            $patch.css({
                left: event.pageX - offsetX + 'px',
                top: event.pageY - offsetY + 'px',
            });
        }).on('mouseup', function () {
            $(document).off('mousemove mouseup'); // Stop repositioning
        });
    });
});
