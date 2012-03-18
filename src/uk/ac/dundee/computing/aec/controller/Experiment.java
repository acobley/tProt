package uk.ac.dundee.computing.aec.controller;

import java.awt.geom.Point2D;
import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.RequestDispatcher;

import uk.ac.dundee.computing.aec.util.*;
import uk.ac.dundee.computing.aec.model.*;
import java.util.LinkedList;

import java.awt.geom.Point2D;
import java.awt.geom.Point2D.Double;
/**
 * Servlet implementation class Experiment
 */
@WebServlet({ "/Experiment", "/Experiment/*" })
//Usage /Experiment/#Experiment/#stage

public class Experiment extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Experiment() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		String [] args= Convertors.SplitRequestPath(request);
		int argv =args.length;
		for (int i=0;i<argv;i++){
			System.out.println(i+" : "+ args[i]);
		}
		MassSpec ms = new MassSpec();
		List <Point2D.Double> Points = ms.getMassSpec();
		request.setAttribute("Data", Points);
		RequestDispatcher rdjson=request.getRequestDispatcher("/RenderJson");
		rdjson.forward(request,response);
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
