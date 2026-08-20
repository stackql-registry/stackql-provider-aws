--- 
title: autonomous_database_peers
hide_title: false
hide_table_of_contents: false
keywords:
  - autonomous_database_peers
  - odb
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

Creates, updates, deletes, gets or lists an <code>autonomous_database_peers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="autonomous_database_peers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.odb.autonomous_database_peers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_autonomous_database_peers"
    values={[
        { label: 'list_autonomous_database_peers', value: 'list_autonomous_database_peers' }
    ]}
>
<TabItem value="list_autonomous_database_peers">

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
    <td><CopyableCode code="autonomous_database_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the peer Autonomous Database. (pattern: &lt;code&gt;arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-z0-9-_&#93;&#123;6,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="autonomous_database_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the peer Autonomous Database. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_~.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ocid" /></td>
    <td><code>string</code></td>
    <td>The Oracle Cloud Identifier (OCID) of the peer Autonomous Database.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the peer Autonomous Database is located.</td>
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
    <td><a href="#list_autonomous_database_peers"><CopyableCode code="list_autonomous_database_peers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the peer databases of the specified Autonomous Database.</td>
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
    defaultValue="list_autonomous_database_peers"
    values={[
        { label: 'list_autonomous_database_peers', value: 'list_autonomous_database_peers' }
    ]}
>
<TabItem value="list_autonomous_database_peers">

Lists the peer databases of the specified Autonomous Database.

```sql
SELECT
autonomous_database_arn,
autonomous_database_id,
ocid,
region
FROM aws.odb.autonomous_database_peers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
