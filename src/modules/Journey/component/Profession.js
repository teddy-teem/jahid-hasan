import React from 'react'
import CardForProfession from '../../../components/Elements/CardViewForProfession/CardForProfession'

export default function Profession() {

  return (
    <div className='profession'>
      <CardForProfession
      organization={'Organization Prvt Ltd'}
      position={"Full Stack Web Development"}
      period={"1st January, 2022 - Currently"}
      paragraph={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}
      organizationUrl={"google.com"}
      />
       <CardForProfession
      organization={'Organization Prvt Ltd'}
      position={"Intern"}
      period={"1st Septembar, 2021 - 31st Decembar"}
      paragraph={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}
      organizationUrl={"google.com"}
      />
    </div>
  );
}
