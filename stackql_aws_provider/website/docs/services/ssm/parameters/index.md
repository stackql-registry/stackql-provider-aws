--- 
title: parameters
hide_title: false
hide_table_of_contents: false
keywords:
  - parameters
  - ssm
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

Creates, updates, deletes, gets or lists a <code>parameters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="parameters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.parameters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_parameters"
    values={[
        { label: 'get_parameters', value: 'get_parameters' },
        { label: 'describe_parameters', value: 'describe_parameters' }
    ]}
>
<TabItem value="get_parameters">

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
    <td><CopyableCode code="invalid_parameters" /></td>
    <td><code>array</code></td>
    <td>A list of parameters that aren't formatted correctly or don't run during an execution.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>array</code></td>
    <td>A list of details for a parameter.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_parameters">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="allowed_pattern" /></td>
    <td><code>string</code></td>
    <td>A parameter name can include only the following letters and symbols. a-zA-Z0-9_.-</td>
</tr>
<tr>
    <td><CopyableCode code="data_type" /></td>
    <td><code>string</code></td>
    <td>The data type of the parameter, such as text or aws:ec2:image. The default is text.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the parameter actions.</td>
</tr>
<tr>
    <td><CopyableCode code="key_id" /></td>
    <td><code>string</code></td>
    <td>The alias of the Key Management Service (KMS) key used to encrypt the parameter. Applies to SecureString parameters only. (pattern: &lt;code&gt;^(&#91;a-zA-Z0-9:/_-&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date the parameter was last changed or updated.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_user" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the Amazon Web Services user who last changed the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The parameter name.</td>
</tr>
<tr>
    <td><CopyableCode code="policies" /></td>
    <td><code>array</code></td>
    <td>A list of policies associated with a parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="tier" /></td>
    <td><code>string</code></td>
    <td>The parameter tier. (Standard, Advanced, Intelligent-Tiering)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of parameter. Valid parameter types include the following: String, StringList, and SecureString. (String, StringList, SecureString)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The parameter version.</td>
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
    <td><a href="#get_parameters"><CopyableCode code="get_parameters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get information about one or more parameters by specifying multiple parameter names. To get information about a single parameter, you can use the GetParameter operation instead. Parameter names can't contain spaces. The service removes any spaces specified for the beginning or end of a parameter name. If the specified name for a parameter contains spaces between characters, the request fails with a ValidationException error.</td>
</tr>
<tr>
    <td><a href="#describe_parameters"><CopyableCode code="describe_parameters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the parameters in your Amazon Web Services account or the parameters shared with you when you enable the Shared option. Request results are returned on a best-effort basis. If you specify MaxResults in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of MaxResults. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a NextToken. You can specify the NextToken in a subsequent call to get the next set of results. Parameter names can't contain spaces. The service removes any spaces specified for the beginning or end of a parameter name. If the specified name for a parameter contains spaces between characters, the request fails with a ValidationException error. If you change the KMS key alias for the KMS key used to encrypt a parameter, then you must also update the key alias the parameter uses to reference KMS. Otherwise, DescribeParameters retrieves whatever the original key alias was referencing.</td>
</tr>
<tr>
    <td><a href="#put_parameter"><CopyableCode code="put_parameter" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Value"><code>Value</code></a></td>
    <td></td>
    <td>Create or update a parameter in Parameter Store.</td>
</tr>
<tr>
    <td><a href="#delete_parameters"><CopyableCode code="delete_parameters" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a list of parameters. After deleting a parameter, wait for at least 30 seconds to create a parameter with the same name.</td>
</tr>
<tr>
    <td><a href="#delete_parameter"><CopyableCode code="delete_parameter" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a parameter from the system. After deleting a parameter, wait for at least 30 seconds to create a parameter with the same name.</td>
</tr>
<tr>
    <td><a href="#get_parameter"><CopyableCode code="get_parameter" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get information about a single parameter by specifying the parameter name. Parameter names can't contain spaces. The service removes any spaces specified for the beginning or end of a parameter name. If the specified name for a parameter contains spaces between characters, the request fails with a ValidationException error. To get information about more than one parameter at a time, use the GetParameters operation.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_parameters"
    values={[
        { label: 'get_parameters', value: 'get_parameters' },
        { label: 'describe_parameters', value: 'describe_parameters' }
    ]}
>
<TabItem value="get_parameters">

Get information about one or more parameters by specifying multiple parameter names. To get information about a single parameter, you can use the GetParameter operation instead. Parameter names can't contain spaces. The service removes any spaces specified for the beginning or end of a parameter name. If the specified name for a parameter contains spaces between characters, the request fails with a ValidationException error.

```sql
SELECT
invalid_parameters,
parameters
FROM aws.ssm.parameters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_parameters">

Lists the parameters in your Amazon Web Services account or the parameters shared with you when you enable the Shared option. Request results are returned on a best-effort basis. If you specify MaxResults in the request, the response includes information up to the limit specified. The number of items returned, however, can be between zero and the value of MaxResults. If the service reaches an internal limit while processing the results, it stops the operation and returns the matching values up to that point and a NextToken. You can specify the NextToken in a subsequent call to get the next set of results. Parameter names can't contain spaces. The service removes any spaces specified for the beginning or end of a parameter name. If the specified name for a parameter contains spaces between characters, the request fails with a ValidationException error. If you change the KMS key alias for the KMS key used to encrypt a parameter, then you must also update the key alias the parameter uses to reference KMS. Otherwise, DescribeParameters retrieves whatever the original key alias was referencing.

```sql
SELECT
arn,
allowed_pattern,
data_type,
description,
key_id,
last_modified_date,
last_modified_user,
name,
policies,
tier,
type,
version
FROM aws.ssm.parameters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_parameter"
    values={[
        { label: 'put_parameter', value: 'put_parameter' }
    ]}
>
<TabItem value="put_parameter">

Create or update a parameter in Parameter Store.

```sql
REPLACE aws.ssm.parameters
SET 
Name = '{{ Name }}',
Description = '{{ Description }}',
Value = '{{ Value }}',
Type = '{{ Type }}',
KeyId = '{{ KeyId }}',
Overwrite = {{ Overwrite }},
AllowedPattern = '{{ AllowedPattern }}',
Tags = '{{ Tags }}',
Tier = '{{ Tier }}',
Policies = '{{ Policies }}',
DataType = '{{ DataType }}'
WHERE 
region = '{{ region }}' --required
AND Value = '{{ Value }}' --required
RETURNING
tier,
version;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_parameters"
    values={[
        { label: 'delete_parameters', value: 'delete_parameters' },
        { label: 'delete_parameter', value: 'delete_parameter' }
    ]}
>
<TabItem value="delete_parameters">

Delete a list of parameters. After deleting a parameter, wait for at least 30 seconds to create a parameter with the same name.

```sql
DELETE FROM aws.ssm.parameters
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_parameter">

Delete a parameter from the system. After deleting a parameter, wait for at least 30 seconds to create a parameter with the same name.

```sql
DELETE FROM aws.ssm.parameters
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="get_parameter"
    values={[
        { label: 'get_parameter', value: 'get_parameter' }
    ]}
>
<TabItem value="get_parameter">

Get information about a single parameter by specifying the parameter name. Parameter names can't contain spaces. The service removes any spaces specified for the beginning or end of a parameter name. If the specified name for a parameter contains spaces between characters, the request fails with a ValidationException error. To get information about more than one parameter at a time, use the GetParameters operation.

```sql
EXEC aws.ssm.parameters.get_parameter 
@region='{{ region }}' --required 
@@json=
'{
"Name": "{{ Name }}", 
"WithDecryption": {{ WithDecryption }}
}'
;
```
</TabItem>
</Tabs>
