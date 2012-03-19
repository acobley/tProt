package uk.ac.dundee.computing.aec.model;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.awt.geom.Point2D;
import java.awt.geom.Point2D.Double;
 

public class MassSpec {
	
	
	double sd[]={0.01,0.01,0.01,0.01,0.01};
	double mu[]={1080.0156,1080.5170,1081.0184,1081.5200,1082.0219};
	double height[]={100,90,50,30,20};
	
	
	public MassSpec(){
		
	}

	
	public List <Point2D.Double> getMassSpec(){
		//This is a dummy class returning a Pseudo MAssSpec
		List <Point2D.Double> Points= new LinkedList<Point2D.Double>();
		for (double x=1079;x<1084;x=x+0.01){
			double Y=getNormal(x,sd[0],mu[0],height[0]);
			Point2D.Double point=  new Point2D.Double(x,Y);
			Points.add(point);
		}
		Iterator<Point2D.Double> iterator;
		iterator = Points.iterator(); 
		while (iterator.hasNext()){
			Point2D.Double point=(Point2D.Double)iterator.next();
			int index=Points.indexOf(point);
			double x=point.getX();
			double y=point.getY();
			for (int i=1;i<5;i++){
			   y=y+getNormal((double)x,sd[i],mu[i],height[i]);
			}
			point.setLocation(x, y);
			Points.set(index,point);
		}
		return Points;
	}
	
	public List <Point2D.Double> getIdentifedSpectra(){
		//This is a dummy class returning a Pseudo MAssSpec
		List <Point2D.Double> Points= new LinkedList<Point2D.Double>();
		for (int i=-2; i<3;i++){
			double x=i*sd[0]+mu[0];
			double Y=getNormal(x,sd[0],mu[0],height[0]);
			Point2D.Double point=  new Point2D.Double(x,Y);
			Points.add(point);
		}
		return Points;
	}
	
	double getNormal(double x,double sd, double mu,double height){
		double Y;
		Y=height*1/(sd*Math.sqrt(2 * Math.PI))*Math.pow(Math.E,-1*Math.pow(x-mu,2)/(2*Math.pow(sd, 2)));
		return Y;
	}
}
