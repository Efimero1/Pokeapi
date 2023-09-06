
package config;

import java.sql.Connection;
import javax.swing.JOptionPane;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    public static final String URL = "jdbc:mysql://localhost:3306/pokemon";
    public static final String USER = "root";
    public static final String CLAVE = "";
     
    Connection con;
    
    
    
   public Connection Conectar() throws SQLException{
        
        try{
            Class.forName("com.mysql.jdbc.Driver");
            con = (Connection) DriverManager.getConnection(URL, USER, CLAVE);
        }catch(ClassNotFoundException e){
            JOptionPane.showMessageDialog(null, "Error de conexion: " );
        }
        return con;
}

    public Connection getConnection() {
        try {
            return Conectar();
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null, "Error de conexión: " + ex.getMessage());
            return null;
        
       }

    }
    
}


