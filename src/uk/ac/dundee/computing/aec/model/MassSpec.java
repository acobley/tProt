package uk.ac.dundee.computing.aec.model;

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
			double Y=getNormal((double)x);
			Point2D.Double point=  new Point2D.Double(x,Y);
			Points.add(point);
		}
		return Points;
	}
	
	double getNormal(double x){
		double Y;
		Y=1/(sd*Math.sqrt(2 * Math.PI))*Math.pow(Math.E,-1*Math.pow(x-mu,2)/(2*Math.pow(sd, 2)));
		return Y;
	}
}
