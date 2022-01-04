quick_draw_data_set=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple"];
random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1);
Element_of_array = quick_draw_data_set[random_number];
document.getElementById("sketch_to_be_drawn").innerHTML ="sketch to be drawn:"+Element_of_array;

timer_counter = 0;
timer_check="";
drawn_sketch="";
answer_holder="";
score = 0;
sketch=Element_of_array;
 


function draw(){
        
                
                check_sketch();
                
                strokeWeight(13);
                stroke(0);
                if(mouseIsPressed){
                    line(pmouseX,pmouseY,mouseX,mouseY);
                    
            }
        }
            
   

function check_sketch(){
    
    timer_counter++;
    document.getElementById("timer").innerHTML="Timer:"+timer_counter;
    if(timer_counter>1000){
        document.getElementById("label").innerHTML="your sketch: ";
        document.getElementById("confidence").innerHTML="Confidence: ";
        timer_counter = 0;
        timer_check = "completed";
    }
    if(timer_check == "completed" || answer_holder =="set"){
        timer_check="";
        answer_holder="";
        updateCanvas();

    }
}
    function updateCanvas(){
        background("white");
        quick_draw_data_set=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple"];
        random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1);
        Element_of_array = quick_draw_data_set[random_number];
        sketch= Element_of_array;
        document.getElementById("sketch_to_be_drawn").innerHTML ="sketch to be drawn:"+sketch;
    }


      
        function setup(){
            canvas =createCanvas(400,500);
            canvas.center();
            background("white");
            
            }

    
  
        
        
        

    
    
    
        

