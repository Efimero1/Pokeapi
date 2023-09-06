package Controladores;

import config.Conexion;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.servlet.http.HttpServletRequest;


public class Validar extends Conexion{

    public static boolean estaAutenticado(HttpServletRequest request) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }
    
    public boolean autenticacion(String correo, String contraseña) throws SQLException{
        
        PreparedStatement ps = null;
        ResultSet rs = null;
        
        try {
            String validar = "select * from entrenadores where Correo = ? and Contraseña = ?";
            ps = getConnection() .prepareStatement(validar);
            ps.setString(1,correo);
            ps.setString(2,contraseña);
            rs = ps.executeQuery();
            
            if(rs.absolute(1)){
                
                return true;
            }
            
         }catch(Exception e){
                    System.err.println("Error" + e);
            }finally{
                  try{
                    if(getConnection() !=null) getConnection().close();
                    if(ps != null) ps.close();
                    if(rs != null) rs.close();
                           
                  
                  }catch(Exception e){
                       System.err.println("Error" + e);
                  }
        }
        
        return false;
    
        }
    
    public boolean Registrar(String nombre, String usuario, String correo, String contraseña){
        
        PreparedStatement ps = null;
        try {
            
            String validar = "insert into entrenadores (Nombre, Usuario, Correo, Contraseña) Values(?, ?, ?, ?)";
            ps = getConnection().prepareStatement(validar);
            ps.setString(1, nombre);
            ps.setString(2, usuario);
            ps.setString(3, correo);
            ps.setString(4, contraseña);
            
            if(ps.executeUpdate()==1){
                
                return true;
            }
            
        }catch(Exception ex){
            System.err.println("Error" + ex);
        }finally{
            
            try{
                    if(getConnection() !=null) getConnection().close();
                    if(ps != null) ps.close();
             
            }catch(Exception e){
                       System.err.println("Error" + e);
                       
                  }
        }
            
        
        return false;
    
    }
    
    public static void main(String[]args){
        
        Validar vl = new Validar();
        System.out.println(vl.Registrar("juan", "juan1","juan@gmail.com", "123"));
    }
   
    
    
}
    
    
