---
candidate                : bruno
permalink                : /cv/bruno
layout                   : cv
language                 : eng

---
<div class="betweenTablesTall">&#xa0;</div>
<section class="content content-table">
    {% include_relative resume_contact.html candidate=page.candidate language=page.language %}
    {% include_relative resume_experience.html %}
    {% include_relative resume_coursework.html %}
    {% include_relative resume_education.html  %}
    {% include_relative resume_languages.html  %}
    {% include_relative resume_interests.html  %}
</section>