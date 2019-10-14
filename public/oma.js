

//$(function(){
    const restUrl = 'http://127.0.0.1:3001/api/blogs'
    var xhr = new XMLHttpRequest();
    var counterId=0;
    var lista=[];
    function Topic(counterId, blogT, blogD, blogSl, blogEl, blogTm, blogTs, blogSrc, blogProg){
        this.id = counterId;
        this.Title = blogT;
        this.Description = blogD;
        this.StartLearn = blogSl;
        this.EndLearn = blogEl;
        this.TimeToMaster = blogTm;
        this.TimeSpent = blogTs;
        this.source = blogSrc;
        this.progress = blogProg;
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            var jsonOlio = JSON.parse(xhr.responseText);
            console.dir(jsonOlio);
            $(function(){
                $('#title')
                        .attr('value', 'Title');
                        $('#desc')
                        .attr('value', 'Description');
                        $('#timeM')
                        .attr('placeholder', 'TimeToMaster');
                        $('#timeS')
                        .attr('placeholder', 'TimeSpent');
                        $('#srcUrl')
                        .attr('value', 'Source');
            
                $(function(){
                    $('#nappi').on('click', function(){
                        let counter = 0;
                        counter++;
                        let blogT = $('#title').val();
                        let blogD = $('#desc').val();
                        let blogTm = $('#timeM').val();
                        let blogTs = $('#timeS').val();
                        let blogSrc = $('#srcUrl').val();
                        let blogSl = $('#startL').val();
                        let blogEl = $('#endL').val();
                        /*let $arr = {title: $title, Description: $desc, TimeToMaster: $timeM, TimeSpent: $timeS, 
                        Source: $srcUrl, StartLearn: $startL, EndLearn: $endL};*/

                        
                       // $data = new 
                       
                       var $data;
                       $data = new Topic(counterId, blogT, blogD, blogSl, blogEl, blogTm, blogTs, blogSrc, blogProg)
                       $.ajax({
                        url: 'http://127.0.0.1:3001/api/blogs/' + counterId++,
                        type: 'POST',
                        contentType: 'application/json',
                        data : JSON.stringify($data),

                    }).done(function(){
                        console.log("Lisäys onnistui!");
                        //$('#autot').load(location.href+"#autot","");
                    }).fail(function(){
                        console.log("Lisäys Epäonnistui!");
                    })
            })
                       for(var i =0;i<jsonOlio.length;i++){
                           var prog="";
                           if (document.getElementById('prog').checked){
                               prog = "In progress";
                           }
                           else {
                               prog = "Completed";
                           }
                         blogI = jsonOlio[i].id;
                         blogT = jsonOlio[i].Title;
                         blogD = jsonOlio[i].Description;
                         blogSl = jsonOlio[i].StartLearn;
                         blogEl = jsonOlio[i].EndLearn;
                         blogTm = jsonOlio[i].TimeToMaster;
                         blogTs = jsonOlio[i].TimeSpent;
                         blogSrc = jsonOlio[i].source;
                        var blogProg = prog;
                        var uJ = document.createElement("LI");
                        
                        $('#nappi').attr('class', 'btn');
                                //var ank = document.createElement("a");
                        uJ.innerText = `Title: ${blogT}
                         Description: ${blogD}
                         Time to master : ${blogTm}$
                         Time spent: ${blogTs}
                         Start date: ${blogSl}
                         End date: ${blogEl}
                         In progress: ${blogProg}  
                        `;
                        //btn.innerText = "OSTA!";
                       document.getElementById("#blogit").appendChild(uJ);
                        //$(btn)
                               // .appendTo('#blogit').text('POISTO!').attr('id', nappiId++);
                        
            
            
            
            
            
            
            
                       /* const trimmedS = $startL.replace(/-/g, ',');
                        const trimmedE = $endL.replace(/-/g, ',');
                        console.log(trimmedS);
                        var dS = new Date(trimmedS);
                        var dL = new Date(trimmedE);
                        var dLForm = new Intl.DateTimeFormat('fi').format(dL);
                        var dSForm = new Intl.DateTimeFormat('fi').format(dS);
                        console.log(dSForm);
                        console.log(Date.parse($startL));*/
                       
                        
                        
                    }
                })
                
            })}
        }
    
    xhr.open("GET",restUrl);
    xhr.send(null);
//})



