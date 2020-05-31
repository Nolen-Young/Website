import React from "react";

// *****************************************************
// This class contains the code to render the about me page.
// *****************************************************
class ProfessionalPageAboutMe extends React.Component {
	render() {
		return (
			<div>
				<div id='header ' className='center'>
					<h1>About Me</h1>
					<img src='nolen_pp.jpg' alt='' width='200' height='300'></img>
				</div>

				<div id='body'>
					<h3>Welcome</h3>
					<p>Hello. Welcome to my website.</p>
					<p>
						I made this website from scratch, by myself, for myself.
						<br />
						<br />
						If you want to know how to use this website, or a little bit more
						about how this website was made, click the menu button in the top
						left, then select the 'About This Website' menu option.
					</p>

					<h3>About Me</h3>
					<p>
						My name is Nolen Young. I am from Olympia, Washington. And I am 22
						years old.
					</p>
					<p>
						I am a fresh graduate from Washington State University as of May of
						2020. I received my degree in computer science, and am now looking
						for a job in the software industry. I made this page to act as a bit
						of a portfolio for myself. You will be able to find plenty of
						information here about work I have done as a computer scientist.
						Software development and computer science as a topic has been an
						interest of mine since highschool, where my interest led me to sign
						up for a robotics class my freshman year, and then my first ever
						coding class my sophomore year. After I took those classes, I
						planned on majoring in computer science one day when I was in
						college. In college I studied computer science from day one to the
						last day, just a few weeks ago. It was hard, but rewarding. The
						computer science program at the Voiland College of Engineering and
						Architecture at WSU provided me with plenty of knowlege, more than I
						could have absorbed fully in a lifetime. I discovered new topics
						that I want to continue to explore into the future of my career. I
						am excited to see where software takes me. I love to work with
						computers, I love to code (most of the time, well, maybe not most of
						the time), and I am looking forward to my progession as a computer
						scientist.
					</p>
					<p>
						My free time is spent appreciating and making music. I like all
						kinds of art, but I have always been very focused on music as a
						medium, more so than any other medium. But, for a long time that was
						only expressed through the collection of speakers, amplifiers,
						turntables, and records. I felt that throughout my childhood I had
						been pigeonholed away from creative pursuits, either from my own
						foolish decisions, misguided by my own naive notions of creativity
						and the arts, or from outside influences. I played Saxophone growing
						up, but gave that up in middle school. It wasn't until my first
						semester in college, where I no longer had sports to occupy my time,
						and my search for self, that many people experience in college, had
						just begun, that I began to explore creative pursuits in my own free
						time, for the first time. I DJed social events. DJing quickly became
						a big hobby for me, and for a few years I would have considered it
						my main hobby. It was a great way for me to express myself to other
						people, and to find the creativity in myself. Over time I got more
						into the idea of doing music as a hobby. I got my first digital
						audio workstation, FL Studio, and began to teach myself how to
						write, produce, mix, and master my own music. After a while I got
						some more software, then I switched to a new DAW, Ableton Live, and
						before I knew it, I was down a rabit hole that I probably will never
						escape from in my life. I have learned so much on my own. I love
						that I have found this as a creative pursuit for myself. If you want
						to listen to (a small amount) of my music, that is available on this
						site.
						<br />
					</p>
					<h3>Contact</h3>
					<p>
						Email: <i>nolen.young@wsu.edu</i>
						<br />
						Phone: <i>(360) 485-9511</i>
					</p>
					<div className='links'>
						<a
							href='https://github.com/Nolen-Young'
							className='fa fa-github link'>
							<br />
						</a>

						<a
							href='https://www.linkedin.com/in/nolen-young/'
							className='fa fa-linkedin link'>
							<br />
						</a>

						<a
							href='https://www.instagram.com/noleny/'
							className='fa fa-instagram link'>
							<br />
						</a>

						<a
							href='https://soundcloud.com/southofsound'
							className='fa fa-soundcloud link'>
							<br />
						</a>

						<a
							href='https://soundcloud.com/user-243943999'
							className='fa fa-soundcloud link'>
							<br />
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default ProfessionalPageAboutMe;
