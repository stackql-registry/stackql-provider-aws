--- 
title: replication_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - replication_configs
  - dms
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

Creates, updates, deletes, gets or lists a <code>replication_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="replication_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.replication_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_replication_configs"
    values={[
        { label: 'describe_replication_configs', value: 'describe_replication_configs' }
    ]}
>
<TabItem value="describe_replication_configs">

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
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_configs" /></td>
    <td><code>array</code></td>
    <td>Returned configuration parameters that describe each provisioned DMS Serverless replication.</td>
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
    <td><a href="#describe_replication_configs"><CopyableCode code="describe_replication_configs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns one or more existing DMS Serverless replication configurations as a list of structures.</td>
</tr>
<tr>
    <td><a href="#create_replication_config"><CopyableCode code="create_replication_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplicationConfigIdentifier"><code>ReplicationConfigIdentifier</code></a>, <a href="#parameter-SourceEndpointArn"><code>SourceEndpointArn</code></a>, <a href="#parameter-TargetEndpointArn"><code>TargetEndpointArn</code></a>, <a href="#parameter-ComputeConfig"><code>ComputeConfig</code></a>, <a href="#parameter-ReplicationType"><code>ReplicationType</code></a>, <a href="#parameter-TableMappings"><code>TableMappings</code></a></td>
    <td></td>
    <td>Creates a configuration that you can later provide to configure and start an DMS Serverless replication. You can also provide options to validate the configuration inputs before you start the replication.</td>
</tr>
<tr>
    <td><a href="#modify_replication_config"><CopyableCode code="modify_replication_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplicationConfigArn"><code>ReplicationConfigArn</code></a></td>
    <td></td>
    <td>Modifies an existing DMS Serverless replication configuration that you can use to start a replication. This command includes input validation and logic to check the state of any replication that uses this configuration. You can only modify a replication configuration before any replication that uses it has started. As soon as you have initially started a replication with a given configuiration, you can't modify that configuration, even if you stop it. Other run statuses that allow you to run this command include FAILED and CREATED. A provisioning state that allows you to run this command is FAILED_PROVISION.</td>
</tr>
<tr>
    <td><a href="#delete_replication_config"><CopyableCode code="delete_replication_config" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an DMS Serverless replication configuration. This effectively deprovisions any and all replications that use this configuration. You can't delete the configuration for an DMS Serverless replication that is ongoing. You can delete the configuration when the replication is in a non-RUNNING and non-STARTING state.</td>
</tr>
<tr>
    <td><a href="#reload_replication_tables"><CopyableCode code="reload_replication_tables" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplicationConfigArn"><code>ReplicationConfigArn</code></a>, <a href="#parameter-TablesToReload"><code>TablesToReload</code></a></td>
    <td></td>
    <td>Reloads the target database table with the source data for a given DMS Serverless replication configuration. You can only use this operation with a task in the RUNNING state, otherwise the service will throw an InvalidResourceStateFault exception.</td>
</tr>
<tr>
    <td><a href="#start_replication"><CopyableCode code="start_replication" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplicationConfigArn"><code>ReplicationConfigArn</code></a>, <a href="#parameter-StartReplicationType"><code>StartReplicationType</code></a></td>
    <td></td>
    <td>For a given DMS Serverless replication configuration, DMS connects to the source endpoint and collects the metadata to analyze the replication workload. Using this metadata, DMS then computes and provisions the required capacity and starts replicating to the target endpoint using the server resources that DMS has provisioned for the DMS Serverless replication.</td>
</tr>
<tr>
    <td><a href="#stop_replication"><CopyableCode code="stop_replication" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplicationConfigArn"><code>ReplicationConfigArn</code></a></td>
    <td></td>
    <td>For a given DMS Serverless replication configuration, DMS stops any and all ongoing DMS Serverless replications. This command doesn't deprovision the stopped replications.</td>
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
    defaultValue="describe_replication_configs"
    values={[
        { label: 'describe_replication_configs', value: 'describe_replication_configs' }
    ]}
>
<TabItem value="describe_replication_configs">

Returns one or more existing DMS Serverless replication configurations as a list of structures.

