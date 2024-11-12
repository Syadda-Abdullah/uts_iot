fetch('http://127.0.0.1:5000/data')
    .then(response => response.json())
    .then(data => {
        // Memasukkan data ke dalam HTML
        document.getElementById('suhuMax').textContent = data.suhumax + "°C";
        document.getElementById('suhuMin').textContent = data.suhumin + "°C";
        document.getElementById('suhuRata').textContent = data.suhurata.toFixed(2) + "°C";

        // Tampilkan detail nilai_suhu_max_humid_max
        const suhuMaxHumidMaxList = document.getElementById('suhuMaxHumidMaxList');
        data.nilai_suhu_max_humid_max.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>Index: ${item.idx}</span>
                <span>Suhu: ${item.suhu}°C</span>
                <span>Humid: ${item.humid}%</span>
                <span>Kecerahan: ${item.kecerahan}</span>
                <span>Timestamp: ${item.timestamp}</span>
            `;
            suhuMaxHumidMaxList.appendChild(li);
        });

        // Tampilkan month_year_max
        const monthYearMaxList = document.getElementById('monthYearMaxList');
        data.month_year_max.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `Month-Year: ${item.month_year}`;
            monthYearMaxList.appendChild(li);
        });
    })
    .catch(error => console.error('Error:', error));
