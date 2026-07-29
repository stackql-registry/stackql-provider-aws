--- 
title: connectors_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - connectors_v2s
  - securityhub
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

Creates, updates, deletes, gets or lists a <code>connectors_v2s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connectors_v2s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.connectors_v2s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_connectors_v2"
    values={[
        { label: 'list_connectors_v2', value: 'list_connectors_v2' }
    ]}
>
<TabItem value="list_connectors_v2">

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
    <td><CopyableCode code="connectors" /></td>
    <td><code>array</code></td>
    <td>An array of connectorV2 summaries.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The pagination token to use to request the next page of results. Otherwise, this parameter is null.</td>
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
    <td><a href="#list_connectors_v2"><CopyableCode code="list_connectors_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-ProviderName"><code>ProviderName</code></a>, <a href="#parameter-ConnectorStatus"><code>ConnectorStatus</code></a></td>
    <td>Grants permission to retrieve a list of connectorsV2 and their metadata for the calling account.</td>
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
<tr id="parameter-ConnectorStatus">
    <td><CopyableCode code="ConnectorStatus" /></td>
    <td><code>string</code></td>
    <td>The status for the connectorV2.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token per the Amazon Web Services Pagination standard</td>
</tr>
<tr id="parameter-ProviderName">
    <td><CopyableCode code="ProviderName" /></td>
    <td><code>string</code></td>
    <td>The name of the third-party provider.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_connectors_v2"
    values={[
        { label: 'list_connectors_v2', value: 'list_connectors_v2' }
    ]}
>
<TabItem value="list_connectors_v2">

Grants permission to retrieve a list of connectorsV2 and their metadata for the calling account.

```sql
SELECT
connectors,
next_token
FROM aws.securityhub.connectors_v2s
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND ProviderName = '{{ ProviderName }}'
AND ConnectorStatus = '{{ ConnectorStatus }}'
;
```
</TabItem>
</Tabs>
