--- 
title: functions
hide_title: false
hide_table_of_contents: false
keywords:
  - functions
  - mediatailor
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

Creates, updates, deletes, gets or lists a <code>functions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="functions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediatailor.functions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_function"
    values={[
        { label: 'get_function', value: 'get_function' },
        { label: 'list_functions', value: 'list_functions' }
    ]}
>
<TabItem value="get_function">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the function.</td>
</tr>
<tr>
    <td><CopyableCode code="CustomOutputConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration for a CUSTOM_OUTPUT function.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the function.</td>
</tr>
<tr>
    <td><CopyableCode code="FunctionId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the function.</td>
</tr>
<tr>
    <td><CopyableCode code="FunctionType" /></td>
    <td><code>string</code></td>
    <td>The type of the function. (HTTP_REQUEST, CUSTOM_OUTPUT, SEQUENTIAL_EXECUTOR)</td>
</tr>
<tr>
    <td><CopyableCode code="HttpRequestConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration for an HTTP_REQUEST function.</td>
</tr>
<tr>
    <td><CopyableCode code="SequentialExecutorConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration for a SEQUENTIAL_EXECUTOR function.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the function. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see Tagging AWS Elemental MediaTailor Resources.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_functions">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the function.</td>
</tr>
<tr>
    <td><CopyableCode code="CustomOutputConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration for a CUSTOM_OUTPUT function. MediaTailor evaluates the output expressions against the current session state and commits the results as output bindings. CUSTOM_OUTPUT functions do not make external calls. For more information, see CUSTOM_OUTPUT in the MediaTailor User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the function.</td>
</tr>
<tr>
    <td><CopyableCode code="FunctionId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the function.</td>
</tr>
<tr>
    <td><CopyableCode code="FunctionType" /></td>
    <td><code>string</code></td>
    <td>-- Define Enums (HTTP_REQUEST, CUSTOM_OUTPUT, SEQUENTIAL_EXECUTOR)</td>
</tr>
<tr>
    <td><CopyableCode code="HttpRequestConfiguration" /></td>
    <td><code>object</code></td>
    <td>-- Function Configuration DataStructure</td>
</tr>
<tr>
    <td><CopyableCode code="SequentialExecutorConfiguration" /></td>
    <td><code>object</code></td>
    <td>The configuration for a SEQUENTIAL_EXECUTOR function. A SEQUENTIAL_EXECUTOR runs a sequence of child functions in order, passing data between steps through temporary data. For more information, see SEQUENTIAL_EXECUTOR in the MediaTailor User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags assigned to the function. Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see Tagging AWS Elemental MediaTailor Resources.</td>
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
    <td><a href="#get_function"><CopyableCode code="get_function" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-function_id"><code>function_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the configuration and metadata for a function. For more information about functions, see Working with functions in the MediaTailor User Guide.</td>
</tr>
<tr>
    <td><a href="#list_functions"><CopyableCode code="list_functions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Retrieves all functions associated with your AWS account in the current Region. For more information about functions, see Working with functions in the MediaTailor User Guide.</td>
</tr>
<tr>
    <td><a href="#put_function"><CopyableCode code="put_function" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-function_id"><code>function_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FunctionType"><code>FunctionType</code></a></td>
    <td></td>
    <td>Creates or updates a function. A function defines reusable logic that MediaTailor executes at lifecycle hooks during ad insertion. For more information about functions, see Working with functions in the MediaTailor User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_function"><CopyableCode code="delete_function" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-function_id"><code>function_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a function. MediaTailor prevents deletion of a function that is still referenced by a playback configuration or by another function. Remove all references before deleting. For more information about functions, see Working with functions in the MediaTailor User Guide.</td>
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
<tr id="parameter-function_id">
    <td><CopyableCode code="function_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the function to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of functions that you want MediaTailor to return in response to the current request. If there are more than MaxResults functions, use the value of NextToken in the response to get the next page of results. The default value is 100. MediaTailor uses token-based pagination, which means that a response might contain fewer than MaxResults items, including 0 items, even when more results are available. To retrieve all results, you must continue making requests using the NextToken value from each response until the response no longer includes a NextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token returned by the list request when results exceed the maximum allowed. Use the token to fetch the next page of results. For the first ListFunctions request, omit this value. For subsequent requests, get the value of NextToken from the previous response and specify that value for NextToken in the request. Continue making requests until the response no longer includes a NextToken value, which indicates that all results have been retrieved.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_function"
    values={[
        { label: 'get_function', value: 'get_function' },
        { label: 'list_functions', value: 'list_functions' }
    ]}
>
<TabItem value="get_function">

Retrieves the configuration and metadata for a function. For more information about functions, see Working with functions in the MediaTailor User Guide.

```sql
SELECT
Arn,
CustomOutputConfiguration,
Description,
FunctionId,
FunctionType,
HttpRequestConfiguration,
SequentialExecutorConfiguration,
Tags
FROM aws.mediatailor.functions
WHERE function_id = '{{ function_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_functions">

Retrieves all functions associated with your AWS account in the current Region. For more information about functions, see Working with functions in the MediaTailor User Guide.

```sql
SELECT
Arn,
CustomOutputConfiguration,
Description,
FunctionId,
FunctionType,
HttpRequestConfiguration,
SequentialExecutorConfiguration,
Tags
FROM aws.mediatailor.functions
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_function"
    values={[
        { label: 'put_function', value: 'put_function' }
    ]}
>
<TabItem value="put_function">

Creates or updates a function. A function defines reusable logic that MediaTailor executes at lifecycle hooks during ad insertion. For more information about functions, see Working with functions in the MediaTailor User Guide.

```sql
REPLACE aws.mediatailor.functions
SET 
FunctionType = '{{ FunctionType }}',
Description = '{{ Description }}',
HttpRequestConfiguration = '{{ HttpRequestConfiguration }}',
CustomOutputConfiguration = '{{ CustomOutputConfiguration }}',
SequentialExecutorConfiguration = '{{ SequentialExecutorConfiguration }}',
Tags = '{{ Tags }}'
WHERE 
function_id = '{{ function_id }}' --required
AND region = '{{ region }}' --required
AND FunctionType = '{{ FunctionType }}' --required
RETURNING
Arn,
CustomOutputConfiguration,
Description,
FunctionId,
FunctionType,
HttpRequestConfiguration,
SequentialExecutorConfiguration,
Tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_function"
    values={[
        { label: 'delete_function', value: 'delete_function' }
    ]}
>
<TabItem value="delete_function">

Deletes a function. MediaTailor prevents deletion of a function that is still referenced by a playback configuration or by another function. Remove all references before deleting. For more information about functions, see Working with functions in the MediaTailor User Guide.

```sql
DELETE FROM aws.mediatailor.functions
WHERE function_id = '{{ function_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
