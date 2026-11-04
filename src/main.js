import './style.css'

const KEY = 'reports'

function getReports() {
  return JSON.parse(localStorage.getItem(KEY)) || []
}

function saveReport(report) {
  const reports = getReports()
  reports.push(report)
  localStorage.setItem(KEY, JSON.stringify(reports))
}

document.querySelector('#report-form').addEventListener('submit', (e) => {
  e.preventDefault()
  const data = Object.fromEntries(new FormData(e.target))
  data.id = Date.now()
  data.date = new Date().toISOString()

  saveReport(data)
  alert('Report submitted. Thank you!')
  e.target.reset()
})