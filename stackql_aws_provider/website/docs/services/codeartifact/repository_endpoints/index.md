--- 
title: repository_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - repository_endpoints
  - codeartifact
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

Creates, updates, deletes, gets or lists a <code>repository_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repository_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeartifact.repository_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_repository_endpoint"
    values={[
        { label: 'get_repository_endpoint', value: 'get_repository_endpoint' }
    ]}
>
<TabItem value="get_repository_endpoint">

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
    <td><CopyableCode code="repositoryEndpoint" /></td>
    <td><code>string</code></td>
    <td>A string that specifies the URL of the returned endpoint.</td>
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
    <td><a href="#get_repository_endpoint"><CopyableCode code="get_repository_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-repository"><code>repository</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-domain-owner"><code>domain-owner</code></a>, <a href="#parameter-endpointType"><code>endpointType</code></a></td>
    <td>Returns the endpoint of a repository for a specific package format. A repository has one endpoint for each package format: cargo generic maven npm nuget pypi ruby swift</td>
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
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The name of the domain that contains the repository.</td>
</tr>
<tr id="parameter-format">
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>Returns which endpoint of a repository to return. A repository has one endpoint for each package format.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-repository">
    <td><CopyableCode code="repository" /></td>
    <td><code>string</code></td>
    <td>The name of the repository.</td>
</tr>
<tr id="parameter-domain-owner">
    <td><CopyableCode code="domain-owner" /></td>
    <td><code>string</code></td>
    <td>The 12-digit account number of the Amazon Web Services account that owns the domain that contains the repository. It does not include dashes or spaces.</td>
</tr>
<tr id="parameter-endpointType">
    <td><CopyableCode code="endpointType" /></td>
    <td><code>string</code></td>
    <td>A string that specifies the type of endpoint.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_repository_endpoint"
    values={[
        { label: 'get_repository_endpoint', value: 'get_repository_endpoint' }
    ]}
>
<TabItem value="get_repository_endpoint">

Returns the endpoint of a repository for a specific package format. A repository has one endpoint for each package format: cargo generic maven npm nuget pypi ruby swift

```sql
SELECT
repositoryEndpoint
FROM aws.codeartifact.repository_endpoints
WHERE domain = '{{ domain }}' -- required
AND repository = '{{ repository }}' -- required
AND format = '{{ format }}' -- required
AND region = '{{ region }}' -- required
AND `domain-owner` = '{{ domain-owner }}'
AND endpointType = '{{ endpointType }}'
;
```
</TabItem>
</Tabs>
