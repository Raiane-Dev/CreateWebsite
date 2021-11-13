function onDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
    
  el = event.srcElement.id;
  
}

function get(event){
  var el = event.target;
  var id = el.id;
  var dropzone = document.querySelector('.dropzone');
  var draggableElement = document.getElementById(id);
  var elementClone = draggableElement.cloneNode(true);
  elementClone.classList.add(id,'specific-'+Math.floor(Math.random() * 999));

  el.addEventListener('dragend', (e) => {
  dropzone.appendChild(elementClone);



  if(id == 'text'){
    var clones_result = document.querySelectorAll('.text');
    [].forEach.call(clones_result, function(clone){
      clone.innerHTML = '<div class="box" ondragend="use(event);" ondrop="onDrop(event);"><p class="editable" contenteditable="true"></p></div>';
    });
  }
  else if(id == 'video'){
    var name_video = prompt('Digite a url de seu vídeo');
    document.querySelector('.video').innerHTML = '<div class="box" ondragend="use(event);" ondrop="onDrop(event);"><iframe width="100%" height="50vh" src="'+name_video+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
  }
  else if(id == 'archive'){
    var archive = prompt('Digite a url do arquivo');
    document.querySelector('.archive').innerHTML = '<div class="box" ondragend="use(event);" ondrop="onDrop(event);"><iframe width="100%" height="100%" src="assets/'+archive+'"></iframe></div>';
  }
  else if(id == 'box'){
    var boxes = document.querySelectorAll('.box');
    [].forEach.call(boxes, function(box){
      box.innerHTML = '<div class="box" ondragend="use(event);" contentEditable="true" ondrop="onDrop(event);"></div>';
    });
  }
  else if(id == 'external-link'){
    var link = prompt('Link:');
    document.querySelector('.external-link').innerHTML = '<div class="box" ondragend="use(event);" ondrop="onDrop(event);"><a href="'+link+'">'+link+'</a></div>';
  }
  else if(id == 'terminal'){
    document.querySelector('.terminal').innerHTML = '<div class="box" ondragend="use(event);" ondrop="onDrop(event);"><p contentEditable="true" style="color: green;"></p></div>';
  }

})
}


  function onpointer(event){

    var sliderOption = document.getElementById('slider-option');
    var serverOption = document.getElementById('server-option');
    var rotateOption = document.getElementById('rotate-option');
    var rotateVersoOption = document.getElementById('rotateverso-option');
    var navigationOption = document.getElementById('navigation-option');
    var moveOption = document.getElementById('move-option');
    var trashOption = document.getElementById('trash-option');
    var minusOption = document.getElementById('minus-option');

    var alignLeft = document.getElementById('align-left');
    var alignCenter = document.getElementById('align-center');
    var alignRight = document.getElementById('align-right');
    var alignJustify = document.getElementById('align-justify');

    var inputSize = document.getElementById('input-size');
    var inputWeigth = document.getElementById('input-weigth');
    var inputLineHeight = document.getElementById('input-line-height');
    var inputLetterSpacing = document.getElementById('input-letter-spacing');

    var dropzone = document.querySelector('.dropzone');

    
    if(sliderOption.checked){
      alert('Does nothing');
    }
    else if(serverOption.checked){
      colorElement = serverOption.value;
      console.log(colorElement);
      dropzone.onclick = function(event){
        let el = event.target;
        dropzone.querySelector('.'+el.className).style.color = colorElement;
      }
    }
    else if(rotateOption.checked){
      dropzone.onclick = function(event){
        let el = event.target;
        dropzone.querySelector('.'+el.className).style.transform = "rotate(180deg)";
      }
    }
    else if(rotateVersoOption.checked){
      dropzone.onclick = function(event){
        let el = event.target;
        dropzone.querySelector('.'+el.className).style.transform = "rotate(90deg)";
      }
    }
    else if(navigationOption.checked){
      dropzone.onclick = function(event){
        let el = event.target;
        dropzone.querySelector('.'+el.className).style.position = "absolute";
      }
    }
    else if(moveOption.checked){
      dropzone.onclick = function(event){
      let el = event.target;
      var dragMe = document.querySelector('.'+el.className);
        dragMe.style.userSelect = 'none';
        dragMe.style.position = 'absolute';
        dragOfX = 0,
        dragOfY = 0;
      function dragStart(e) {
          dragOfX = e.pageX - dragMe.offsetLeft;
          dragOfY = e.pageY - dragMe.offsetTop;
          addEventListener("mousemove", dragMove);
          addEventListener("mouseup", dragEnd);
      }
      function dragMove(e) {
          dragMe.style.left = (e.pageX - dragOfX) + 'px';
          dragMe.style.top = (e.pageY - dragOfY) + 'px';
      }
      function dragEnd() {
          removeEventListener("mousemove", dragMove);
          removeEventListener("mouseup", dragEnd);
      }
      dragMe.addEventListener("mousedown", dragStart);
    }
  }
    else if(trashOption.checked){
      dropzone.onclick = function(event){
        let el = event.target;
        node = dropzone.querySelector('.'+el.className);
        if(node.parentNode){
          node.parentNode.removeChild(node);
        }
      }
    }
    else if(sliderOption.checked){
      alert('Does nothing');
    }
    else if(minusOption.checked){
      dropzone.onclick = function(event){
        let el = event.target;
        dropzone.querySelector('.box').style.transform = 'scale(-0.8)';
      }
    }

    if(alignLeft.onclick){
      dropzone.onclick = function(event){
        let el = event.target;
        dropzone.querySelector('.'+el.className).style.textAlign = 'left';
        dropzone.querySelector('.'+el.className).style.justifyContent = 'left';
      }
    }
    else if(alignCenter.onclick){
      dropzone.onclick = function(event){
        let el = event.target;
        dropzone.querySelector('.'+el.className).style.textAlign = 'center';
        dropzone.querySelector('.'+el.className).style.justifyContent = 'center';
      }
    }
    else if(alignRight.onclick){
      dropzone.onclick = function(event){
        let el = event.target;
        dropzone.querySelector('.'+el.className).style.textAlign = 'right';
        dropzone.querySelector('.'+el.className).style.justifyContent = 'right';
      }
    }
    else if(alignJustify.onclick){
      dropzone.onclick = function(event){
        let el = event.target;
        dropzone.querySelector('.'+el.className).style.textAlign = 'justify';
        dropzone.querySelector('.'+el.className).style.justifyContent = 'stretch';
      }
    }

    inputSize.addEventListener('keydown', (event) => {
      dropzone.onclick = function(event){
        let el = event.target;
        dropzone.querySelector('.'+el.className).style.fontSize = ''+inputSize.value+'px';
     }});
    inputWeigth.addEventListener('keydown', (e) => {
      dropzone.onclick = function(event){
        let el = event.target;
        dropzone.querySelector('.'+el.className).style.fontWeight = ""+inputWeigth.value+"";
    }});
    inputLineHeight.addEventListener('keydown', (e) => {
      dropzone.onclick = function(event){
        let el = event.target;
        dropzone.querySelector('.'+el.className).style.lineHeight = ''+inputLineHeight.value+'px';
      }});
    inputLetterSpacing.addEventListener('keydown', (e) => {
      dropzone.onclick = function(event){
        let el = event.target;
        dropzone.querySelector('.'+el.className).style.letterSpacing = ''+inputLetterSpacing.value+'px';
      }});
    
  }

  
  function use(event){
  document.querySelectorAll('.dropzone').forEach( function(move){
    move.addEventListener("dragend", function(event){
       el = event.target;
      dropzone = document.querySelector('.dropzone');
    });
      var children = dropzone.querySelector('.'+el.className.replaceAll(' ', '.'));
      console.log(children);
      return dropzone.appendChild(children);
  });
}


