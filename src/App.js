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
					<div class="job">
						<h2 class="job-title">Junior React Developer</h2>
						<img src="https://img.naukimg.com/logo_images/groups/v1/4615451.gif" />
						<div class="company-name"><a href="#">Lionbridge</a></div>
						<div class="job-meta">
							<div class="exp">1-3 Yrs</div>
							<div class="salary">Not disclosed</div>
							<div class="loc">Navi Mumbai</div>
						</div>
						<div class="job-description">A minimum of 1 + years of general computer use, knowledge of operating systems
							A high l...</div>
						<div class="skills">
							<div class="skill">html</div>
							<div class="skill">SEO</div>
							<div class="skill">development</div>
							<div class="skill">CSS</div>
						</div>
						<div class="job-footer">
							<div class="job-date">5-8-2022</div>
							<div class="save">Save</div>
						</div>
					</div>
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
