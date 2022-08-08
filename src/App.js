import react from "react";
import JOBS from './data.json';
import './App.css';

function App() {

	return (
		<div class="row">
			<div class="col left-sidebar filters">
				<div class="box">
					<h2>All Filters</h2>
				</div>
			</div>
			<div class="col contents">
				<div class="summery">1 - 20 of 6781 React.Js Jobs In Pune</div>
				<div class="jobs">
					{
						JOBS.map(job => {
							return (
								<div class="job">
									<h2 class="job-title">{job.name}</h2>
									
									{
										job.logo && (
											<img src={job.logo} />
										)
									}
									
									<div class="company-name"><a href="#">{job.company}</a></div>
									<div class="job-meta">
										<div class="exp">{job.experience}</div>
										<div class="salary">{job.salary}</div>
										<div class="loc">{job.location}</div>
									</div>
									<div class="job-description">{job.description}</div>
									<div class="skills">
										{
											job.skills.map(skill => {
												return (
													<div class="skill">{skill}</div>
												)
											})
										}
									</div>
									<div class="job-footer">
										<div class="job-date">{job.date}</div>
										<div class="save">Save</div>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
			<div class="col right-sidebar">
				<div class="box">
					<h2>See 132 jobs in Featured Companies</h2>
				</div>
			</div>
		</div>
	)
}

export default App;
