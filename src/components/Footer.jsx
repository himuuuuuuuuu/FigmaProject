import React from 'react'

const Footer = () => {

    return(
        <div className="footer">
            <table cellSpacing={"80px"} style={{width:'95%'}} className='footer_table_container'>
                <tr className="footer_table_header">
                    <th style={{ fontWeight:'900'}}>Company Info</th>
                    <th>Legal</th>
                    <th>Features</th>
                    <th>Resources</th>
                    <th>Get in touch</th>

                    </tr>

                    <tr className="footer_table_header">
                    <td><a style={{ fontWeight: '100'}}  href="/">About us</a></td>
                    <td><a href="/">About us</a></td>
                    <td><a href="/">Business Marketing</a></td>
                    <td><a href="/">IOS & Android</a></td>
                    <td rowSpan={"2"}><input type="email" name="email" id="email" placeholder='Your Email'/></td>
                    <td rowSpan={"2"}><button type="submit" id="btn">Subscribe</button></td>
                    </tr>

                    <tr className="footer_table_header">
                    <td><a href="/">Career</a> </td>
                    <td><a href="/">Career</a> </td>
                    <td><a href="/">User Analytic</a> </td>
                    <td><a href="/">Watch a demo</a> </td>
                    </tr>

                    <tr className='footer_table_header'>
                    <td><a href="/">We are hiring</a></td>
                    <td><a href="/">We are hiring</a> </td>
                    <td><a href="/">Live Chat</a> </td>
                    <td><a href="/">Customers</a> </td>
                    <td><a href="/">Lorem ipsum dolor sit.</a></td>
                    </tr>

                    <tr className='footer_table_header'>
                    <td><a href="/">Blog</a></td>
                    <td><a href="/">Blog</a> </td>
                    <td><a href="/">Unlimited Support</a> </td>
                    <td><a href="/">API</a> </td>
                </tr>
            </table>
        </div>
    )

}
  
export default Footer
