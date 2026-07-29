--- 
title: snapshot_copy_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshot_copy_configurations
  - redshift_serverless
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

Creates, updates, deletes, gets or lists a <code>snapshot_copy_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="snapshot_copy_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift_serverless.snapshot_copy_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_snapshot_copy_configurations"
    values={[
        { label: 'list_snapshot_copy_configurations', value: 'list_snapshot_copy_configurations' }
    ]}
>
<TabItem value="list_snapshot_copy_configurations">

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
    <td><CopyableCode code="destination_kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the KMS key to use to encrypt your snapshots in the destination Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_region" /></td>
    <td><code>string</code></td>
    <td>The destination Amazon Web Services Region to copy snapshots to.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the namespace to copy snapshots from in the source Amazon Web Services Region. (pattern: &lt;code&gt;^&#91;a-z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_copy_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the snapshot copy configuration object.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_copy_configuration_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the snapshot copy configuration object.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_retention_period" /></td>
    <td><code>integer</code></td>
    <td>The retention period of snapshots that are copied to the destination Amazon Web Services Region.</td>
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
    <td><a href="#list_snapshot_copy_configurations"><CopyableCode code="list_snapshot_copy_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of snapshot copy configurations.</td>
</tr>
<tr>
    <td><a href="#create_snapshot_copy_configuration"><CopyableCode code="create_snapshot_copy_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-destinationRegion"><code>destinationRegion</code></a>, <a href="#parameter-namespaceName"><code>namespaceName</code></a></td>
    <td></td>
    <td>Creates a snapshot copy configuration that lets you copy snapshots to another Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#update_snapshot_copy_configuration"><CopyableCode code="update_snapshot_copy_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-snapshotCopyConfigurationId"><code>snapshotCopyConfigurationId</code></a></td>
    <td></td>
    <td>Updates a snapshot copy configuration.</td>
</tr>
<tr>
    <td><a href="#delete_snapshot_copy_configuration"><CopyableCode code="delete_snapshot_copy_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a snapshot copy configuration</td>
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
    defaultValue="list_snapshot_copy_configurations"
    values={[
        { label: 'list_snapshot_copy_configurations', value: 'list_snapshot_copy_configurations' }
    ]}
>
<TabItem value="list_snapshot_copy_configurations">

Returns a list of snapshot copy configurations.

```sql
SELECT
destination_kms_key_id,
destination_region,
namespace_name,
snapshot_copy_configuration_arn,
snapshot_copy_configuration_id,
snapshot_retention_period
FROM aws.redshift_serverless.snapshot_copy_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_snapshot_copy_configuration"
    values={[
        { label: 'create_snapshot_copy_configuration', value: 'create_snapshot_copy_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_snapshot_copy_configuration">

Creates a snapshot copy configuration that lets you copy snapshots to another Amazon Web Services Region.

```sql
INSERT INTO aws.redshift_serverless.snapshot_copy_configurations (
destinationKmsKeyId,
destinationRegion,
namespaceName,
snapshotRetentionPeriod,
region
)
SELECT 
'{{ destinationKmsKeyId }}',
'{{ destinationRegion }}' /* required */,
'{{ namespaceName }}' /* required */,
{{ snapshotRetentionPeriod }},
'{{ region }}'
RETURNING
snapshot_copy_configuration
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: snapshot_copy_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the snapshot_copy_configurations resource.
    - name: destinationKmsKeyId
      value: "{{ destinationKmsKeyId }}"
      description: |
        The KMS key to use to encrypt your snapshots in the destination Amazon Web Services Region.
    - name: destinationRegion
      value: "{{ destinationRegion }}"
      description: |
        The destination Amazon Web Services Region that you want to copy snapshots to.
    - name: namespaceName
      value: "{{ namespaceName }}"
      description: |
        The name of the namespace to copy snapshots from.
    - name: snapshotRetentionPeriod
      value: {{ snapshotRetentionPeriod }}
      description: |
        The retention period of the snapshots that you copy to the destination Amazon Web Services Region.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_snapshot_copy_configuration"
    values={[
        { label: 'update_snapshot_copy_configuration', value: 'update_snapshot_copy_configuration' }
    ]}
>
<TabItem value="update_snapshot_copy_configuration">

Updates a snapshot copy configuration.

```sql
UPDATE aws.redshift_serverless.snapshot_copy_configurations
SET 
snapshotCopyConfigurationId = '{{ snapshotCopyConfigurationId }}',
snapshotRetentionPeriod = {{ snapshotRetentionPeriod }}
WHERE 
region = '{{ region }}' --required
AND snapshotCopyConfigurationId = '{{ snapshotCopyConfigurationId }}' --required
RETURNING
snapshot_copy_configuration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_snapshot_copy_configuration"
    values={[
        { label: 'delete_snapshot_copy_configuration', value: 'delete_snapshot_copy_configuration' }
    ]}
>
<TabItem value="delete_snapshot_copy_configuration">

Deletes a snapshot copy configuration

```sql
DELETE FROM aws.redshift_serverless.snapshot_copy_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
