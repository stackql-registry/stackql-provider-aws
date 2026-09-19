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
<tr>
    <td><a href="#start_activity_stream"><CopyableCode code="start_activity_stream" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-KmsKeyId"><code>KmsKeyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Mode"><code>Mode</code></a>, <a href="#parameter-ApplyImmediately"><code>ApplyImmediately</code></a>, <a href="#parameter-EngineNativeAuditFieldsIncluded"><code>EngineNativeAuditFieldsIncluded</code></a></td>
    <td>Starts a database activity stream to monitor activity on the database. For more information, see Monitoring Amazon Aurora with Database Activity Streams in the Amazon Aurora User Guide or Monitoring Amazon RDS with Database Activity Streams in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><a href="#stop_activity_stream"><CopyableCode code="stop_activity_stream" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ApplyImmediately"><code>ApplyImmediately</code></a></td>
    <td>Stops a database activity stream that was started using the Amazon Web Services console, the start-activity-stream CLI command, or the StartActivityStream operation. For more information, see Monitoring Amazon Aurora with Database Activity Streams in the Amazon Aurora User Guide or Monitoring Amazon RDS with Database Activity Streams in the Amazon RDS User Guide.</td>
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
<tr id="parameter-KmsKeyId">
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services KMS key identifier for encrypting messages in the database activity stream. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.</td>
</tr>
<tr id="parameter-ResourceArn">
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the DB cluster for the database activity stream. For example, arn:aws:rds:us-east-1:12345667890:cluster:das-cluster.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ApplyImmediately">
    <td><CopyableCode code="ApplyImmediately" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether or not the database activity stream is to stop as soon as possible, regardless of the maintenance window for the database.</td>
</tr>
<tr id="parameter-AuditPolicyState">
    <td><CopyableCode code="AuditPolicyState" /></td>
    <td><code>string</code></td>
    <td>The audit policy state. When a policy is unlocked, it is read/write. When it is locked, it is read-only. You can edit your audit policy only when the activity stream is unlocked or stopped.</td>
</tr>
<tr id="parameter-EngineNativeAuditFieldsIncluded">
    <td><CopyableCode code="EngineNativeAuditFieldsIncluded" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the database activity stream includes engine-native audit fields. This option applies to an Oracle or Microsoft SQL Server DB instance. By default, no engine-native audit fields are included.</td>
</tr>
<tr id="parameter-Mode">
    <td><CopyableCode code="Mode" /></td>
    <td><code>string</code></td>
    <td>Specifies the mode of the database activity stream. Database events such as a change or access generate an activity stream event. The database session can handle these events either synchronously or asynchronously.</td>
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


## Lifecycle Methods

<Tabs
    defaultValue="start_activity_stream"
    values={[
        { label: 'start_activity_stream', value: 'start_activity_stream' },
        { label: 'stop_activity_stream', value: 'stop_activity_stream' }
    ]}
>
<TabItem value="start_activity_stream">

Starts a database activity stream to monitor activity on the database. For more information, see Monitoring Amazon Aurora with Database Activity Streams in the Amazon Aurora User Guide or Monitoring Amazon RDS with Database Activity Streams in the Amazon RDS User Guide.

```sql
EXEC aws.rds.activity_streams.start_activity_stream 
@ResourceArn='{{ ResourceArn }}' --required, 
@KmsKeyId='{{ KmsKeyId }}' --required, 
@region='{{ region }}' --required, 
@Mode='{{ Mode }}', 
@ApplyImmediately={{ ApplyImmediately }}, 
@EngineNativeAuditFieldsIncluded={{ EngineNativeAuditFieldsIncluded }}
;
```
</TabItem>
<TabItem value="stop_activity_stream">

Stops a database activity stream that was started using the Amazon Web Services console, the start-activity-stream CLI command, or the StartActivityStream operation. For more information, see Monitoring Amazon Aurora with Database Activity Streams in the Amazon Aurora User Guide or Monitoring Amazon RDS with Database Activity Streams in the Amazon RDS User Guide.

```sql
EXEC aws.rds.activity_streams.stop_activity_stream 
@ResourceArn='{{ ResourceArn }}' --required, 
@region='{{ region }}' --required, 
@ApplyImmediately={{ ApplyImmediately }}
;
```
</TabItem>
</Tabs>
