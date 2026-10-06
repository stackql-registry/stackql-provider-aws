--- 
title: viewer_session_revocations
hide_title: false
hide_table_of_contents: false
keywords:
  - viewer_session_revocations
  - ivs
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

Creates, updates, deletes, gets or lists a <code>viewer_session_revocations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="viewer_session_revocations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ivs.viewer_session_revocations" /></td></tr>
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
    <td><a href="#batch_start_viewer_session_revocation"><CopyableCode code="batch_start_viewer_session_revocation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-viewerSessions"><code>viewerSessions</code></a></td>
    <td></td>
    <td>Performs StartViewerSessionRevocation on multiple channel ARN and viewer ID pairs simultaneously.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="batch_start_viewer_session_revocation"
    values={[
        { label: 'batch_start_viewer_session_revocation', value: 'batch_start_viewer_session_revocation' }
    ]}
>
<TabItem value="batch_start_viewer_session_revocation">

Performs StartViewerSessionRevocation on multiple channel ARN and viewer ID pairs simultaneously.

```sql
EXEC aws.ivs.viewer_session_revocations.batch_start_viewer_session_revocation 
@region='{{ region }}' --required 
@@json=
'{
"viewerSessions": "{{ viewerSessions }}"
}'
;
```
</TabItem>
</Tabs>
