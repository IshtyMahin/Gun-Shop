import React from 'react';

const QuestionAnswer = () => {
    return (
        <div>
            <h1>State vs Props</h1>
            <p>State হল component এর স্থানীয় অবস্থা । State component  এর বাইরে অ্যাক্সেস এবং সংশোধন করা যায় না।এটি একটি ফাংশনে স্থানীয় ভেরিয়েবলের মতো। State child component এর দ্বারা অ্যাক্সেস করা যাবে না.</p>
            <p>অপরদিকে props ,উপাদানগুলিকে তাদের মূল উপাদান থেকে props আকারে ডেটা গ্রহণ করার ক্ষমতা দিয়ে উপাদানগুলিকে পুনরায় ব্যবহারযোগ্য করে তোলে। props আপনাকে একটি Component থেকে অন্য Components এ ডেটা প্রেরণ করতে দেয়</p>
            <h1>How useState works in react.js ?</h1>
            <p>useState হল একটি hook (function). যার মাধ্যমে functional component  গুলিতে state variable গুলা রাখা যাই। এই ফাংশনে প্রারম্ভিক অবস্থা দিতে হই। পরে এটি বর্তমান অবস্থার মান এবং এই মান আপডেট করার জন্য অন্য একটি ফাংশন সহ একটি ভেরিয়েবল আমাদের কে দেই।</p>
        </div>
    );
};

export default QuestionAnswer;