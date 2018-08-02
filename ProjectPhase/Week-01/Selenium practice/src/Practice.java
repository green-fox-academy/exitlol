import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class Practice {

  WebDriver driver;

  public void callBrowser() {
    try {
      System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\chromedriver.exe");
      driver = new ChromeDriver();
      driver.manage().deleteAllCookies();
      driver.manage().window().maximize();
      driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
      driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);

      driver.get("http://todomvc.com/examples/vanillajs/");
      addToDo();
      countToDo();


    } catch (Exception e) {
      e.printStackTrace();
    }

  }

  public void addToDo() {
    driver.findElement(By.xpath("/html/body/section/header/input")).sendKeys("Arrive in time", Keys.ENTER);
    driver.findElement(By.xpath("/html/body/section/header/input")).sendKeys("Practice Java & Selenium", Keys.ENTER);
    driver.findElement(By.xpath("/html/body/section/header/input")).sendKeys("Practice more", Keys.ENTER);
  }

  public void countToDo() {
    WebElement counter = driver.findElement(By.xpath("/html/body/section/footer/span/strong"));
    String counterText = counter.getText();
    System.out.println(counterText);

  }

  public static void main(String[] args) {
    Practice myObj = new Practice();
    myObj.callBrowser();

  }
}
