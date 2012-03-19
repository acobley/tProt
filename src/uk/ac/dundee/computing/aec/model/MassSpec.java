package uk.ac.dundee.computing.aec.model;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.awt.geom.Point2D;
import java.awt.geom.Point2D.Double;


public class MassSpec {
	double sd=1;
	double mu=50;
	public MassSpec(){
		
	}

	
	public List <Point2D.Double> getMassSpec(){
		//This is a dummy class returning a Pseudo MAssSpec
		List <Point2D.Double> Points= new LinkedList<Point2D.Double>();
		for (int x=0;x<100;x++){
			double Y=getNormal((double)x,2,20,100);
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
			y=y+getNormal((double)x,2.5,40,70);
			y=y+getNormal((double)x,3.0,60,50);
			y=y+getNormal((double)x,4.5,80,30);
			point.setLocation(x, y);
			Points.set(index,point);
		}
		return Points;
	}
	
	double getNormal(double x,double sd, double mu,double height){
		double Y;
		Y=100.0*1/(sd*Math.sqrt(2 * Math.PI))*Math.pow(Math.E,-1*Math.pow(x-mu,2)/(2*Math.pow(sd, 2)));
		return Y;
	}
}
