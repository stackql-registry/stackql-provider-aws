--- 
title: function_url_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - function_url_configs
  - lambda
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

Creates, updates, deletes, gets or lists a <code>function_url_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="function_url_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lambda.function_url_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_function_url_config"
    values={[
        { label: 'get_function_url_config', value: 'get_function_url_config' }
    ]}
>
<TabItem value="get_function_url_config">

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
    <td><CopyableCode code="auth_type" /></td>
    <td><code>string</code></td>
    <td>The type of authentication that your function URL uses. Set to AWS_IAM if you want to restrict access to authenticated users only. Set to NONE if you want to bypass IAM authentication to create a public endpoint. For more information, see Control access to Lambda function URLs. (NONE, AWS_IAM)</td>
</tr>
<tr>
    <td><CopyableCode code="cors" /></td>
    <td><code>object</code></td>
    <td>The cross-origin resource sharing (CORS) settings for your Lambda function URL. Use CORS to grant access to your function URL from any origin. You can also use CORS to control access for specific HTTP headers and methods in requests to your function URL.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>When the function URL was created, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD).</td>
</tr>
<tr>
    <td><CopyableCode code="function_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of your function. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*)?:lambda:&#91;a-z&#93;&#123;2&#125;((-gov)|(-iso(&#91;a-z&#93;?)))?-&#91;a-z&#93;+-\d&#123;1&#125;:\d&#123;12&#125;:function:&#91;a-zA-Z0-9-_&#93;+(:(\$LATEST|&#91;a-zA-Z0-9-_&#93;+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="function_url" /></td>
    <td><code>string</code></td>
    <td>The HTTP URL endpoint for your function.</td>
</tr>
<tr>
    <td><CopyableCode code="invoke_mode" /></td>
    <td><code>string</code></td>
    <td>Use one of the following options: BUFFERED – This is the default option. Lambda invokes your function using the Invoke API operation. Invocation results are available when the payload is complete. The maximum payload size is 6 MB. RESPONSE_STREAM – Your function streams payload results as they become available. Lambda invokes your function using the InvokeWithResponseStream API operation. The maximum response payload size is 200 MB. (BUFFERED, RESPONSE_STREAM)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string</code></td>
    <td>When the function URL configuration was last updated, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD).</td>
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
    <td><a href="#get_function_url_config"><CopyableCode code="get_function_url_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Qualifier"><code>Qualifier</code></a></td>
    <td>Returns details about a Lambda function URL.</td>
</tr>
<tr>
    <td><a href="#create_function_url_config"><CopyableCode code="create_function_url_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AuthType"><code>AuthType</code></a></td>
    <td><a href="#parameter-Qualifier"><code>Qualifier</code></a></td>
    <td>Creates a Lambda function URL with the specified configuration parameters. A function URL is a dedicated HTTP(S) endpoint that you can use to invoke your function.</td>
</tr>
<tr>
    <td><a href="#update_function_url_config"><CopyableCode code="update_function_url_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Qualifier"><code>Qualifier</code></a></td>
    <td>Updates the configuration for a Lambda function URL.</td>
</tr>
<tr>
    <td><a href="#delete_function_url_config"><CopyableCode code="delete_function_url_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Qualifier"><code>Qualifier</code></a></td>
    <td>Deletes a Lambda function URL. When you delete a function URL, you can't recover it. Creating a new function URL results in a different URL address.</td>
</tr>
<tr>
    <td><a href="#list_function_url_configs"><CopyableCode code="list_function_url_configs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-function_name"><code>function_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Returns a list of Lambda function URLs for the specified function.</td>
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
<tr id="parameter-function_name">
    <td><CopyableCode code="function_name" /></td>
    <td><code>string</code></td>
    <td>The name or ARN of the Lambda function. Name formats Function name – my-function. Function ARN – arn:aws:lambda:us-west-2:123456789012:function:my-function. Partial ARN – 123456789012:function:my-function. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Specify the pagination token that's returned by a previous request to retrieve the next page of results.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of function URLs to return in the response. Note that ListFunctionUrlConfigs returns a maximum of 50 items in each response, even if you set the number higher.</td>
