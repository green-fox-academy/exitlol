import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import java.util.concurrent.TimeUnit;

public class Practice {

  WebDriver driver;
  Actions action;

  public void callBrowser() {
    try {
      System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\chromedriver.exe");
      driver = new ChromeDriver();
      action = new Actions(driver);
      driver.manage().deleteAllCookies();
      driver.manage().window().maximize();
      driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
      driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);

      driver.get("http://todomvc.com/examples/vanillajs/");
      addToDo();
      countToDo();
      editToDo();
      completeToDo();
      showActive();
      showCompleted();
      showAll();
      clearCompleted();
      addMore();
      completeToDo();
      untickCompleted();

    } catch (Exception e) {
      e.printStackTrace();
    }

  }

  public void addToDo() {
    driver.findElement(By.xpath("/html/body/section/header/input")).sendKeys("Arrive in thime", Keys.ENTER);
    driver.findElement(By.xpath("/html/body/section/header/input")).sendKeys("Practice Java & Selenium", Keys.ENTER);
    driver.findElement(By.xpath("/html/body/section/header/input")).sendKeys("Practice more", Keys.ENTER);
  }

  public void countToDo() {
    WebElement counter = driver.findElement(By.xpath("/html/body/section/footer/span/strong"));
    String counterText = counter.getText();
    System.out.println(counterText);
  }

  public void editToDo() {
    WebElement editable = driver.findElement(By.xpath("/html/body/section/section/ul/li[1]/div"));
    action.doubleClick(editable);
  }

  public void completeToDo() {
    driver.findElement(By.xpath("/html/body/section/section/ul/li[1]/div/input")).click();
  }

  public void untickCompleted() throws InterruptedException {
    WebElement compTask = driver.findElement(By.className("completed"));
    Thread.sleep(2000);
    compTask.findElement(By.cssSelector(".toggle")).click();
  }

  public void clearCompleted() throws InterruptedException {
    WebElement clearBtn = driver.findElement(By.className("clear-completed"));
    Thread.sleep(2000);
    clearBtn.click();
  }

  public void showAll() throws InterruptedException {
    driver.get("http://todomvc.com/examples/vanillajs/#/");
    Thread.sleep(2000);
  }

  private void showActive() throws InterruptedException {
    driver.get("http://todomvc.com/examples/vanillajs/#/active");
    Thread.sleep(2000);
  }

  public void showCompleted() throws InterruptedException {
    driver.get("http://todomvc.com/examples/vanillajs/#/completed");
    Thread.sleep(2000);
  }

  public void addMore() {
    driver.findElement(By.className("new-todo")).sendKeys("Testing some stuff", Keys.ENTER);
  }

  public static void main(String[] args) {
    Practice myObj = new Practice();
    myObj.callBrowser();

  }
}
