--- 
title: authorizers
hide_title: false
hide_table_of_contents: false
keywords:
  - authorizers
  - iot
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

Creates, updates, deletes, gets or lists an <code>authorizers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="authorizers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.authorizers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_authorizer"
    values={[
        { label: 'describe_authorizer', value: 'describe_authorizer' },
        { label: 'list_authorizers', value: 'list_authorizers' }
    ]}
>
<TabItem value="describe_authorizer">

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
    <td><CopyableCode code="authorizerArn" /></td>
    <td><code>string</code></td>
    <td>The authorizer ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizerFunctionArn" /></td>
    <td><code>string</code></td>
    <td>The authorizer's Lambda function ARN. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="authorizerName" /></td>
    <td><code>string</code></td>
    <td>The authorizer name. (pattern: &lt;code&gt;&#91;\w=,@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The UNIX timestamp of when the authorizer was created.</td>
</tr>
<tr>
    <td><CopyableCode code="enableCachingForHttp" /></td>
    <td><code>boolean</code></td>
    <td>When true, the result from the authorizer’s Lambda function is cached for the time specified in refreshAfterInSeconds. The cached result is used while the device reuses the same HTTP connection.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The UNIX timestamp of when the authorizer was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="signingDisabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether IoT validates the token signature in an authorization request.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the authorizer. (ACTIVE, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="tokenKeyName" /></td>
    <td><code>string</code></td>
    <td>The key used to extract the token from the HTTP headers. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tokenSigningPublicKeys" /></td>
    <td><code>object</code></td>
    <td>The public keys used to validate the token signature returned by your custom authentication service.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_authorizers">

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
    <td><CopyableCode code="authorizerArn" /></td>
    <td><code>string</code></td>
    <td>The authorizer ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="authorizerName" /></td>
    <td><code>string</code></td>
    <td>The authorizer name. (pattern: &lt;code&gt;&#91;\w=,@-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_authorizer"><CopyableCode code="describe_authorizer" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-authorizer_name"><code>authorizer_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an authorizer. Requires permission to access the DescribeAuthorizer action.</td>
</tr>
<tr>
    <td><a href="#list_authorizers"><CopyableCode code="list_authorizers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-marker"><code>marker</code></a>, <a href="#parameter-isAscendingOrder"><code>isAscendingOrder</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td>Lists the authorizers registered in your account. Requires permission to access the ListAuthorizers action.</td>
</tr>
<tr>
    <td><a href="#create_authorizer"><CopyableCode code="create_authorizer" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-authorizer_name"><code>authorizer_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-authorizerFunctionArn"><code>authorizerFunctionArn</code></a></td>
    <td></td>
    <td>Creates an authorizer. Requires permission to access the CreateAuthorizer action.</td>
</tr>
<tr>
    <td><a href="#update_authorizer"><CopyableCode code="update_authorizer" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-authorizer_name"><code>authorizer_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an authorizer. Requires permission to access the UpdateAuthorizer action.</td>
</tr>
<tr>
    <td><a href="#delete_authorizer"><CopyableCode code="delete_authorizer" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-authorizer_name"><code>authorizer_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an authorizer. Requires permission to access the DeleteAuthorizer action.</td>
</tr>
<tr>
    <td><a href="#test_invoke_authorizer"><CopyableCode code="test_invoke_authorizer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-authorizer_name"><code>authorizer_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Tests a custom authorization behavior by invoking a specified custom authorizer. Use this to test and debug the custom authorization behavior of devices that connect to the IoT device gateway. Requires permission to access the TestInvokeAuthorizer action.</td>
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
<tr id="parameter-authorizer_name">
    <td><CopyableCode code="authorizer_name" /></td>
    <td><code>string</code></td>
    <td>The custom authorizer name.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-isAscendingOrder">
    <td><CopyableCode code="isAscendingOrder" /></td>
    <td><code>boolean</code></td>
    <td>Return the list of authorizers in ascending alphabetical order.</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>A marker used to get the next set of results.</td>
</tr>
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the list authorizers request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_authorizer"
    values={[
        { label: 'describe_authorizer', value: 'describe_authorizer' },
        { label: 'list_authorizers', value: 'list_authorizers' }
    ]}
>
<TabItem value="describe_authorizer">

Describes an authorizer. Requires permission to access the DescribeAuthorizer action.

```sql
SELECT
authorizerArn,
authorizerFunctionArn,
authorizerName,
creationDate,
enableCachingForHttp,
lastModifiedDate,
signingDisabled,
status,
tokenKeyName,
tokenSigningPublicKeys
FROM aws.iot.authorizers
WHERE authorizer_name = '{{ authorizer_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_authorizers">

Lists the authorizers registered in your account. Requires permission to access the ListAuthorizers action.

```sql
SELECT
authorizerArn,
authorizerName
FROM aws.iot.authorizers
WHERE region = '{{ region }}' -- required
AND pageSize = '{{ pageSize }}'
AND marker = '{{ marker }}'
AND isAscendingOrder = '{{ isAscendingOrder }}'
AND status = '{{ status }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_authorizer"
    values={[
        { label: 'create_authorizer', value: 'create_authorizer' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_authorizer">

Creates an authorizer. Requires permission to access the CreateAuthorizer action.

```sql
INSERT INTO aws.iot.authorizers (
authorizerFunctionArn,
tokenKeyName,
tokenSigningPublicKeys,
status,
tags,
signingDisabled,
enableCachingForHttp,
authorizer_name,
region
)
SELECT 
'{{ authorizerFunctionArn }}' /* required */,
'{{ tokenKeyName }}',
'{{ tokenSigningPublicKeys }}',
'{{ status }}',
'{{ tags }}',
{{ signingDisabled }},
{{ enableCachingForHttp }},
'{{ authorizer_name }}',
'{{ region }}'
RETURNING
authorizerArn,
authorizerName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: authorizers
  props:
    - name: authorizer_name
      value: "{{ authorizer_name }}"
      description: Required parameter for the authorizers resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the authorizers resource.
    - name: authorizerFunctionArn
      value: "{{ authorizerFunctionArn }}"
    - name: tokenKeyName
      value: "{{ tokenKeyName }}"
    - name: tokenSigningPublicKeys
      value: "{{ tokenSigningPublicKeys }}"
    - name: status
      value: "{{ status }}"
      valid_values: ['ACTIVE', 'INACTIVE']
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: signingDisabled
      value: {{ signingDisabled }}
    - name: enableCachingForHttp
      value: {{ enableCachingForHttp }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_authorizer"
    values={[
        { label: 'update_authorizer', value: 'update_authorizer' }
    ]}
>
<TabItem value="update_authorizer">

Updates an authorizer. Requires permission to access the UpdateAuthorizer action.

```sql
UPDATE aws.iot.authorizers
SET 
authorizerFunctionArn = '{{ authorizerFunctionArn }}',
tokenKeyName = '{{ tokenKeyName }}',
tokenSigningPublicKeys = '{{ tokenSigningPublicKeys }}',
status = '{{ status }}',
enableCachingForHttp = {{ enableCachingForHttp }}
WHERE 
authorizer_name = '{{ authorizer_name }}' --required
AND region = '{{ region }}' --required
RETURNING
authorizerArn,
authorizerName;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_authorizer"
    values={[
        { label: 'delete_authorizer', value: 'delete_authorizer' }
    ]}
>
<TabItem value="delete_authorizer">

Deletes an authorizer. Requires permission to access the DeleteAuthorizer action.

```sql
DELETE FROM aws.iot.authorizers
WHERE authorizer_name = '{{ authorizer_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="test_invoke_authorizer"
    values={[
        { label: 'test_invoke_authorizer', value: 'test_invoke_authorizer' }
    ]}
>
<TabItem value="test_invoke_authorizer">

Tests a custom authorization behavior by invoking a specified custom authorizer. Use this to test and debug the custom authorization behavior of devices that connect to the IoT device gateway. Requires permission to access the TestInvokeAuthorizer action.

```sql
EXEC aws.iot.authorizers.test_invoke_authorizer 
@authorizer_name='{{ authorizer_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"token": "{{ token }}", 
"tokenSignature": "{{ tokenSignature }}", 
"httpContext": "{{ httpContext }}", 
"mqttContext": "{{ mqttContext }}", 
"tlsContext": "{{ tlsContext }}"
}'
;
```
</TabItem>
</Tabs>
