--- 
title: lambda_functions
hide_title: false
hide_table_of_contents: false
keywords:
  - lambda_functions
  - connect
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

Creates, updates, deletes, gets or lists a <code>lambda_functions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lambda_functions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.lambda_functions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_lambda_functions"
    values={[
        { label: 'list_lambda_functions', value: 'list_lambda_functions' }
    ]}
>
<TabItem value="list_lambda_functions">

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
    <td><CopyableCode code="lambda_function" /></td>
    <td><code>string</code></td>
    <td>The Lambdafunction ARNs associated with the specified instance.</td>
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
    <td><a href="#list_lambda_functions"><CopyableCode code="list_lambda_functions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all Lambda functions that display in the dropdown options in the relevant flow blocks.</td>
</tr>
<tr>
    <td><a href="#associate_lambda_function"><CopyableCode code="associate_lambda_function" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FunctionArn"><code>FunctionArn</code></a></td>
    <td></td>
    <td>This API is in preview release for Amazon Connect and is subject to change. Allows the specified Amazon Connect instance to access the specified Lambda function.</td>
</tr>
<tr>
    <td><a href="#disassociate_lambda_function"><CopyableCode code="disassociate_lambda_function" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-functionArn"><code>functionArn</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>This API is in preview release for Amazon Connect and is subject to change. Remove the Lambda function from the dropdown options available in the relevant flow blocks.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance..</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.</td>
</tr>
<tr id="parameter-functionArn">
    <td><CopyableCode code="functionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Lambda function being disassociated.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_lambda_functions"
    values={[
        { label: 'list_lambda_functions', value: 'list_lambda_functions' }
    ]}
>
<TabItem value="list_lambda_functions">

This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all Lambda functions that display in the dropdown options in the relevant flow blocks.

```sql
SELECT
lambda_function
FROM aws.connect.lambda_functions
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_lambda_function"
    values={[
        { label: 'associate_lambda_function', value: 'associate_lambda_function' },
        { label: 'disassociate_lambda_function', value: 'disassociate_lambda_function' }
    ]}
>
<TabItem value="associate_lambda_function">

This API is in preview release for Amazon Connect and is subject to change. Allows the specified Amazon Connect instance to access the specified Lambda function.

```sql
UPDATE aws.connect.lambda_functions
SET 
FunctionArn = '{{ FunctionArn }}',
ClientToken = '{{ ClientToken }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required
AND FunctionArn = '{{ FunctionArn }}' --required;
```
</TabItem>
<TabItem value="disassociate_lambda_function">

This API is in preview release for Amazon Connect and is subject to change. Remove the Lambda function from the dropdown options available in the relevant flow blocks.

```sql
UPDATE aws.connect.lambda_functions
SET 
-- No updatable properties
WHERE 
instance_id = '{{ instance_id }}' --required
AND region = '{{ region }}' --required
AND functionArn = '{{ functionArn}}'
AND clientToken = '{{ clientToken}}';
```
</TabItem>
</Tabs>
