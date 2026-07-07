--- 
title: functions
hide_title: false
hide_table_of_contents: false
keywords:
  - functions
  - cloudfront
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.functions" /></td></tr>
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
    <td><CopyableCode code="ContentType" /></td>
    <td><code>string</code></td>
    <td>The content type (media type) of the response.</td>
</tr>
<tr>
    <td><CopyableCode code="ETag" /></td>
    <td><code>string</code></td>
    <td>The version identifier for the current version of the CloudFront function.</td>
</tr>
<tr>
    <td><CopyableCode code="FunctionCode" /></td>
    <td><code>string</code></td>
    <td>The function code of a CloudFront function.</td>
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
    <td><CopyableCode code="Items" /></td>
    <td><code>string</code></td>
    <td>Contains the functions in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of functions requested.</td>
</tr>
<tr>
    <td><CopyableCode code="NextMarker" /></td>
    <td><code>string</code></td>
    <td>If there are more items in the list than are in this response, this element is present. It contains the value that you should use in the Marker field of a subsequent request to continue listing functions where you left off.</td>
</tr>
<tr>
    <td><CopyableCode code="Quantity" /></td>
    <td><code>integer</code></td>
    <td>The number of functions returned in the response.</td>
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
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Stage"><code>Stage</code></a></td>
    <td>Gets the code of a CloudFront function. To get configuration information and metadata about a function, use DescribeFunction. To get a function's code, you must provide the function's name and stage. To get these values, you can use ListFunctions.</td>
</tr>
<tr>
    <td><a href="#list_functions"><CopyableCode code="list_functions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a>, <a href="#parameter-Stage"><code>Stage</code></a></td>
    <td>Gets a list of all CloudFront functions in your Amazon Web Services account. You can optionally apply a filter to return only the functions that are in the specified stage, either DEVELOPMENT or LIVE. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.</td>
</tr>
<tr>
    <td><a href="#create_function"><CopyableCode code="create_function" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FunctionConfig"><code>FunctionConfig</code></a>, <a href="#parameter-FunctionCode"><code>FunctionCode</code></a></td>
    <td></td>
    <td>Creates a CloudFront function. To create a function, you provide the function code and some configuration information about the function. The response contains an Amazon Resource Name (ARN) that uniquely identifies the function. When you create a function, it's in the DEVELOPMENT stage. In this stage, you can test the function with TestFunction, and update it with UpdateFunction. When you're ready to use your function with a CloudFront distribution, use PublishFunction to copy the function from the DEVELOPMENT stage to LIVE. When it's live, you can attach the function to a distribution's cache behavior, using the function's ARN.</td>
</tr>
<tr>
    <td><a href="#update_function"><CopyableCode code="update_function" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FunctionConfig"><code>FunctionConfig</code></a>, <a href="#parameter-FunctionCode"><code>FunctionCode</code></a></td>
    <td></td>
    <td>Updates a CloudFront function. You can update a function's code or the comment that describes the function. You cannot update a function's name. To update a function, you provide the function's name and version (ETag value) along with the updated function code. To get the name and version, you can use ListFunctions and DescribeFunction.</td>
</tr>
<tr>
    <td><a href="#delete_function"><CopyableCode code="delete_function" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a CloudFront function. You cannot delete a function if it's associated with a cache behavior. First, update your distributions to remove the function association from all cache behaviors, then delete the function. To delete a function, you must provide the function's name and version (ETag value). To get these values, you can use ListFunctions and DescribeFunction.</td>
</tr>
<tr>
    <td><a href="#describe_function"><CopyableCode code="describe_function" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Stage"><code>Stage</code></a></td>
    <td>Gets configuration information and metadata about a CloudFront function, but not the function's code. To get a function's code, use GetFunction. To get configuration information and metadata about a function, you must provide the function's name and stage. To get these values, you can use ListFunctions.</td>
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
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The current version (ETag value) of the function that you are deleting, which you can get using DescribeFunction.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the function that you are getting information about.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this field when paginating results to indicate where to begin in your list of functions. The response includes functions in the list that occur after the marker. To get the next page of the list, set this field's value to the value of NextMarker from the current page's response.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>string</code></td>
    <td>The maximum number of functions that you want in the response.</td>
