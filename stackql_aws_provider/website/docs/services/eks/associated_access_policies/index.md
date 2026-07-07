--- 
title: associated_access_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - associated_access_policies
  - eks
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

Creates, updates, deletes, gets or lists an <code>associated_access_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="associated_access_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.eks.associated_access_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_associated_access_policies"
    values={[
        { label: 'list_associated_access_policies', value: 'list_associated_access_policies' }
    ]}
>
<TabItem value="list_associated_access_policies">

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
    <td><CopyableCode code="accessScope" /></td>
    <td><code>object</code></td>
    <td>The scope of an AccessPolicy that's associated to an AccessEntry.</td>
</tr>
<tr>
    <td><CopyableCode code="associatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the AccessPolicy was associated with an AccessEntry.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix epoch timestamp for the last modification to the object.</td>
</tr>
<tr>
    <td><CopyableCode code="policyArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AccessPolicy.</td>
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
    <td><a href="#list_associated_access_policies"><CopyableCode code="list_associated_access_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-principal_arn"><code>principal_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the access policies associated with an access entry.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of your cluster.</td>
</tr>
<tr id="parameter-principal_arn">
    <td><CopyableCode code="principal_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM principal for the AccessEntry.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results, returned in paginated output. You receive maxResults in a single page, along with a nextToken response element. You can see the remaining results of the initial request by sending another request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a nextToken value, if applicable, are returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return. This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_associated_access_policies"
    values={[
        { label: 'list_associated_access_policies', value: 'list_associated_access_policies' }
    ]}
>
<TabItem value="list_associated_access_policies">

Lists the access policies associated with an access entry.

```sql
SELECT
accessScope,
associatedAt,
modifiedAt,
policyArn
FROM aws.eks.associated_access_policies
WHERE name = '{{ name }}' -- required
AND principal_arn = '{{ principal_arn }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
