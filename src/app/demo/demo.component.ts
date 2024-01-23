import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  constructor(private router : Router){}

questions = [
    {
      description: 'What is your favorite color?',
      options: ['Red', 'Blue', 'Green', 'Yellow']
    },
    {
      description: 'Which programming language do you prefer?',
      options: ['JavaScript', 'Python', 'Java', 'C#']
    },
    // Add more questions as needed
  ];


  simpleAlert(){
    Swal.fire('Hello world!');
  }

  alertWithSuccess(){
    Swal.fire({
      title: "Submitted Successfully!",
      text: "You have submitted the test succesfully!",
      icon: "success",
      allowOutsideClick:false,
    }).then((result) =>{
      if(result.isConfirmed){
        this.router.navigate(['/signup']);
      }
      });
  }

  // confirmBox(){
  //   Swal.fire({
  //     title: 'Are you sure want to remove?',
  //     text: 'You will not be able to recover this file!',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes, delete it!',
  //     cancelButtonText: 'No, keep it'
  //   }).then((result) => {
  //     if (result.value) {
  //       Swal.fire(
  //         'Deleted!',
  //         'Your imaginary file has been deleted.',
  //         'success'
  //       )
  //     } else if (result.dismiss === Swal.DismissReason.cancel) {
  //       Swal.fire(
  //         'Cancelled',
  //         'Your imaginary file is safe :)',
  //         'error'
  //       )
  //     }
  //   })
  // }
}
