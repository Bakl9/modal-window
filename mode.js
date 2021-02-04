function createModal(options) {
    const madal = document.createElement( 'div')
    madal.classlist.add('vmodal')
    madal.insertAdjacentHTML("afterbegin",`
    <div class="madal-overlay">
        <div class="modal-window">
            <div class="madal-header">
                <span class="mode-title">Mode title</span>
                <span class="madal-close">&times;</span>
            </div>
            <div class="modal-body">
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
                           
            </div>
            <div class="madal-footer">
                <button>ok</button>
                <button>cancel</button>
            </div>
        </div>                
    </div>
`)
document.body.appendChild(modal)
return madal 
}


$.modal = function (options) {
    const $modal = _createModal(options)

    return {
        open() {
            $modal.classlist.add('open')
        },
        close() {
            $modal.classlist.remove('open')
        },
        destroy() {}
    }

}