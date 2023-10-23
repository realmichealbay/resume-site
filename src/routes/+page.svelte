<script>
	import { onMount } from 'svelte';

	let chevronOpacity = 1;

	onMount(() => {
		/*
        function handleScroll() {
            console.log(window.scrollY);

            if (window.scrollY > 200) {
                chevronOpacity = 0;
            } else {
                chevronOpacity = 1;
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {  // cleanup when component is destroyed
            window.removeEventListener('scroll', handleScroll);
        };*/
	});
</script>

<div id="intro-container">
	<div id="over-top-intro">
		<div class="firstText">
			<h1>Hi, my name is Ethan Wallace.</h1>
		</div>
	</div>

	<div id="intro-bottom-text">
		<h1 class="secondaryText">And i am a</h1>
		<div class="tertiaryText">
			<h1>Web Developer</h1>
			<h1>&nbsp;& &nbsp;</h1>
			<h1>Forex Trader</h1>
		</div>
	</div>
</div>

<div id="chevron" style="opacity: {chevronOpacity}; transition: opacity 0.3s;">
	<img src="../img/downChev.png" alt="" />
</div>

<main>
	<div id="targetElement" />
	<div>
		<hr />
		<h1>About Me</h1>
		<p>I am a Coder learning AP Computer Science & Cybersecuirty in Highschool</p>
	</div>
	<div>
		<hr />
		<h1>My Skills</h1>
		<p>these are in order of when i first learned them</p>
		<ul>
			<li>Python3</li>
			<li>HTML 5</li>
			<li>CSS</li>
			<li>Java</li>
		</ul>
		<p>Other Skills</p>
		<ul>
			<li>
				Attended NYLT <a href="https://www.scouting.org/programs/scouts-bsa/troop-resources/nylt/"
					>(National Youth Leadership Training)</a
				>
			</li>
			<li>Bilingual (Japanese 1.5 Years) A2-B1 CEFR</li>
		</ul>
	</div>
	<div>
		<hr />
		<h1>My Achivements & Awards, so far</h1>
		<ul>
			<li>Achieved Eagle Scout 9/19/23</li>
			<li>
				Conservation Award from the Meramec Valley Grotto 1/6/23 <a
					href="https://mdc.mo.gov/newsroom/mdc-35-tons-trash-removed-ste-genevieve-county-sinkhole-cave"
				>
					If you are interested in reading why i got the award please click this link :)</a
				>
			</li>
			<li />
		</ul>
	</div>
	<div>
		<hr />
		<h1>Extracurriculars</h1>
		<ul>
			<li>First Robotics Competition Team MHS-PI 6744</li>
			<li>Scouts ~6 Years</li>
		</ul>
	</div>
</main>
