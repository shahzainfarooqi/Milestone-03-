document.getElementById("generate-resume").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const title = document.getElementById("title").value;
    const contact = document.getElementById("contact").value;
    const summary = document.getElementById("summary").value;
    const skills = document.getElementById("skills").value.split(',').map(skill => skill.trim());
    const experience = document.getElementById("experience").value;
  
    const resumeHTML = `
      <h2>${name}</h2>
      <p><strong>${title}</strong></p>
      <p>${contact}</p>
      <h3>Professional Summary</h3>
      <p>${summary}</p>
      <h3>Skills</h3>
      <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
      <h3>Experience</h3>
      <p>${experience}</p>
    `;
  
    document.getElementById("resume-preview").innerHTML = resumeHTML;
  });
  
  document.getElementById("download-resume").addEventListener("click", () => {
    const content = document.getElementById("resume-preview").innerHTML;
    const blob = new Blob([content], { type: "text/html" });
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.html";
    a.click();
  
    URL.revokeObjectURL(url);
  });
  