```sql
SELECT
marker,
replication_configs
FROM aws.dms.replication_configs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_replication_config"
    values={[
        { label: 'create_replication_config', value: 'create_replication_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_replication_config">

Creates a configuration that you can later provide to configure and start an DMS Serverless replication. You can also provide options to validate the configuration inputs before you start the replication.

```sql
INSERT INTO aws.dms.replication_configs (
ReplicationConfigIdentifier,
SourceEndpointArn,
TargetEndpointArn,
ComputeConfig,
ReplicationType,
TableMappings,
ReplicationSettings,
SupplementalSettings,
ResourceIdentifier,
Tags,
region
)
SELECT 
'{{ ReplicationConfigIdentifier }}' /* required */,
'{{ SourceEndpointArn }}' /* required */,
'{{ TargetEndpointArn }}' /* required */,
'{{ ComputeConfig }}' /* required */,
'{{ ReplicationType }}' /* required */,
'{{ TableMappings }}' /* required */,
'{{ ReplicationSettings }}',
'{{ SupplementalSettings }}',
'{{ ResourceIdentifier }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
replication_config
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: replication_configs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the replication_configs resource.
    - name: ReplicationConfigIdentifier
      value: "{{ ReplicationConfigIdentifier }}"
      description: |
        A unique identifier that you want to use to create a ReplicationConfigArn that is returned as part of the output from this action. You can then pass this output ReplicationConfigArn as the value of the ReplicationConfigArn option for other actions to identify both DMS Serverless replications and replication configurations that you want those actions to operate on. For some actions, you can also use either this unique identifier or a corresponding ARN in action filters to identify the specific replication and replication configuration to operate on.
    - name: SourceEndpointArn
      value: "{{ SourceEndpointArn }}"
      description: |
        The Amazon Resource Name (ARN) of the source endpoint for this DMS Serverless replication configuration.
    - name: TargetEndpointArn
      value: "{{ TargetEndpointArn }}"
      description: |
        The Amazon Resource Name (ARN) of the target endpoint for this DMS serverless replication configuration.
    - name: ComputeConfig
      description: |
        Configuration parameters for provisioning an DMS Serverless replication.
      value:
        AvailabilityZone: "{{ AvailabilityZone }}"
        DnsNameServers: "{{ DnsNameServers }}"
        KmsKeyId: "{{ KmsKeyId }}"
        MaxCapacityUnits: {{ MaxCapacityUnits }}
        MinCapacityUnits: {{ MinCapacityUnits }}
        MultiAZ: {{ MultiAZ }}
        PreferredMaintenanceWindow: "{{ PreferredMaintenanceWindow }}"
        ReplicationSubnetGroupId: "{{ ReplicationSubnetGroupId }}"
        VpcSecurityGroupIds:
          - "{{ VpcSecurityGroupIds }}"
    - name: ReplicationType
      value: "{{ ReplicationType }}"
      description: |
        The type of DMS Serverless replication to provision using this replication configuration. Possible values: "full-load" "cdc" "full-load-and-cdc"
      valid_values: ['full-load', 'cdc', 'full-load-and-cdc']
    - name: TableMappings
      value: "{{ TableMappings }}"
      description: |
        JSON table mappings for DMS Serverless replications that are provisioned using this replication configuration. For more information, see Specifying table selection and transformations rules using JSON.
    - name: ReplicationSettings
      value: "{{ ReplicationSettings }}"
      description: |
        Optional JSON settings for DMS Serverless replications that are provisioned using this replication configuration. For example, see Change processing tuning settings.
    - name: SupplementalSettings
      value: "{{ SupplementalSettings }}"
      description: |
        Optional JSON settings for specifying supplemental data. For more information, see Specifying supplemental data for task settings.
    - name: ResourceIdentifier
      value: "{{ ResourceIdentifier }}"
      description: |
        Optional unique value or name that you set for a given resource that can be used to construct an Amazon Resource Name (ARN) for that resource. For more information, see Fine-grained access control using resource names and tags.
    - name: Tags
      description: |
        One or more optional tags associated with resources used by the DMS Serverless replication. For more information, see Tagging resources in Database Migration Service.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
          ResourceArn: "{{ ResourceArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_replication_config"
    values={[
        { label: 'modify_replication_config', value: 'modify_replication_config' }
    ]}
