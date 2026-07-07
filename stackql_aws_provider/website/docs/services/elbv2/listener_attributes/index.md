--- 
title: listener_attributes
hide_title: false
hide_table_of_contents: false
keywords:
  - listener_attributes
  - elbv2
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>listener_attributes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="listener_attributes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elbv2.listener_attributes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_listener_attributes"
    values={[
        { label: 'describe_listener_attributes', value: 'describe_listener_attributes' }
    ]}
>
<TabItem value="describe_listener_attributes">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="Key" /></td>
    <td><code>string</code></td>
    <td>The name of the attribute. The following attribute is supported by Network Load Balancers, and Gateway Load Balancers. tcp.idle_timeout.seconds - The tcp idle timeout value, in seconds. The valid range is 60-6000 seconds. The default is 350 seconds. The following attributes are only supported by Application Load Balancers. routing.http.request.x_amzn_mtls_clientcert_serial_number.header_name - Enables you to modify the header name of the X-Amzn-Mtls-Clientcert-Serial-Number HTTP request header. routing.http.request.x_amzn_mtls_clientcert_issuer.header_name - Enables you to modify the header name of the X-Amzn-Mtls-Clientcert-Issuer HTTP request header. routing.http.request.x_amzn_mtls_clientcert_subject.header_name - Enables you to modify the header name of the X-Amzn-Mtls-Clientcert-Subject HTTP request header. routing.http.request.x_amzn_mtls_clientcert_validity.header_name - Enables you to modify the header name of the X-Amzn-Mtls-Clientcert-Validity HTTP request header. routing.http.request.x_amzn_mtls_clientcert_leaf.header_name - Enables you to modify the header name of the X-Amzn-Mtls-Clientcert-Leaf HTTP request header. routing.http.request.x_amzn_mtls_clientcert.header_name - Enables you to modify the header name of the X-Amzn-Mtls-Clientcert HTTP request header. routing.http.request.x_amzn_tls_version.header_name - Enables you to modify the header name of the X-Amzn-Tls-Version HTTP request header. routing.http.request.x_amzn_tls_cipher_suite.header_name - Enables you to modify the header name of the X-Amzn-Tls-Cipher-Suite HTTP request header. routing.http.response.server.enabled - Enables you to allow or remove the HTTP response server header. routing.http.response.strict_transport_security.header_value - Informs browsers that the site should only be accessed using HTTPS, and that any future attempts to access it using HTTP should automatically be converted to HTTPS. routing.http.response.access_control_allow_origin.header_value - Specifies which origins are allowed to access the server. routing.http.response.access_control_allow_methods.header_value - Returns which HTTP methods are allowed when accessing the server from a different origin. routing.http.response.access_control_allow_headers.header_value - Specifies which headers can be used during the request. routing.http.response.access_control_allow_credentials.header_value - Indicates whether the browser should include credentials such as cookies or authentication when making requests. routing.http.response.access_control_expose_headers.header_value - Returns which headers the browser can expose to the requesting client. routing.http.response.access_control_max_age.header_value - Specifies how long the results of a preflight request can be cached, in seconds. routing.http.response.content_security_policy.header_value - Specifies restrictions enforced by the browser to help minimize the risk of certain types of security threats. routing.http.response.x_content_type_options.header_value - Indicates whether the MIME types advertised in the Content-Type headers should be followed and not be changed. routing.http.response.x_frame_options.header_value - Indicates whether the browser is allowed to render a page in a frame, iframe, embed or object.</td>
</tr>
<tr>
    <td><CopyableCode code="Value" /></td>
    <td><code>string</code></td>
    <td>The value of the attribute.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#describe_listener_attributes"><CopyableCode code="describe_listener_attributes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ListenerArn"><code>ListenerArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the attributes for the specified listener.</td>
</tr>
<tr>
    <td><a href="#modify_listener_attributes"><CopyableCode code="modify_listener_attributes" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ListenerArn"><code>ListenerArn</code></a>, <a href="#parameter-Attributes"><code>Attributes</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modifies the specified attributes of the specified listener.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-Attributes">
    <td><CopyableCode code="Attributes" /></td>
    <td><code>array</code></td>
    <td>The listener attributes.</td>
</tr>
<tr id="parameter-ListenerArn">
    <td><CopyableCode code="ListenerArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the listener.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_listener_attributes"
    values={[
        { label: 'describe_listener_attributes', value: 'describe_listener_attributes' }
    ]}
>
<TabItem value="describe_listener_attributes">

Describes the attributes for the specified listener.

```sql
SELECT
Key,
Value
FROM aws.elbv2.listener_attributes
WHERE ListenerArn = '{{ ListenerArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_listener_attributes"
    values={[
        { label: 'modify_listener_attributes', value: 'modify_listener_attributes' }
    ]}
>
<TabItem value="modify_listener_attributes">

Modifies the specified attributes of the specified listener.

```sql
UPDATE aws.elbv2.listener_attributes
SET 
-- No updatable properties
WHERE 
ListenerArn = '{{ ListenerArn }}' --required
AND Attributes = '{{ Attributes }}' --required
AND region = '{{ region }}' --required
RETURNING
line_items;
```
</TabItem>
</Tabs>
