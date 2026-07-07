--- 
title: inactive_approval_team_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - inactive_approval_team_versions
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

Creates, updates, deletes, gets or lists an <code>inactive_approval_team_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="inactive_approval_team_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mpa.inactive_approval_team_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#delete_inactive_approval_team_version"><CopyableCode code="delete_inactive_approval_team_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-version_id"><code>version_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an inactive approval team. For more information, see Team health in the Multi-party approval User Guide. You can also use this operation to delete a team draft. For more information, see Interacting with drafts in the Multi-party approval User Guide.</td>
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
<tr id="parameter-arn">
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Amaazon Resource Name (ARN) for the team.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-version_id">
    <td><CopyableCode code="version_id" /></td>
    <td><code>string</code></td>
    <td>Version ID for the team.</td>
</tr>
</tbody>
</table>

## `DELETE` examples

<Tabs
    defaultValue="delete_inactive_approval_team_version"
    values={[
        { label: 'delete_inactive_approval_team_version', value: 'delete_inactive_approval_team_version' }
    ]}
>
<TabItem value="delete_inactive_approval_team_version">

Deletes an inactive approval team. For more information, see Team health in the Multi-party approval User Guide. You can also use this operation to delete a team draft. For more information, see Interacting with drafts in the Multi-party approval User Guide.

```sql
DELETE FROM aws.mpa.inactive_approval_team_versions
WHERE arn = '{{ arn }}' --required
AND version_id = '{{ version_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
