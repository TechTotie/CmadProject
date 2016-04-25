package com.service.dao;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;

import com.mydomain.service.HibernateUtil;
import com.mydomain.service.Users;


public class UserDao {

	public Users getUser(Integer id) {
		System.out.println("Dao Get User\n");
		Session ses = HibernateUtil.currentSession();
		try {
			Criteria crit =  ses.createCriteria(Users.class);
			crit.add(Restrictions.idEq(id));
			Users u = (Users)crit.uniqueResult();
			return u;
		} finally {
			HibernateUtil.closeSession();
		}
	}

	public List<Users> getUsers() {
		System.out.println("Dao Get Users\n");
		Session ses = HibernateUtil.currentSession();
		try {
			return ses.createCriteria(Users.class).list();
		} finally {
			HibernateUtil.closeSession();
		}
	}
	
	
	public void createUser(Users u){
		System.out.println("Creating user: "+u.getUsername());
		Session ses = HibernateUtil.currentSession();
		try {
			Transaction tx = ses.beginTransaction();
			ses.save(u);
			tx.commit();
		}finally{
			HibernateUtil.closeSession();
		}
	}
	
	public Boolean validateUser(Users u){
		System.out.println("Validating user: "+u.getUsername());
		List<Users> userlist = getUsers();
		for (int i = 0; i < userlist.size(); i++) {
			if(userlist.get(i).getUsername().equals(u.getUsername()))
				if(userlist.get(i).getPassword().equals(u.getPassword()))
					return true;
		}
		return false;
	}
	
	public Boolean createValidUser(Users u){
		System.out.println("Validating user: "+u.getUsername());
		List<Users> userlist = getUsers();
		for (int i = 0; i < userlist.size(); i++) {
			if(userlist.get(i).getUsername().equals(u.getUsername()))
				return false;
		}
		createUser(u);
		return true;
	}
	
	public void updateUser(Users u){
		System.out.println("Updating user: "+u.getUsername());
		Session ses = HibernateUtil.currentSession();
		try {
			Transaction tx = ses.beginTransaction();
			ses.update(u);
			tx.commit();
		}finally{
			HibernateUtil.closeSession();
		}
	}
	
	public boolean deleteUser(@PathParam("param") Integer id) {
		System.out.println("Deleting user: "+id);
		Session ses = HibernateUtil.currentSession();
		try {
			Transaction tx = ses.beginTransaction();
			Users u = (Users) ses.load(Users.class, id);
			ses.delete(u);
			tx.commit();
			return true;
		} finally {
			HibernateUtil.closeSession();
		}
	}
	
}


