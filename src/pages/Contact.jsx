import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Me</h1>
      <p className="text-gray-600 mb-6 max-w-md">
        I’d love to hear from you! Whether it’s a project idea, internship discussion, or collaboration — feel free to reach out.
      </p>

      <div className="space-y-3 text-gray-700">
        <p>
           <span className="font-medium">Email:</span> priyanshukumari93933@gmail.com
        </p>
        <p>
          <span className="font-medium">Phone:</span> +91 98765 43210
        </p>
        <p>
          <span className="font-medium">GitHub:</span>{' '}
          <a
            href="https://github.com/Priyanshu-89"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
           https://github.com/Priyanshu-89
          </a>
        </p>
      </div>
    </div>
  )
}

export default Contact
