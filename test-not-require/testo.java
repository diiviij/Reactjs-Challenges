import java.util.Arrays;

public class testo {
    public static void main(String[] args){
        String name = "divij is";
        char[] name2 = new char[name.length()];
        int[] name4 = new int[name.length()];
        char[] name3 = name.toCharArray();
        Arrays.sort(name3);            int count =1;

        for(int i=0;i<name3.length;i++){
            for(int j=i;j<name3.length;j++){
                if(name3[i] == name3[j]){
                        count++;
            }
            else{
                name2[i] = name3[i];
                name4[i] = count;
                 count = 1;

            }
            }
           
        }

        for(int i=0;i<name.length();i++){
            System.out.print("*"+name2[i]);
            System.out.println(name4[i]);
        }
    }
}