>
<TabItem value="modify_replication_config">

Modifies an existing DMS Serverless replication configuration that you can use to start a replication. This command includes input validation and logic to check the state of any replication that uses this configuration. You can only modify a replication configuration before any replication that uses it has started. As soon as you have initially started a replication with a given configuiration, you can't modify that configuration, even if you stop it. Other run statuses that allow you to run this command include FAILED and CREATED. A provisioning state that allows you to run this command is FAILED_PROVISION.

```sql
UPDATE aws.dms.replication_configs
SET 
ReplicationConfigArn = '{{ ReplicationConfigArn }}',
ReplicationConfigIdentifier = '{{ ReplicationConfigIdentifier }}',
ReplicationType = '{{ ReplicationType }}',
TableMappings = '{{ TableMappings }}',
ReplicationSettings = '{{ ReplicationSettings }}',
SupplementalSettings = '{{ SupplementalSettings }}',
ComputeConfig = '{{ ComputeConfig }}',
SourceEndpointArn = '{{ SourceEndpointArn }}',
TargetEndpointArn = '{{ TargetEndpointArn }}'
WHERE 
region = '{{ region }}' --required
AND ReplicationConfigArn = '{{ ReplicationConfigArn }}' --required
RETURNING
replication_config;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_replication_config"
    values={[
        { label: 'delete_replication_config', value: 'delete_replication_config' }
    ]}
>
<TabItem value="delete_replication_config">

Deletes an DMS Serverless replication configuration. This effectively deprovisions any and all replications that use this configuration. You can't delete the configuration for an DMS Serverless replication that is ongoing. You can delete the configuration when the replication is in a non-RUNNING and non-STARTING state.

```sql
DELETE FROM aws.dms.replication_configs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reload_replication_tables"
    values={[
        { label: 'reload_replication_tables', value: 'reload_replication_tables' },
        { label: 'start_replication', value: 'start_replication' },
        { label: 'stop_replication', value: 'stop_replication' }
    ]}
>
<TabItem value="reload_replication_tables">

Reloads the target database table with the source data for a given DMS Serverless replication configuration. You can only use this operation with a task in the RUNNING state, otherwise the service will throw an InvalidResourceStateFault exception.

```sql
EXEC aws.dms.replication_configs.reload_replication_tables 
@region='{{ region }}' --required 
@@json=
'{
"ReplicationConfigArn": "{{ ReplicationConfigArn }}", 
"TablesToReload": "{{ TablesToReload }}", 
"ReloadOption": "{{ ReloadOption }}"
}'
;
```
</TabItem>
<TabItem value="start_replication">

For a given DMS Serverless replication configuration, DMS connects to the source endpoint and collects the metadata to analyze the replication workload. Using this metadata, DMS then computes and provisions the required capacity and starts replicating to the target endpoint using the server resources that DMS has provisioned for the DMS Serverless replication.

```sql
EXEC aws.dms.replication_configs.start_replication 
@region='{{ region }}' --required 
@@json=
'{
"ReplicationConfigArn": "{{ ReplicationConfigArn }}", 
"StartReplicationType": "{{ StartReplicationType }}", 
"PremigrationAssessmentSettings": "{{ PremigrationAssessmentSettings }}", 
"CdcStartTime": "{{ CdcStartTime }}", 
"CdcStartPosition": "{{ CdcStartPosition }}", 
"CdcStopPosition": "{{ CdcStopPosition }}"
}'
;
```
</TabItem>
<TabItem value="stop_replication">

For a given DMS Serverless replication configuration, DMS stops any and all ongoing DMS Serverless replications. This command doesn't deprovision the stopped replications.

```sql
EXEC aws.dms.replication_configs.stop_replication 
@region='{{ region }}' --required 
@@json=
'{
"ReplicationConfigArn": "{{ ReplicationConfigArn }}"
}'
;
```
</TabItem>
</Tabs>
