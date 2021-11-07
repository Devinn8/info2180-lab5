<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$country = filter_input(INPUT_GET, 'country', FILTER_SANITIZE_STRING);
$context = filter_input(INPUT_GET, 'context', FILTER_SANITIZE_STRING);
//$stmt = $conn->query("SELECT * FROM countries");

//$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
$statement = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");
$trying = $conn->query("SELECT c.name, c.district, c.population FROM cities c JOIN countries w ON c.country_code=w.code WHERE w.name LIKE '%$country'");
$results = $statement->fetchAll(PDO::FETCH_ASSOC);
$tResults = $trying->fetchAll(PDO::FETCH_ASSOC);

?>


  <?php if($context=='cities'):?>
    <table class="center" >
      <thead>
        <tr>
          <th>Name</th>
          <th>District</th>
          <th>Population</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach($tResults as $city): ?>
          <tr>
            <td><?= $city['name']; ?></td>
            <td><?= $city['district']; ?></td>
            <td><?= $city['population']; ?></td>
          </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  <?php else: ?>
    <table class="center">
      <thead>
        <tr>
          <th>Name</th>
          <th>Continent</th>
          <th>Independence</th>
          <th>Head of State</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach($results as $row): ?>
          <tr>
            <td><?= $row['name']; ?></td>
            <td><?= $row['continent']; ?></td>
            <td><?= $row['independence_year']; ?></td>
            <td><?= $row['head_of_state']; ?></td>
          </tr>
        <?php endforeach; ?>
      </tbody>

    </table>
  <?php endif ;?>
