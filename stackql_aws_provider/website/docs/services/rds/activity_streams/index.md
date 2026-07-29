--- 
title: activity_streams
hide_title: false
hide_table_of_contents: false
keywords:
  - activity_streams
  - rds
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

Creates, updates, deletes, gets or lists an <code>activity_streams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="activity_streams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.activity_streams" /></td></tr>
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
    <td><a href="#modify_activity_stream"><CopyableCode code="modify_activity_stream" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-AuditPolicyState"><code>AuditPolicyState</code></a></td>
    <td>Changes the audit policy state of a database activity stream to either locked (default) or unlocked. A locked policy is read-only, whereas an unlocked policy is read/write. If your activity stream is started and locked, you can unlock it, customize your audit policy, and then lock your activity stream. Restarting the activity stream isn't required. For more information, see Modifying a database activity stream in the Amazon RDS User Guide. This operation is supported for RDS for Oracle and Microsoft SQL Server.</td>
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
<tr id="parameter-AuditPolicyState">
    <td><CopyableCode code="AuditPolicyState" /></td>
    <td><code>string</code></td>
    <td>The audit policy state. When a policy is unlocked, it is read/write. When it is locked, it is read-only. You can edit your audit policy only when the activity stream is unlocked or stopped.</td>
</tr>
<tr id="parameter-ResourceArn">
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the RDS for Oracle or Microsoft SQL Server DB instance. For example, arn:aws:rds:us-east-1:12345667890:db:my-orcl-db.</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="modify_activity_stream"
    values={[
        { label: 'modify_activity_stream', value: 'modify_activity_stream' }
    ]}
>
<TabItem value="modify_activity_stream">

Changes the audit policy state of a database activity stream to either locked (default) or unlocked. A locked policy is read-only, whereas an unlocked policy is read/write. If your activity stream is started and locked, you can unlock it, customize your audit policy, and then lock your activity stream. Restarting the activity stream isn't required. For more information, see Modifying a database activity stream in the Amazon RDS User Guide. This operation is supported for RDS for Oracle and Microsoft SQL Server.

```sql
UPDATE aws.rds.activity_streams
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required
AND ResourceArn = '{{ ResourceArn}}'
AND AuditPolicyState = '{{ AuditPolicyState}}'
RETURNING
engine_native_audit_fields_included,
kinesis_stream_name,
kms_key_id,
mode,
policy_status,
status;
```
</TabItem>
</Tabs>
