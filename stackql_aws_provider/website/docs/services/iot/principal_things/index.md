--- 
title: principal_things
hide_title: false
hide_table_of_contents: false
keywords:
  - principal_things
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

Creates, updates, deletes, gets or lists a <code>principal_things</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="principal_things" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.principal_things" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_principal_things"
    values={[
        { label: 'list_principal_things', value: 'list_principal_things' }
    ]}
>
<TabItem value="list_principal_things">

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
    <td><CopyableCode code="thing" /></td>
    <td><code>string</code></td>
    <td>The things.</td>
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
    <td><a href="#list_principal_things"><CopyableCode code="list_principal_things" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amzn-principal"><code>x-amzn-principal</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the things associated with the specified principal. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities. Requires permission to access the ListPrincipalThings action.</td>
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
<tr id="parameter-x-amzn-principal">
    <td><CopyableCode code="x-amzn-principal" /></td>
    <td><code>string</code></td>
    <td>The principal.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this operation.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_principal_things"
    values={[
        { label: 'list_principal_things', value: 'list_principal_things' }
    ]}
>
<TabItem value="list_principal_things">

Lists the things associated with the specified principal. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities. Requires permission to access the ListPrincipalThings action.

```sql
SELECT
thing
FROM aws.iot.principal_things
WHERE `x-amzn-principal` = '{{ x-amzn-principal }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
