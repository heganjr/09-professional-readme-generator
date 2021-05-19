// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![${license}](https://img.shields.io/badge/licence-MIT-brightgreen)](${renderLicenseLink(license)})`;
  }

  if (license === "GNU") {
    return `[![${license}](https://img.shields.io/badge/licence-GNU-green)](${renderLicenseLink(license)})`;
  }

  if (license === "Apache") {
    return `[![${license}](https://img.shields.io/badge/licence-Apache%202-blue)](${renderLicenseLink(license)})`;
  }

  if (license === "BSD-3") {
    return `[![${license}](https://img.shields.io/badge/licence-BSD%203-yellowgreen)](${renderLicenseLink(license)})`;
   } else {
   return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://choosealicense.com/licenses/mit/`;
  }

  if (license === "GNU") {
    return `https://choosealicense.com/licenses/gpl-3.0/`;
  }

  if (license === "Apache") {
    return `https://choosealicense.com/licenses/apache-2.0`;
  }

  if (license === "BSD-3") {
    return `https://choosealicense.com/licenses/bsd-3-clause/`;
   } else {
   return ``;
}}

// send a link to licence

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, fullName, title) {
  if (license === "MIT") {
    return `MIT License

  Copyright (c) [2021] [${fullName}]
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.`;
  }

  if (license === "GNU") {
    return `                    GNU GENERAL PUBLIC LICENSE
  Version 3, 29 June 2007

Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.

       Preamble

The GNU General Public License is a free, copyleft license for
software and other kinds of works.

The licenses for most software and other practical works are designed
to take away your freedom to share and change the works.  By contrast,
the GNU General Public License is intended to guarantee your freedom to
share and change all versions of a program--to make sure it remains free
software for all its users.  We, the Free Software Foundation, use the
GNU General Public License for most of our software; it applies also to
any other work released this way by its authors.  You can apply it to
your programs, too.`;
  }

  if (license === "Apache") {
    return `                                 Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/`;
  }

  if (license === "BSD-3") {
    return `Copyright [2021] [${fullName}]

  Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
  
  1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
  
  2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
  
  3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
  
  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
  } 
  else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README - Readme does not like white space - write exactly how you intend to view in the ReadMe
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

### Screenshot
![screenshot](${data.url})

## Tests

${data.test}

## How to Contribute

${data.contribute}

If there are issues you can contact me here ${data.email} or ${data.number}

---

## Credits

${data.credits}

---

## License

${renderLicenseLink(data.license)}

${renderLicenseSection(data.license, data.fullName, data.title)}

---
`
;
}
// can do callbacks to functions
// handing info from data.licence question
// how you format the above is how it shows in the ReadMe

module.exports = generateMarkdown;

// table of content #{header} looks for headers

// ${renderDescriptionSection(data.description)}

// ${renderTableOfContentsSection()}

// ${renderInstallationSection()}

// ${renderUsageSection()}

// ${renderCreditsSection()}

// ${renderContributionSection()}

// ${renderTestSection()}