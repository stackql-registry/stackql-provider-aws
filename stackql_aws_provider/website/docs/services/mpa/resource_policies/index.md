--- 
title: resource_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_policies
  - mpa
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

Creates, updates, deletes, gets or lists a <code>resource_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mpa.resource_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_policy"
    values={[
        { label: 'get_resource_policy', value: 'get_resource_policy' },
        { label: 'list_resource_policies', value: 'list_resource_policies' }
    ]}
>
<TabItem value="get_resource_policy">

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
    <td><CopyableCode code="PolicyDocument" /></td>
    <td><code>string</code></td>
    <td>Document that contains the contents for the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyName" /></td>
    <td><code>string</code></td>
    <td>Name of the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyType" /></td>
    <td><code>string</code></td>
    <td>The type of policy (AWS_MANAGED, AWS_RAM)</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyVersionArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the policy version.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_resource_policies">

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
    <td><CopyableCode code="PolicyArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for policy.</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyName" /></td>
    <td><code>string</code></td>
    <td>Name of the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="PolicyType" /></td>
    <td><code>string</code></td>
    <td>The type of policy. (AWS_MANAGED, AWS_RAM)</td>
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
    <td><a href="#get_resource_policy"><CopyableCode code="get_resource_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details about a policy for a resource.</td>
</tr>
<tr>
    <td><a href="#list_resource_policies"><CopyableCode code="list_resource_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns a list of policies for a resource.</td>
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
<tr id="parameter-resource_arn">
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the resource.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return in the response. If more results exist than the specified MaxResults value, a token is included in the response so that you can retrieve the remaining results.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If present, indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a next call to the operation to get more output. You can repeat this until the NextToken response element returns null.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_resource_policy"
    values={[
        { label: 'get_resource_policy', value: 'get_resource_policy' },
        { label: 'list_resource_policies', value: 'list_resource_policies' }
    ]}
>
<TabItem value="get_resource_policy">

Returns details about a policy for a resource.

```sql
SELECT
PolicyDocument,
PolicyName,
PolicyType,
PolicyVersionArn,
ResourceArn
FROM aws.mpa.resource_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_resource_policies">

Returns a list of policies for a resource.

```sql
SELECT
PolicyArn,
PolicyName,
PolicyType
FROM aws.mpa.resource_policies
WHERE resource_arn = '{{ resource_arn }}' -- required
AND region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
