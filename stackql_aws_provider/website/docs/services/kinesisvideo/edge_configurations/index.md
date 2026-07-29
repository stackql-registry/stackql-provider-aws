--- 
title: edge_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - edge_configurations
  - kinesisvideo
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

Creates, updates, deletes, gets or lists an <code>edge_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="edge_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesisvideo.edge_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_edge_configuration"
    values={[
        { label: 'describe_edge_configuration', value: 'describe_edge_configuration' }
    ]}
>
<TabItem value="describe_edge_configuration">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which a stream’s edge configuration was first created.</td>
</tr>
<tr>
    <td><CopyableCode code="edge_agent_status" /></td>
    <td><code>object</code></td>
    <td>An object that contains the latest status details for an edge agent's recorder and uploader jobs. Use this information to determine the current health of an edge agent.</td>
</tr>
<tr>
    <td><CopyableCode code="edge_config" /></td>
    <td><code>object</code></td>
    <td>A description of the stream's edge configuration that will be used to sync with the Edge Agent IoT Greengrass component. The Edge Agent component will run on an IoT Hub Device setup at your premise.</td>
</tr>
<tr>
    <td><CopyableCode code="failed_status_details" /></td>
    <td><code>string</code></td>
    <td>A description of the generated failure status.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which a stream’s edge configuration was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="stream_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the stream. (pattern: &lt;code&gt;arn:&#91;a-z\d-&#93;+:kinesisvideo:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:&#91;a-z&#93;+/&#91;a-zA-Z0-9_.-&#93;+/&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_name" /></td>
    <td><code>string</code></td>
    <td>The name of the stream from which the edge configuration was updated. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sync_status" /></td>
    <td><code>string</code></td>
    <td>The latest status of the edge configuration update. (SYNCING, ACKNOWLEDGED, IN_SYNC, SYNC_FAILED, DELETING, DELETE_FAILED, DELETING_ACKNOWLEDGED)</td>
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
    <td><a href="#describe_edge_configuration"><CopyableCode code="describe_edge_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a stream’s edge configuration that was set using the StartEdgeConfigurationUpdate API and the latest status of the edge agent's recorder and uploader jobs. Use this API to get the status of the configuration to determine if the configuration is in sync with the Edge Agent. Use this API to evaluate the health of the Edge Agent.</td>
</tr>
<tr>
    <td><a href="#delete_edge_configuration"><CopyableCode code="delete_edge_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>An asynchronous API that deletes a stream’s existing edge configuration, as well as the corresponding media from the Edge Agent. When you invoke this API, the sync status is set to DELETING. A deletion process starts, in which active edge jobs are stopped and all media is deleted from the edge device. The time to delete varies, depending on the total amount of stored media. If the deletion process fails, the sync status changes to DELETE_FAILED. You will need to re-try the deletion. When the deletion process has completed successfully, the edge configuration is no longer accessible.</td>
</tr>
<tr>
    <td><a href="#start_edge_configuration_update"><CopyableCode code="start_edge_configuration_update" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EdgeConfig"><code>EdgeConfig</code></a></td>
    <td></td>
    <td>An asynchronous API that updates a stream’s existing edge configuration. The Kinesis Video Stream will sync the stream’s edge configuration with the Edge Agent IoT Greengrass component that runs on an IoT Hub Device, setup at your premise. The time to sync can vary and depends on the connectivity of the Hub Device. The SyncStatus will be updated as the edge configuration is acknowledged, and synced with the Edge Agent. If this API is invoked for the first time, a new edge configuration will be created for the stream, and the sync status will be set to SYNCING. You will have to wait for the sync status to reach a terminal state such as: IN_SYNC, or SYNC_FAILED, before using this API again. If you invoke this API during the syncing process, a ResourceInUseException will be thrown. The connectivity of the stream’s edge configuration and the Edge Agent will be retried for 15 minutes. After 15 minutes, the status will transition into the SYNC_FAILED state. To move an edge configuration from one device to another, use DeleteEdgeConfiguration to delete the current edge configuration. You can then invoke StartEdgeConfigurationUpdate with an updated Hub Device ARN.</td>
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
    defaultValue="describe_edge_configuration"
    values={[
        { label: 'describe_edge_configuration', value: 'describe_edge_configuration' }
    ]}
>
<TabItem value="describe_edge_configuration">

Describes a stream’s edge configuration that was set using the StartEdgeConfigurationUpdate API and the latest status of the edge agent's recorder and uploader jobs. Use this API to get the status of the configuration to determine if the configuration is in sync with the Edge Agent. Use this API to evaluate the health of the Edge Agent.

```sql
SELECT
creation_time,
edge_agent_status,
edge_config,
failed_status_details,
last_updated_time,
stream_arn,
stream_name,
sync_status
FROM aws.kinesisvideo.edge_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_edge_configuration"
    values={[
        { label: 'delete_edge_configuration', value: 'delete_edge_configuration' }
    ]}
>
<TabItem value="delete_edge_configuration">

An asynchronous API that deletes a stream’s existing edge configuration, as well as the corresponding media from the Edge Agent. When you invoke this API, the sync status is set to DELETING. A deletion process starts, in which active edge jobs are stopped and all media is deleted from the edge device. The time to delete varies, depending on the total amount of stored media. If the deletion process fails, the sync status changes to DELETE_FAILED. You will need to re-try the deletion. When the deletion process has completed successfully, the edge configuration is no longer accessible.

```sql
DELETE FROM aws.kinesisvideo.edge_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_edge_configuration_update"
    values={[
        { label: 'start_edge_configuration_update', value: 'start_edge_configuration_update' }
    ]}
>
<TabItem value="start_edge_configuration_update">

An asynchronous API that updates a stream’s existing edge configuration. The Kinesis Video Stream will sync the stream’s edge configuration with the Edge Agent IoT Greengrass component that runs on an IoT Hub Device, setup at your premise. The time to sync can vary and depends on the connectivity of the Hub Device. The SyncStatus will be updated as the edge configuration is acknowledged, and synced with the Edge Agent. If this API is invoked for the first time, a new edge configuration will be created for the stream, and the sync status will be set to SYNCING. You will have to wait for the sync status to reach a terminal state such as: IN_SYNC, or SYNC_FAILED, before using this API again. If you invoke this API during the syncing process, a ResourceInUseException will be thrown. The connectivity of the stream’s edge configuration and the Edge Agent will be retried for 15 minutes. After 15 minutes, the status will transition into the SYNC_FAILED state. To move an edge configuration from one device to another, use DeleteEdgeConfiguration to delete the current edge configuration. You can then invoke StartEdgeConfigurationUpdate with an updated Hub Device ARN.

```sql
EXEC aws.kinesisvideo.edge_configurations.start_edge_configuration_update 
@region='{{ region }}' --required 
@@json=
'{
"StreamName": "{{ StreamName }}", 
"StreamARN": "{{ StreamARN }}", 
"EdgeConfig": "{{ EdgeConfig }}"
}'
;
```
</TabItem>
</Tabs>
