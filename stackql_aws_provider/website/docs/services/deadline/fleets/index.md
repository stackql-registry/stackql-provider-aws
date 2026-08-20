--- 
title: fleets
hide_title: false
hide_table_of_contents: false
keywords:
  - fleets
  - deadline
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

Creates, updates, deletes, gets or lists a <code>fleets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fleets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.deadline.fleets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_fleet"
    values={[
        { label: 'get_fleet', value: 'get_fleet' },
        { label: 'list_fleets', value: 'list_fleets' }
    ]}
>
<TabItem value="get_fleet">

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
    <td><CopyableCode code="auto_scaling_status" /></td>
    <td><code>string</code></td>
    <td>The Auto Scaling status of the fleet. Either GROWING, STEADY, or SHRINKING. (GROWING, STEADY, SHRINKING)</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>Outlines what the fleet is capable of for minimums, maximums, and naming, in addition to attribute names and values.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Fleet configuration details.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The user or system that created this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the fleet. This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the fleet. This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</td>
</tr>
<tr>
    <td><CopyableCode code="farm_id" /></td>
    <td><code>string</code></td>
    <td>The farm ID of the farm in the fleet. (pattern: &lt;code&gt;farm-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>The fleet ID. (pattern: &lt;code&gt;fleet-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="host_configuration" /></td>
    <td><code>object</code></td>
    <td>Provides a script that runs as a worker is starting up that you can use to provide additional configuration for workers in your fleet. To remove a script from a fleet, use the UpdateFleet operation with the hostConfiguration scriptBody parameter set to an empty string ("").</td>
</tr>
<tr>
    <td><CopyableCode code="max_worker_count" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of workers specified in the fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="min_worker_count" /></td>
    <td><code>integer</code></td>
    <td>The minimum number of workers specified in the fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The IAM role ARN. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*):iam::\d&#123;12&#125;:role(/&#91;!-.0-~&#93;+)*/&#91;\w+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the fleet. (ACTIVE, CREATE_IN_PROGRESS, UPDATE_IN_PROGRESS, CREATE_FAILED, UPDATE_FAILED, SUSPENDED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A message that communicates a suspended status of the fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="target_worker_count" /></td>
    <td><code>integer</code></td>
    <td>The number of target workers in the fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The user or system that updated this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="worker_count" /></td>
    <td><code>integer</code></td>
    <td>The number of workers in the fleet.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_fleets">

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
    <td><CopyableCode code="auto_scaling_status" /></td>
    <td><code>string</code></td>
    <td>The Auto Scaling status of a fleet. (GROWING, STEADY, SHRINKING)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Fleet configuration details.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The user or system that created this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the fleet summary to update. This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</td>
</tr>
<tr>
    <td><CopyableCode code="farm_id" /></td>
    <td><code>string</code></td>
    <td>The farm ID. (pattern: &lt;code&gt;farm-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>The fleet ID. (pattern: &lt;code&gt;fleet-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="max_worker_count" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of workers specified in the fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="min_worker_count" /></td>
    <td><code>integer</code></td>
    <td>The minimum number of workers in the fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the fleet. (ACTIVE, CREATE_IN_PROGRESS, UPDATE_IN_PROGRESS, CREATE_FAILED, UPDATE_FAILED, SUSPENDED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A message that communicates a suspended status of the fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="target_worker_count" /></td>
    <td><code>integer</code></td>
    <td>The target number of workers in a fleet.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The user or system that updated this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="worker_count" /></td>
    <td><code>integer</code></td>
    <td>The number of workers in the fleet summary.</td>
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
    <td><a href="#get_fleet"><CopyableCode code="get_fleet" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-fleet_id"><code>fleet_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a fleet.</td>
</tr>
<tr>
    <td><a href="#list_fleets"><CopyableCode code="list_fleets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-principalId"><code>principalId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td>Lists fleets.</td>
</tr>
<tr>
    <td><a href="#create_fleet"><CopyableCode code="create_fleet" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a>, <a href="#parameter-maxWorkerCount"><code>maxWorkerCount</code></a>, <a href="#parameter-configuration"><code>configuration</code></a></td>
    <td><a href="#parameter-X-Amz-Client-Token"><code>X-Amz-Client-Token</code></a></td>
    <td>Creates a fleet. Fleets gather information relating to compute, or capacity, for renders within your farms. You can choose to manage your own capacity or opt to have fleets fully managed by Deadline Cloud.</td>
</tr>
<tr>
    <td><a href="#associate_member_to_fleet"><CopyableCode code="associate_member_to_fleet" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-fleet_id"><code>fleet_id</code></a>, <a href="#parameter-principal_id"><code>principal_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-principalType"><code>principalType</code></a>, <a href="#parameter-identityStoreId"><code>identityStoreId</code></a>, <a href="#parameter-membershipLevel"><code>membershipLevel</code></a></td>
    <td></td>
    <td>Assigns a fleet membership level to a member.</td>
</tr>
<tr>
    <td><a href="#disassociate_member_from_fleet"><CopyableCode code="disassociate_member_from_fleet" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-fleet_id"><code>fleet_id</code></a>, <a href="#parameter-principal_id"><code>principal_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates a member from a fleet.</td>
</tr>
<tr>
    <td><a href="#update_fleet"><CopyableCode code="update_fleet" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-fleet_id"><code>fleet_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amz-Client-Token"><code>X-Amz-Client-Token</code></a></td>
    <td>Updates a fleet.</td>
</tr>
<tr>
    <td><a href="#delete_fleet"><CopyableCode code="delete_fleet" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-fleet_id"><code>fleet_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amz-Client-Token"><code>X-Amz-Client-Token</code></a></td>
    <td>Deletes a fleet.</td>
</tr>
<tr>
    <td><a href="#assume_fleet_role_for_read"><CopyableCode code="assume_fleet_role_for_read" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-fleet_id"><code>fleet_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get Amazon Web Services credentials from the fleet role. The IAM permissions of the credentials are scoped down to have read-only access.</td>
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
<tr id="parameter-farm_id">
    <td><CopyableCode code="farm_id" /></td>
    <td><code>string</code></td>
    <td>The farm ID for the fleet's farm.</td>
</tr>
<tr id="parameter-fleet_id">
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>The fleet ID.</td>
</tr>
<tr id="parameter-principal_id">
    <td><CopyableCode code="principal_id" /></td>
    <td><code>string</code></td>
    <td>A member's principal ID to disassociate from a fleet.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-X-Amz-Client-Token">
    <td><CopyableCode code="X-Amz-Client-Token" /></td>
    <td><code>string</code></td>
    <td>The unique token which the server uses to recognize retries of the same request.</td>
</tr>
<tr id="parameter-displayName">
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display names of a list of fleets. This field can store any content. Escape or encode this content before displaying it on a webpage or any other system that might interpret the content of this field.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null to start from the beginning.</td>
</tr>
<tr id="parameter-principalId">
    <td><CopyableCode code="principalId" /></td>
    <td><code>string</code></td>
    <td>The principal ID of the members to include in the fleet.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the fleet.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_fleet"
    values={[
        { label: 'get_fleet', value: 'get_fleet' },
        { label: 'list_fleets', value: 'list_fleets' }
    ]}
>
<TabItem value="get_fleet">

Get a fleet.

```sql
SELECT
auto_scaling_status,
capabilities,
configuration,
created_at,
created_by,
description,
display_name,
farm_id,
fleet_id,
host_configuration,
max_worker_count,
min_worker_count,
role_arn,
status,
status_message,
target_worker_count,
updated_at,
updated_by,
worker_count
FROM aws.deadline.fleets
WHERE farm_id = '{{ farm_id }}' -- required
AND fleet_id = '{{ fleet_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_fleets">

Lists fleets.

```sql
SELECT
auto_scaling_status,
configuration,
created_at,
created_by,
display_name,
farm_id,
fleet_id,
max_worker_count,
min_worker_count,
status,
status_message,
target_worker_count,
updated_at,
updated_by,
worker_count
FROM aws.deadline.fleets
WHERE farm_id = '{{ farm_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND principalId = '{{ principalId }}'
AND displayName = '{{ displayName }}'
AND status = '{{ status }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_fleet"
    values={[
        { label: 'create_fleet', value: 'create_fleet' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_fleet">

Creates a fleet. Fleets gather information relating to compute, or capacity, for renders within your farms. You can choose to manage your own capacity or opt to have fleets fully managed by Deadline Cloud.

```sql
INSERT INTO aws.deadline.fleets (
displayName,
description,
roleArn,
minWorkerCount,
maxWorkerCount,
configuration,
tags,
hostConfiguration,
farm_id,
region,
`X-Amz-Client-Token`
)
SELECT 
'{{ displayName }}' /* required */,
'{{ description }}',
'{{ roleArn }}' /* required */,
{{ minWorkerCount }},
{{ maxWorkerCount }} /* required */,
'{{ configuration }}' /* required */,
'{{ tags }}',
'{{ hostConfiguration }}',
'{{ farm_id }}',
'{{ region }}',
'{{ X-Amz-Client-Token }}'
RETURNING
fleet_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: fleets
  props:
    - name: farm_id
      value: "{{ farm_id }}"
      description: Required parameter for the fleets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the fleets resource.
    - name: displayName
      value: "{{ displayName }}"
    - name: description
      value: "{{ description }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: minWorkerCount
      value: {{ minWorkerCount }}
    - name: maxWorkerCount
      value: {{ maxWorkerCount }}
    - name: configuration
      description: |
        Fleet configuration details.
      value:
        customerManaged:
          mode: "{{ mode }}"
          autoScalingConfiguration:
            standbyWorkerCount: {{ standbyWorkerCount }}
            workerIdleDurationSeconds: {{ workerIdleDurationSeconds }}
            scaleOutWorkersPerMinute: {{ scaleOutWorkersPerMinute }}
          workerCapabilities:
            vCpuCount:
              min: {{ min }}
              max: {{ max }}
            memoryMiB:
              min: {{ min }}
              max: {{ max }}
            acceleratorTypes:
              - "{{ acceleratorTypes }}"
            acceleratorCount:
              min: {{ min }}
              max: {{ max }}
            acceleratorTotalMemoryMiB:
              min: {{ min }}
              max: {{ max }}
            osFamily: "{{ osFamily }}"
            cpuArchitectureType: "{{ cpuArchitectureType }}"
            customAmounts:
              - name: "{{ name }}"
                min: {{ min }}
                max: {{ max }}
            customAttributes:
              - name: "{{ name }}"
                values: "{{ values }}"
          storageProfileId: "{{ storageProfileId }}"
          tagPropagationMode: "{{ tagPropagationMode }}"
        serviceManagedEc2:
          instanceCapabilities:
            vCpuCount:
              min: {{ min }}
              max: {{ max }}
            memoryMiB:
              min: {{ min }}
              max: {{ max }}
            osFamily: "{{ osFamily }}"
            cpuArchitectureType: "{{ cpuArchitectureType }}"
            rootEbsVolume:
              sizeGiB: {{ sizeGiB }}
              iops: {{ iops }}
              throughputMiB: {{ throughputMiB }}
            acceleratorCapabilities:
              selections:
                - name: "{{ name }}"
                  runtime: "{{ runtime }}"
              count:
                min: {{ min }}
                max: {{ max }}
            allowedInstanceTypes:
              - "{{ allowedInstanceTypes }}"
            excludedInstanceTypes:
              - "{{ excludedInstanceTypes }}"
            customAmounts:
              - name: "{{ name }}"
                min: {{ min }}
                max: {{ max }}
            customAttributes:
              - name: "{{ name }}"
                values: "{{ values }}"
          instanceMarketOptions:
            type_: "{{ type_ }}"
          vpcConfiguration:
            resourceConfigurationArns:
              - "{{ resourceConfigurationArns }}"
          storageProfileId: "{{ storageProfileId }}"
          persistentVolumeConfiguration:
            sizeGiB: {{ sizeGiB }}
            iops: {{ iops }}
            throughputMiB: {{ throughputMiB }}
            mountPath: "{{ mountPath }}"
            lastUsedTtlHours: {{ lastUsedTtlHours }}
          autoScalingConfiguration:
            standbyWorkerCount: {{ standbyWorkerCount }}
            workerIdleDurationSeconds: {{ workerIdleDurationSeconds }}
            scaleOutWorkersPerMinute: {{ scaleOutWorkersPerMinute }}
    - name: tags
      value: "{{ tags }}"
    - name: hostConfiguration
      description: |
        Provides a script that runs as a worker is starting up that you can use to provide additional configuration for workers in your fleet. To remove a script from a fleet, use the UpdateFleet operation with the hostConfiguration scriptBody parameter set to an empty string ("").
      value:
        scriptBody: "{{ scriptBody }}"
        scriptTimeoutSeconds: {{ scriptTimeoutSeconds }}
    - name: X-Amz-Client-Token
      value: "{{ X-Amz-Client-Token }}"
      description: The unique token which the server uses to recognize retries of the same request.
      description: The unique token which the server uses to recognize retries of the same request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_member_to_fleet"
    values={[
        { label: 'associate_member_to_fleet', value: 'associate_member_to_fleet' },
        { label: 'disassociate_member_from_fleet', value: 'disassociate_member_from_fleet' },
        { label: 'update_fleet', value: 'update_fleet' }
    ]}
>
<TabItem value="associate_member_to_fleet">

Assigns a fleet membership level to a member.

```sql
UPDATE aws.deadline.fleets
SET 
principalType = '{{ principalType }}',
identityStoreId = '{{ identityStoreId }}',
membershipLevel = '{{ membershipLevel }}',
identityCenterRegion = '{{ identityCenterRegion }}'
WHERE 
farm_id = '{{ farm_id }}' --required
AND fleet_id = '{{ fleet_id }}' --required
AND principal_id = '{{ principal_id }}' --required
AND region = '{{ region }}' --required
AND principalType = '{{ principalType }}' --required
AND identityStoreId = '{{ identityStoreId }}' --required
AND membershipLevel = '{{ membershipLevel }}' --required;
```
</TabItem>
<TabItem value="disassociate_member_from_fleet">

Disassociates a member from a fleet.

```sql
UPDATE aws.deadline.fleets
SET 
-- No updatable properties
WHERE 
farm_id = '{{ farm_id }}' --required
AND fleet_id = '{{ fleet_id }}' --required
AND principal_id = '{{ principal_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_fleet">

Updates a fleet.

```sql
UPDATE aws.deadline.fleets
SET 
displayName = '{{ displayName }}',
description = '{{ description }}',
roleArn = '{{ roleArn }}',
minWorkerCount = {{ minWorkerCount }},
maxWorkerCount = {{ maxWorkerCount }},
configuration = '{{ configuration }}',
hostConfiguration = '{{ hostConfiguration }}'
WHERE 
farm_id = '{{ farm_id }}' --required
AND fleet_id = '{{ fleet_id }}' --required
AND region = '{{ region }}' --required
AND `X-Amz-Client-Token` = '{{ X-Amz-Client-Token}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_fleet"
    values={[
        { label: 'delete_fleet', value: 'delete_fleet' }
    ]}
>
<TabItem value="delete_fleet">

Deletes a fleet.

```sql
DELETE FROM aws.deadline.fleets
WHERE farm_id = '{{ farm_id }}' --required
AND fleet_id = '{{ fleet_id }}' --required
AND region = '{{ region }}' --required
AND `X-Amz-Client-Token` = '{{ X-Amz-Client-Token }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="assume_fleet_role_for_read"
    values={[
        { label: 'assume_fleet_role_for_read', value: 'assume_fleet_role_for_read' }
    ]}
>
<TabItem value="assume_fleet_role_for_read">

Get Amazon Web Services credentials from the fleet role. The IAM permissions of the credentials are scoped down to have read-only access.

```sql
EXEC aws.deadline.fleets.assume_fleet_role_for_read 
@farm_id='{{ farm_id }}' --required, 
@fleet_id='{{ fleet_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