function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  
  event.dataTransfer.clearData();
}


  /*AJAX*/

  document.getElementById('file').addEventListener('change', (e) => {
    e.preventDefault();
    let file = document.getElementById('file').files[0];
    let formData = new FormData();
    
    formData.append('file', file);

    let xhr = new XMLHttpRequest();
    xhr.open('POST','http://localhost/Curso/Projeto/CreateWebsite/js/ajax.php',true);

    xhr.onreadystatechange = () => {
      if(xhr.readyState == 4){
        if(xhr.status == 200){
          var img = document.createElement('div');
          img.classList.add('image','box');
          document.querySelector('.dropzone').appendChild(img);
          document.querySelector('.image').innerHTML = '<image src="http://localhost/Curso/Projeto/CreateWebsite/assets/'+xhr.responseText+'" />';
          console.log(xhr.responseText);
        }
      }
    };

    xhr.send(formData);

  });

  document.getElementById('save').addEventListener('click', (e) => {
    e.preventDefault();
    var name_file = prompt("Digite o nome da sua página:");
    var dad = document.querySelector('.dropzone');
    var children = dad.querySelectorAll('.container');
    [].forEach.call(children, function(attr){
      attr.removeAttribute('draggable');
      attr.removeAttribute('ondragstart');
      attr.removeAttribute('ondragend');
    });
    var children_two = dad.querySelectorAll('p');
    [].forEach.call(children_two, function(attr_two){
      attr_two.removeAttribute('contenteditable');
    });
    var children_three = dad.querySelectorAll('.box');
    [].forEach.call(children_three, function(attr_three){
      attr_three.removeAttribute('ondragend');
      attr_three.removeAttribute('ondrop');
    });
    document.querySelector('div.dropzone div.container').style.resize = "none";
    document.querySelector('div.image.box').style.resize = "none";

    var content = document.querySelector('.dropzone').innerHTML;
    var styles = '';
    let myRules = document.styleSheets[0].cssRules;
    [].forEach.call(myRules, function(rule){
     styles += rule.cssText;
    });

      let xhr = new XMLHttpRequest();
      let formData = new FormData();
      formData.append('content',content);
      formData.append('name_file',name_file);
      formData.append('styles',styles);
      formData.append('save',save);

      xhr.open('POST','http://localhost/Curso/Projeto/CreateWebsite/js/ajax.php',true);

      xhr.onreadystatechange = () => {
        if(xhr.readyState == 4){
          if(xhr.status == 200){
            console.log(xhr.responseText);
            alert("Success");
          }
        }
      }
      xhr.send(formData);
  });