</tr>
<tr id="parameter-Qualifier">
    <td><CopyableCode code="Qualifier" /></td>
    <td><code>string</code></td>
    <td>The alias name.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_function_url_config"
    values={[
        { label: 'get_function_url_config', value: 'get_function_url_config' }
    ]}
>
<TabItem value="get_function_url_config">

Returns details about a Lambda function URL.

```sql
SELECT
auth_type,
cors,
creation_time,
function_arn,
function_url,
invoke_mode,
last_modified_time
FROM aws.lambda.function_url_configs
WHERE function_name = '{{ function_name }}' -- required
AND region = '{{ region }}' -- required
AND Qualifier = '{{ Qualifier }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_function_url_config"
    values={[
        { label: 'create_function_url_config', value: 'create_function_url_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_function_url_config">

Creates a Lambda function URL with the specified configuration parameters. A function URL is a dedicated HTTP(S) endpoint that you can use to invoke your function.

```sql
INSERT INTO aws.lambda.function_url_configs (
AuthType,
Cors,
InvokeMode,
function_name,
region,
Qualifier
)
SELECT 
'{{ AuthType }}' /* required */,
'{{ Cors }}',
'{{ InvokeMode }}',
'{{ function_name }}',
'{{ region }}',
'{{ Qualifier }}'
RETURNING
auth_type,
cors,
creation_time,
function_arn,
function_url,
invoke_mode
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: function_url_configs
  props:
    - name: function_name
      value: "{{ function_name }}"
      description: Required parameter for the function_url_configs resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the function_url_configs resource.
    - name: AuthType
      value: "{{ AuthType }}"
      valid_values: ['NONE', 'AWS_IAM']
    - name: Cors
      description: |
        The cross-origin resource sharing (CORS) settings for your Lambda function URL. Use CORS to grant access to your function URL from any origin. You can also use CORS to control access for specific HTTP headers and methods in requests to your function URL.
      value:
        AllowCredentials: {{ AllowCredentials }}
        AllowHeaders:
          - "{{ AllowHeaders }}"
        AllowMethods:
          - "{{ AllowMethods }}"
        AllowOrigins:
          - "{{ AllowOrigins }}"
        ExposeHeaders:
          - "{{ ExposeHeaders }}"
        MaxAge: {{ MaxAge }}
    - name: InvokeMode
      value: "{{ InvokeMode }}"
      valid_values: ['BUFFERED', 'RESPONSE_STREAM']
    - name: Qualifier
      value: "{{ Qualifier }}"
      description: The alias name.
      description: The alias name.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_function_url_config"
    values={[
        { label: 'update_function_url_config', value: 'update_function_url_config' }
    ]}
>
<TabItem value="update_function_url_config">

Updates the configuration for a Lambda function URL.

```sql
UPDATE aws.lambda.function_url_configs
SET 
AuthType = '{{ AuthType }}',
Cors = '{{ Cors }}',
InvokeMode = '{{ InvokeMode }}'
WHERE 
function_name = '{{ function_name }}' --required
AND region = '{{ region }}' --required
AND Qualifier = '{{ Qualifier}}'
RETURNING
auth_type,
cors,
creation_time,
function_arn,
function_url,
invoke_mode,
last_modified_time;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_function_url_config"
    values={[
        { label: 'delete_function_url_config', value: 'delete_function_url_config' }
    ]}
>
<TabItem value="delete_function_url_config">

Deletes a Lambda function URL. When you delete a function URL, you can't recover it. Creating a new function URL results in a different URL address.

```sql
DELETE FROM aws.lambda.function_url_configs
WHERE function_name = '{{ function_name }}' --required
AND region = '{{ region }}' --required
AND Qualifier = '{{ Qualifier }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_function_url_configs"
    values={[
        { label: 'list_function_url_configs', value: 'list_function_url_configs' }
    ]}
>
<TabItem value="list_function_url_configs">

Returns a list of Lambda function URLs for the specified function.

```sql
EXEC aws.lambda.function_url_configs.list_function_url_configs 
@function_name='{{ function_name }}' --required, 
@region='{{ region }}' --required, 
@Marker='{{ Marker }}', 
@MaxItems='{{ MaxItems }}'
;
```
</TabItem>
</Tabs>
