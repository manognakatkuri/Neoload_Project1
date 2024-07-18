var file = new java.io.File("C:\\Users\\E10688062\\Desktop\\Neoload\\outfile.csv");
var writer = new java.io.FileWriter(file,true);


var value1 = context.variableManager.getValue("Extr_sessionid");
var value2 = context.variableManager.getValue("LoginCheck");
writer.write(value1+","+value2+"\n");
//writer.write("Hello");
writer.close();
logger.debug("The values have been written to file");