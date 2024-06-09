document.addEventListener('DOMContentLoaded', () => {
    const activities = [
        { name: 'Piłka nożna', points: 50, date: '2024-06-10' },
        { name: 'Kółko matematyczne', points: 30, date: '2024-06-15' },
        { name: 'Wolontariat', points: 70, date: '2024-06-20' },
    ];

    const students = [
        { name: 'Jan Kowalski', points: 100 },
        { name: 'Anna Nowak', points: 80 },
        { name: 'Piotr Wiśniewski', points: 60 },
    ];

    function renderActivities(sortBy) {
        const activityList = document.getElementById('activity-list');
        activityList.innerHTML = '';
        let sortedActivities = [...activities];
        
        if (sortBy === 'date') {
            sortedActivities.sort((a, b) => new Date(a.date) - new Date(b.date));
        } else if (sortBy === 'points') {
            sortedActivities.sort((a, b) => b.points - a.points);
        } else {
            sortedActivities.sort((a, b) => a.name.localeCompare(b.name));
        }

        sortedActivities.forEach(activity => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = `${activity.name} - ${activity.points} punktów - ${activity.date} <button class="btn btn-sm btn-primary">Zgłoś się</button>`;
            activityList.appendChild(li);
        });
    }

    function renderRanking() {
        const rankingList = document.getElementById('ranking-list');
        rankingList.innerHTML = '';
        
        students.sort((a, b) => b.points - a.points);

        students.forEach((student, index) => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = `${index + 1}. ${student.name} - ${student.points} punktów`;
            rankingList.appendChild(li);
        });
    }

    document.getElementById('sort').addEventListener('change', (e) => {
        renderActivities(e.target.value);
    });

    renderActivities('date');
    renderRanking();
});
