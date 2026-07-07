--- 
title: domain_maintenances
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_maintenances
  - opensearch
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

Creates, updates, deletes, gets or lists a <code>domain_maintenances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_maintenances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.domain_maintenances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_domain_maintenances"
    values={[
        { label: 'list_domain_maintenances', value: 'list_domain_maintenances' }
    ]}
>
<TabItem value="list_domain_maintenances">

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
    <td><CopyableCode code="DomainMaintenances" /></td>
    <td><code>array</code></td>
    <td>A list of the submitted maintenance actions.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>When nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Send the request again using the returned token to retrieve the next page.</td>
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
    <td><a href="#list_domain_maintenances"><CopyableCode code="list_domain_maintenances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-action"><code>action</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>A list of maintenance actions for the domain.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The name of the domain.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-action">
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The name of the action.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>An optional parameter that specifies the maximum number of results to return. You can use nextToken to get the next page of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If your initial ListDomainMaintenances operation returns a nextToken, include the returned nextToken in subsequent ListDomainMaintenances operations, which returns results in the next page.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the action.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_domain_maintenances"
    values={[
        { label: 'list_domain_maintenances', value: 'list_domain_maintenances' }
    ]}
>
<TabItem value="list_domain_maintenances">

A list of maintenance actions for the domain.

```sql
SELECT
DomainMaintenances,
NextToken
FROM aws.opensearch.domain_maintenances
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
AND action = '{{ action }}'
AND status = '{{ status }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
