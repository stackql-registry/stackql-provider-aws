--- 
title: connection_proposals
hide_title: false
hide_table_of_contents: false
keywords:
  - connection_proposals
  - interconnect
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

Creates, updates, deletes, gets or lists a <code>connection_proposals</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connection_proposals" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.interconnect.connection_proposals" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_connection_proposal"
    values={[
        { label: 'describe_connection_proposal', value: 'describe_connection_proposal' }
    ]}
>
<TabItem value="describe_connection_proposal">

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
    <td><CopyableCode code="bandwidth" /></td>
    <td><code>string</code></td>
    <td>The bandwidth of the proposed Connection. (pattern: &lt;code&gt;\d+&#91;MG&#93;bps&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Environment upon which the Connection would be placed if this proposal were accepted.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>The partner specific location distinguisher of the specific Environment of the proposal.</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>object</code></td>
    <td>The partner provider of the specific Environment of the proposal.</td>
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
    <td><a href="#describe_connection_proposal"><CopyableCode code="describe_connection_proposal" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the details of a connection proposal generated at a partner's portal.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_connection_proposal"
    values={[
        { label: 'describe_connection_proposal', value: 'describe_connection_proposal' }
    ]}
>
<TabItem value="describe_connection_proposal">

Describes the details of a connection proposal generated at a partner's portal.

```sql
SELECT
bandwidth,
environmentId,
location,
provider
FROM aws.interconnect.connection_proposals
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
