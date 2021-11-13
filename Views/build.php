<section class="build">
    <div class="build">
        <div class="config">
            <div class="background active"><i data-feather="plus"></i></div>
            <div class="background"><i data-feather="file"></i></div>
            <div class="background"><i data-feather="edit"></i></div>
            <div class="background"><i data-feather="folder"></i></div>
            <div class="background"><i data-feather="external-link"></i></div>
            <div class="background"><i data-feather="settings"></i></div>

        </div>
        <div id="panel" class="panel" onmousedown="get(event);">
            <form method="post" enctype="multipart/form-data">
            <div class="container flex">
                <span onclick="onpointer(event);" id="align-left"><i data-feather="align-left"></i></span>
                <span onclick="onpointer(event);" id="align-center"><i data-feather="align-center"></i></span>
                <span onclick="onpointer(event);" id="align-justify"><i data-feather="align-justify"></i></span>
                <span onclick="onpointer(event);" id="align-right"><i data-feather="align-right"></i></span>
            </div>

            <div class="container">
                <select>
                    <option>Inter</option>
                </select>
            </div>

            <div class="columns-two">
                <div class="container"><input type="number" onclick="onpointer(event);" id="input-weigth" placeholder="600" /></div>
                <div class="container"><input type="number" onclick="onpointer(event);" id="input-size" placeholder="56" /></div>
            </div>
            <div class="columns-two">
                <div class="container"><input type="number" onclick="onpointer(event);" id="input-line-height" placeholder="16" /></div>
                <div class="container"><input type="number" onclick="onpointer(event);" id="input-letter-spacing" placeholder="26" /></div>
            </div>
            
            <div class="separator"></div>
            <div class="columns-four">
                <div class="container" id="image" draggable="true" ondragstart="onDragStart(event);"><input type="file" name="file" id="file" /><label for="file"><i data-feather="image"></i></label></div>
                <div class="container" id="text" draggable="true" ondragstart="onDragStart(event);"><i data-feather="type"></i></div>
                <div class="container" id="video" draggable="true" ondragstart="onDragStart(event);"><i data-feather="video"></i></div>
                <div class="container" id="archive" draggable="true" ondragstart="onDragStart(event);"><input type="file" name="archive" id="archive" /><label for="archive"><i data-feather="archive"></i></label></div>
                <div class="container" id="box" draggable="true" ondragstart="onDragStart(event);"><i data-feather="box"></i></div>
                <div class="container" onclick="onpointer(event);" draggable="true" ondragstart="onDragStart(event);"><input type="checkbox" name="move-option" id="move-option" /><label for="move-option"><i data-feather="move"></i></label></div>
                <div class="container" onclick="onpointer(event);" draggable="true" ondragstart="onDragStart(event);"><input type="checkbox" name="minimize-option" id="minimize-option" /><label for="minimize-option"><i data-feather="minimize"></i></label></div>
                <div class="container" id="external-link" draggable="true" ondragstart="onDragStart(event);"><i data-feather="external-link"></i></div>
                <div class="container" onclick="onpointer(event);" draggable="true" ondragstart="onDragStart(event);"><input type="checkbox" name="trash-option" id="trash-option" /><label for="trash-option"><i data-feather="trash"></i></label></div>
                <div class="container" onclick="onpointer(event);" draggable="true" ondragstart="onDragStart(event);"><input type="checkbox" name="minus-option" id="minus-option" /><label for="minus-option"><i data-feather="minus"></i></label></div>
                <div class="container" onclick="onpointer(event);" draggable="true" ondragstart="onDragStart(event);"><input type="checkbox" name="navigation-option" id="navigation-option" /><label for="navigation-option"><i data-feather="navigation"></i></label></div>
                <div class="container" onclick="onpointer(event);" draggable="true" ondragstart="onDragStart(event);"><input type="checkbox" name="rotate-option" id="rotate-option" /><label for="rotate-option"><i data-feather="rotate-ccw"></i></label></div>
                <div class="container" onclick="onpointer(event);" draggable="true" ondragstart="onDragStart(event);"><input type="checkbox" name="rotateverso-option" id="rotateverso-option" /><label for="rotateverso-option"><i data-feather="rotate-cw"></i></label></div>
                <div class="container" onclick="onpointer(event);" draggable="true" ondragstart="onDragStart(event);"><input type="color" value="#fff" name="server-option" id="server-option" /><label for="server-option"><i data-feather="server"></i></label></div>
                <div class="container" onclick="onpointer(event);" draggable="true" ondragstart="onDragStart(event);"><input type="checkbox" name="slider-option" id="slider-option" /><label for="slider-option"><i data-feather="sliders"></i></label></div>
                <div class="container" id="terminal" draggable="true" ondragstart="onDragStart(event);"><i data-feather="terminal"></i></div>
            </div>
        </div>

        <div id="construct" ondragend="use();" class="construct">
            <div class="dropzone" ondragover="onDragOver(event);" ondrop="onDrop(event);"></div>
            <input type="submit" name="save" id="save" value="Save" />
            </form>
        </div>

    </div>
</section>
<script src="<?php echo INCLUDE_PATH ?>js/script.js"></script>
