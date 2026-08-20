--- 
title: lenses
hide_title: false
hide_table_of_contents: false
keywords:
  - lenses
  - wellarchitected
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

Creates, updates, deletes, gets or lists a <code>lenses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lenses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wellarchitected.lenses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_lenses"
    values={[
        { label: 'list_lenses', value: 'list_lenses' }
    ]}
>
<TabItem value="list_lenses">

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
    <td><CopyableCode code="lens_summaries" /></td>
    <td><code>array</code></td>
    <td>List of lens summaries of available lenses.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next set of results. (pattern: &lt;code&gt;&#91;A-Za-z0-9+\/=_-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_lenses"><CopyableCode code="list_lenses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-LensType"><code>LensType</code></a>, <a href="#parameter-LensStatus"><code>LensStatus</code></a>, <a href="#parameter-LensName"><code>LensName</code></a></td>
    <td>List the available lenses.</td>
</tr>
<tr>
    <td><a href="#associate_lenses"><CopyableCode code="associate_lenses" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LensAliases"><code>LensAliases</code></a></td>
    <td></td>
    <td>Associate a lens to a workload. Up to 10 lenses can be associated with a workload in a single API operation. A maximum of 20 lenses can be associated with a workload. Disclaimer By accessing and/or applying custom lenses created by another Amazon Web Services user or account, you acknowledge that custom lenses created by other users and shared with you are Third Party Content as defined in the Amazon Web Services Customer Agreement.</td>
</tr>
<tr>
    <td><a href="#disassociate_lenses"><CopyableCode code="disassociate_lenses" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-workload_id"><code>workload_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LensAliases"><code>LensAliases</code></a></td>
    <td></td>
    <td>Disassociate a lens from a workload. Up to 10 lenses can be disassociated from a workload in a single API operation. The Amazon Web Services Well-Architected Framework lens (wellarchitected) cannot be removed from a workload.</td>
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
<tr id="parameter-workload_id">
    <td><CopyableCode code="workload_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-LensName">
    <td><CopyableCode code="LensName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-LensStatus">
    <td><CopyableCode code="LensStatus" /></td>
    <td><code>string</code></td>
    <td>The status of lenses to be returned.</td>
</tr>
<tr id="parameter-LensType">
    <td><CopyableCode code="LensType" /></td>
    <td><code>string</code></td>
    <td>The type of lenses to be returned.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_lenses"
    values={[
        { label: 'list_lenses', value: 'list_lenses' }
    ]}
>
<TabItem value="list_lenses">

List the available lenses.

```sql
SELECT
lens_summaries,
next_token
FROM aws.wellarchitected.lenses
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND LensType = '{{ LensType }}'
AND LensStatus = '{{ LensStatus }}'
AND LensName = '{{ LensName }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_lenses"
    values={[
        { label: 'associate_lenses', value: 'associate_lenses' }
    ]}
>
<TabItem value="associate_lenses">

Associate a lens to a workload. Up to 10 lenses can be associated with a workload in a single API operation. A maximum of 20 lenses can be associated with a workload. Disclaimer By accessing and/or applying custom lenses created by another Amazon Web Services user or account, you acknowledge that custom lenses created by other users and shared with you are Third Party Content as defined in the Amazon Web Services Customer Agreement.

```sql
UPDATE aws.wellarchitected.lenses
SET 
LensAliases = '{{ LensAliases }}'
WHERE 
workload_id = '{{ workload_id }}' --required
AND region = '{{ region }}' --required
AND LensAliases = '{{ LensAliases }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_lenses"
    values={[
        { label: 'disassociate_lenses', value: 'disassociate_lenses' }
    ]}
>
<TabItem value="disassociate_lenses">

Disassociate a lens from a workload. Up to 10 lenses can be disassociated from a workload in a single API operation. The Amazon Web Services Well-Architected Framework lens (wellarchitected) cannot be removed from a workload.

```sql
EXEC aws.wellarchitected.lenses.disassociate_lenses 
@workload_id='{{ workload_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"LensAliases": "{{ LensAliases }}"
}'
;
```
</TabItem>
</Tabs>
