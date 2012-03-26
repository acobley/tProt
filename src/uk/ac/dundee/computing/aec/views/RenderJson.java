package uk.ac.dundee.computing.aec.views;

import java.awt.geom.Point2D;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONTokener;

import java.util.*;
import java.lang.reflect.*;
import java.io.PrintWriter;

/**
 * Servlet implementation class RendorJava
 */
@WebServlet("/RenderJson")
public class RenderJson extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RenderJson() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Object temp=request.getAttribute("Data");
		Class c = temp.getClass();
		String className=c.getName();
		System.out.println("Class Name "+className);
		if (className.compareTo("[Ljava.util.LinkedList;")==0){ 
			//System.out.println("Dealing with array of list");
			List Data[] = (List[])request.getAttribute("Data");
			JSONObject JSONTop=new JSONObject();
			JSONArray Parts=new JSONArray();
			JSONObject Count=new JSONObject();
			try{
			   //Count.put("Count", );
			   JSONTop.put("Count",Data.length);
			}catch(Exception et){
				System.out.println("Can't package count"+et);
			}
			for (int i=0; i< Data.length;i++){
				if (Data[i] !=null){
				   c = Data[i].getClass();
				   className=c.getName();
				   System.out.println("Class Name["+i+"]"+className);
				   JSONObject JSONObj = ProcessList(Data[i],i);
				   Parts.put(JSONObj);
				}
			}
			try{
				JSONTop.put("Array",Parts);
			}catch(Exception et){
				System.out.println("Can't package array"+et);
			}
			if (JSONTop!=null){
				PrintWriter out = response.getWriter();
				out.print(JSONTop);
			}	
			
	    }else if (className.compareTo("java.util.LinkedList")==0){ //Deal with a linked list
			List Data = (List)request.getAttribute("Data");
			JSONObject JSONObj = ProcessList(Data,-1);
			if (JSONObj!=null){
				PrintWriter out = response.getWriter();
				out.print(JSONObj);
			}	
			
		}else{
			Object Data=request.getAttribute("Data");
			JSONObject obj =ProcessObject(Data);
			if (obj!=null){
				PrintWriter out = response.getWriter();
				out.print(obj);
			}	
		}
	}

	
	private JSONObject ProcessList(List Data,int i){
		
		Iterator iterator;
		JSONObject JSONObj=new JSONObject();
		JSONArray Parts=new JSONArray();
		iterator = Data.iterator();     
		while (iterator.hasNext()){
			Object Value=iterator.next();
			Class c = Value.getClass();
			String className=c.getName();
			System.out.println("List Class Name "+className);
			if (className.compareTo("[Ljava.awt.geom.Point2D$Double;")!=0){
				JSONObject obj =ProcessObject(Value);
				try {
					Parts.put(obj);
				}catch (Exception JSONet){
	     			System.out.println("JSON Fault"+ JSONet);
	     		}
			}
			else {
				try{
				    JSONArray Array = new JSONArray( Value);
				    Parts.put(Array);
				}catch (Exception et){
					System.out.println("Can't create Json Array " +et);
				}
			}

		}
		try{
			
				JSONObj.put("Data",Parts);
		}catch (Exception JSONet){
 			System.out.println("JSON Fault"+ JSONet);
 		}
		return JSONObj;
	}
	
	private JSONObject  ProcessObject(Object Value){
		JSONObject Record=new JSONObject();
		
		try {
            Class c = Value.getClass();
            Method methlist[] = c.getDeclaredMethods();
            for (int i = 0; i < methlist.length; i++) {  
            	 Method m = methlist[i];
            	 //System.out.println(m.toString());
            	 String mName=m.getName();
            	
                 if (mName.startsWith("get")==true){
                	 String Name=mName.replaceFirst("get", "");
                	 //Class pvec[] = m.getParameterTypes(); //Get the Parameter types
	                 //for (int j = 0; j < pvec.length; j++)
	                 //   System.out.println("param #" + j + " " + pvec[j]);
	                 //System.out.println(mName+" return type = " +  m.getReturnType());
	                 Class partypes[] = new Class[0];
	                 Method meth = c.getMethod(mName, partypes);
	                
	                 Object rt= meth.invoke(Value);
	                 if (rt!=null){
	                	 //System.out.println(Name+" Return "+ rt);
	                	 try{
	                		 Record.put(Name,rt);
	                	 }catch (Exception JSONet){
	             			System.out.println("JSON Fault"+ JSONet);
	             			return null;
	             		}
	             	
	                 }
                 }
            }
            
            
         }
         catch (Throwable e) {
            System.err.println(e);
         }
         return Record;
	}

}