</tr>
<tr id="parameter-Stage">
    <td><CopyableCode code="Stage" /></td>
    <td><code>string</code></td>
    <td>The function's stage, either DEVELOPMENT or LIVE.</td>
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

Gets the code of a CloudFront function. To get configuration information and metadata about a function, use DescribeFunction. To get a function's code, you must provide the function's name and stage. To get these values, you can use ListFunctions.

```sql
SELECT
ContentType,
ETag,
FunctionCode
FROM aws.cloudfront.functions
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
AND Stage = '{{ Stage }}'
;
```
</TabItem>
<TabItem value="list_functions">

Gets a list of all CloudFront functions in your Amazon Web Services account. You can optionally apply a filter to return only the functions that are in the specified stage, either DEVELOPMENT or LIVE. You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the NextMarker value from the current response as the Marker value in the subsequent request.

```sql
SELECT
Items,
MaxItems,
NextMarker,
Quantity
FROM aws.cloudfront.functions
WHERE region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
AND Stage = '{{ Stage }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_function"
    values={[
        { label: 'create_function', value: 'create_function' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_function">

Creates a CloudFront function. To create a function, you provide the function code and some configuration information about the function. The response contains an Amazon Resource Name (ARN) that uniquely identifies the function. When you create a function, it's in the DEVELOPMENT stage. In this stage, you can test the function with TestFunction, and update it with UpdateFunction. When you're ready to use your function with a CloudFront distribution, use PublishFunction to copy the function from the DEVELOPMENT stage to LIVE. When it's live, you can attach the function to a distribution's cache behavior, using the function's ARN.

```sql
INSERT INTO aws.cloudfront.functions (
Name,
FunctionConfig,
FunctionCode,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ FunctionConfig }}' /* required */,
'{{ FunctionCode }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
ETag,
FunctionSummary,
Location
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: functions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the functions resource.
    - name: Name
      value: "{{ Name }}"
    - name: FunctionConfig
      description: |
        Contains configuration information about a CloudFront function.
      value:
        Comment: "{{ Comment }}"
        Runtime: "{{ Runtime }}"
        KeyValueStoreAssociations:
          Quantity: {{ Quantity }}
          Items:
            - KeyValueStoreARN: "{{ KeyValueStoreARN }}"
    - name: FunctionCode
      value: "{{ FunctionCode }}"
    - name: Tags
      description: |
        A complex type that contains zero or more Tag elements.
      value:
        Items:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_function"
    values={[
        { label: 'update_function', value: 'update_function' }
    ]}
>
<TabItem value="update_function">

Updates a CloudFront function. You can update a function's code or the comment that describes the function. You cannot update a function's name. To update a function, you provide the function's name and version (ETag value) along with the updated function code. To get the name and version, you can use ListFunctions and DescribeFunction.

```sql
UPDATE aws.cloudfront.functions
SET 
FunctionConfig = '{{ FunctionConfig }}',
FunctionCode = '{{ FunctionCode }}'
WHERE 
name = '{{ name }}' --required
AND `If-Match` = '{{ If-Match }}' --required
AND region = '{{ region }}' --required
AND FunctionConfig = '{{ FunctionConfig }}' --required
AND FunctionCode = '{{ FunctionCode }}' --required
RETURNING
ETag,
FunctionSummary;
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

Deletes a CloudFront function. You cannot delete a function if it's associated with a cache behavior. First, update your distributions to remove the function association from all cache behaviors, then delete the function. To delete a function, you must provide the function's name and version (ETag value). To get these values, you can use ListFunctions and DescribeFunction.

```sql
DELETE FROM aws.cloudfront.functions
WHERE name = '{{ name }}' --required
AND `If-Match` = '{{ If-Match }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="describe_function"
    values={[
        { label: 'describe_function', value: 'describe_function' }
    ]}
>
<TabItem value="describe_function">

Gets configuration information and metadata about a CloudFront function, but not the function's code. To get a function's code, use GetFunction. To get configuration information and metadata about a function, you must provide the function's name and stage. To get these values, you can use ListFunctions.

```sql
EXEC aws.cloudfront.functions.describe_function 
@name='{{ name }}' --required, 
@region='{{ region }}' --required, 
@Stage='{{ Stage }}'
;
```
</TabItem>
</Tabs>
