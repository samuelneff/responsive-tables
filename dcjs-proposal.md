_Your Name:_ Samuel Neff and Ville Rutanen
 
_Your twitter handle:_ n.a.
 
_A few words about yourself:_ 
 
Sam is a full stack software engineer with Lab49, focusing on React and custom CSS, with twenty years of experience spanning Java, .NET, and many others. Prior to engineering, Sam has education and experience in international relations and economics. 
 
Ville is a front end software engineer with Lab49, focused on designing and implementing solutions with modern JavaScript frameworks. Also experienced in data visualization with D3 and other open source libraries.
 
_Talk title:_ Beautiful and Functional Responsive Tables
 
_Talk abstract:_  
 
At Lab49 we've developed responsive tables using an alternate technique that both presents beautifully and is still fully functional, presenting all data at a user's fingertips. This is accomplished almost entirely through custom CSS using standard `<table>` markup. The result is a recognizable table of data in mobile with easy access to all available data without compromising readability or usability.
 
![Table screenshots](https://raw.githubusercontent.com/samuelneff/responsive-tables/master/screenshots/responsive-tables-0-combined.png)

To start with we take existing tabular data implementations using standard `<table>` markup.. `<tr>`, `<th>`, and `<td>`. In desktop and tablet view the tables look just as intended, fully defined and laid-out tabular data. For reduced width mobile view, we collapse the tables with css to show the most important two columns of data initially, and then allow users to click on each row to expand and show the additional data in that row. The two column table has headers on top and columns of data as one would expect from a table. The expanded view shows each cell's data on the right with individual labels on the left.
 
JavaScript is used to trigger rows being marked as expanded or collapsed. The rest is accomplished entirely through CSS. For the purpose of the presentation, the demo will be shown and developed in pure HTML, JavaScript, and CSS with no frameworks. In production Lab49 has used this technique with React, SASS, and PureCSS, but it would work equally well with any client-side framework.
 
_Expected length:_ 30 - 45 min
 
_Available months:_ February onward
 
- [ ] Thu Jan 11 2018
- [X] Thu Feb 08 2018
- [X] Thu Mar 08 2018
- [X] Thu Apr 12 2018
 
or later...
